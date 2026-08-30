/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { ShieldAlert, AlertTriangle, AlertCircle, Activity } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Vulnerabilidades.module.css';

interface Vulnerability {
  id: string;
  summary: string;
  cvss: number | null;
  Published: string;
}

export default function VulnerabilidadesPage() {
  const [vulns, setVulns] = useState<Vulnerability[]>([]);
  const [loading, setLoading] = useState(true);

  // Metrics state
  const [total, setTotal] = useState(0);
  const [critical, setCritical] = useState(0);
  const [high, setHigh] = useState(0);
  const [avgCvss, setAvgCvss] = useState(0);
  const [chartData, setChartData] = useState<{name: string, value: number, color: string}[]>([]);

  useEffect(() => {
    async function fetchVulns() {
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 7);

        const formatNVDDate = (d: Date) => d.toISOString().split('.')[0] + '.000';
        
        const url = `https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate=${formatNVDDate(startDate)}&pubEndDate=${formatNVDDate(endDate)}&resultsPerPage=30`;
        
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error en la API de NVD: ${res.statusText}`);
        }
        
        const json = await res.json();
        
        if (json && json.vulnerabilities && Array.isArray(json.vulnerabilities)) {
          const mappedVulns: Vulnerability[] = [];
          
          let criticalCount = 0;
          let highCount = 0;
          let mediumCount = 0;
          let lowCount = 0;
          let unknownCount = 0;
          let sumCvss = 0;
          let countCvss = 0;

          for (const item of json.vulnerabilities) {
            const doc = item.cve;
            if (!doc) continue;

            const descObj = doc.descriptions?.find((d: any) => d.lang === 'en') || doc.descriptions?.[0];
            const summary = descObj ? descObj.value : 'Sin descripción disponible.';

            let cvss = null;
            const metrics = doc.metrics || {};
            if (metrics.cvssMetricV31?.[0]) cvss = metrics.cvssMetricV31[0].cvssData.baseScore;
            else if (metrics.cvssMetricV30?.[0]) cvss = metrics.cvssMetricV30[0].cvssData.baseScore;
            else if (metrics.cvssMetricV40?.[0]) cvss = metrics.cvssMetricV40[0].cvssData.baseScore;
            else if (metrics.cvssMetricV2?.[0]) cvss = metrics.cvssMetricV2[0].cvssData.baseScore;

            mappedVulns.push({
              id: doc.id,
              summary: summary,
              cvss: cvss,
              Published: doc.published || doc.lastModified || ''
            });

            // Metrics calculation
            if (cvss !== null) {
              sumCvss += cvss;
              countCvss++;
              if (cvss >= 9.0) criticalCount++;
              else if (cvss >= 7.0) highCount++;
              else if (cvss >= 4.0) mediumCount++;
              else lowCount++;
            } else {
              unknownCount++;
            }
          }

          mappedVulns.reverse();
          setVulns(mappedVulns.slice(0, 30));

          setTotal(mappedVulns.length);
          setCritical(criticalCount);
          setHigh(highCount);
          setAvgCvss(countCvss > 0 ? Number((sumCvss / countCvss).toFixed(1)) : 0);

          setChartData([
            { name: 'Crítico', value: criticalCount, color: '#ef4444' },
            { name: 'Alto', value: highCount, color: '#f97316' },
            { name: 'Medio', value: mediumCount, color: '#eab308' },
            { name: 'Bajo', value: lowCount, color: '#22c55e' },
            { name: 'Desconocido', value: unknownCount, color: '#6b7280' }
          ].filter(d => d.value > 0));
        }
      } catch (error) {
        console.error("Error fetching vulnerabilities", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVulns();
  }, []);

  const getSeverity = (cvss: number | null) => {
    if (cvss === null || cvss === undefined) return { label: 'Desconocido', color: 'gray' };
    if (cvss >= 9.0) return { label: 'Crítico', color: 'red' };
    if (cvss >= 7.0) return { label: 'Alto', color: 'orange' };
    if (cvss >= 4.0) return { label: 'Medio', color: 'yellow' };
    return { label: 'Bajo', color: 'green' };
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Fecha desconocida';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Fecha desconocida';
    return new Intl.DateTimeFormat('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.bgGlow}></div>
        <div className={styles.bgGlow2}></div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>
              Dashboard de <span className={styles.highlight}>Vulnerabilidades</span>
            </h1>
            <p className={styles.subtitle}>
              Monitoreo en tiempo real de las últimas fallas de seguridad publicadas en el registro oficial CVE.
            </p>
          </motion.div>

          {loading ? (
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
              <p>Analizando datos de seguridad...</p>
            </div>
          ) : (
            <motion.div 
              className={styles.dashboardGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* KPIs */}
              <div className={styles.kpiGrid}>
                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIconWrapper} ${styles.iconTotal}`}>
                    <ShieldAlert size={28} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>Total Analizadas</span>
                    <span className={styles.kpiValue}>{total}</span>
                  </div>
                </div>

                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIconWrapper} ${styles.iconCritical}`}>
                    <AlertTriangle size={28} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>Críticas (CVSS 9+)</span>
                    <span className={styles.kpiValue}>{critical}</span>
                  </div>
                </div>

                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIconWrapper} ${styles.iconHigh}`}>
                    <AlertCircle size={28} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>Altas (CVSS 7-8.9)</span>
                    <span className={styles.kpiValue}>{high}</span>
                  </div>
                </div>

                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIconWrapper} ${styles.iconAvg}`}>
                    <Activity size={28} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>CVSS Promedio</span>
                    <span className={styles.kpiValue}>{avgCvss}</span>
                  </div>
                </div>
              </div>

              {/* Main Area: Chart & Table */}
              <div className={styles.dashboardMain}>
                <div className={styles.chartContainer}>
                  <h3 className={styles.sectionTitle}>Distribución de Severidad</h3>
                  <div className={styles.chartWrapper}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <RechartsTooltip 
                          contentStyle={{ background: 'rgba(10, 28, 50, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                          itemStyle={{ color: 'white' }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className={styles.tableContainer}>
                  <h3 className={styles.sectionTitle}>Listado de CVEs Recientes</h3>
                  <div className={styles.tableWrapper}>
                    <table className={styles.vulnTable}>
                      <thead>
                        <tr>
                          <th>ID CVE</th>
                          <th>Severidad</th>
                          <th>Score</th>
                          <th>Fecha</th>
                          <th>Resumen</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vulns.map((vuln) => {
                          const severity = getSeverity(vuln.cvss);
                          return (
                            <tr key={vuln.id}>
                              <td className={styles.cveId}>{vuln.id}</td>
                              <td>
                                <span className={`${styles.severityBadge} ${styles[`severity_${severity.color}`]}`}>
                                  {severity.label}
                                </span>
                              </td>
                              <td>{vuln.cvss !== null ? vuln.cvss : '-'}</td>
                              <td>{formatDate(vuln.Published)}</td>
                              <td>
                                <div className={styles.summaryCell} title={vuln.summary}>
                                  {vuln.summary}
                                </div>
                              </td>
                              <td>
                                <a 
                                  href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${vuln.id}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className={styles.link}
                                >
                                  Ver Mitre
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
