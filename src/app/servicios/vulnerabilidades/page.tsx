'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    async function fetchVulns() {
      try {
        // NVD API 2.0 requires ISO-8601 timestamps without timezone suffix but with milliseconds
        // Best approach for client side: query the last 7 days
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
          
          for (const item of json.vulnerabilities) {
            const doc = item.cve;
            if (!doc) continue;

            // Obtener descripción (preferiblemente en inglés o la primera disponible)
            const descObj = doc.descriptions?.find((d: any) => d.lang === 'en') || doc.descriptions?.[0];
            const summary = descObj ? descObj.value : 'Sin descripción disponible.';

            // Obtener puntuación CVSS (V3 > V4 > V2)
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
          }

          // NVD devuelve ordenado por fecha de publicación ascendente (más antiguo primero)
          // Invertimos el array para mostrar los más recientes arriba
          mappedVulns.reverse();
          setVulns(mappedVulns.slice(0, 30));
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
      month: 'long', 
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
              Vulnerabilidades <span className={styles.highlight}>Recientes</span>
            </h1>
            <p className={styles.subtitle}>
              Monitoreo en tiempo real de las últimas fallas de seguridad publicadas en el registro oficial CVE (Common Vulnerabilities and Exposures).
            </p>
          </motion.div>

          {loading ? (
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
              <p>Obteniendo datos de seguridad...</p>
            </div>
          ) : (
            <motion.div 
              className={styles.grid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {vulns.map((vuln, i) => {
                const severity = getSeverity(vuln.cvss);
                return (
                  <motion.div
                    key={vuln.id}
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className={styles.cardHeader}>
                      <div>
                        <h2 className={styles.cveId}>{vuln.id}</h2>
                        <span className={styles.date}>{formatDate(vuln.Published)}</span>
                      </div>
                      <span className={`${styles.severityBadge} ${styles[`severity_${severity.color}`]}`}>
                        {severity.label} {vuln.cvss ? `(${vuln.cvss})` : ''}
                      </span>
                    </div>
                    <p className={styles.summary} title={vuln.summary}>
                      {vuln.summary}
                    </p>
                    <div className={styles.cardFooter}>
                      <a 
                        href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${vuln.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        Ver detalles en Mitre
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
