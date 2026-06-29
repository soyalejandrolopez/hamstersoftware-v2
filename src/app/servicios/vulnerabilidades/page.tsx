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
        const res = await fetch('https://cve.circl.lu/api/last');
        const json = await res.json();
        
        if (json && Array.isArray(json)) {
          const mappedVulns: Vulnerability[] = [];
          
          for (const doc of json) {
            let score = null;
            const dbSev = doc.database_specific?.severity?.toUpperCase();
            
            // Map text severity to numeric proxy for existing getSeverity logic
            if (dbSev === 'CRITICAL') score = 9.5;
            else if (dbSev === 'HIGH') score = 7.5;
            else if (dbSev === 'MODERATE' || dbSev === 'MEDIUM') score = 5.5;
            else if (dbSev === 'LOW') score = 2.5;

            mappedVulns.push({
              id: (doc.aliases && doc.aliases.length > 0) ? doc.aliases[0] : doc.id,
              summary: doc.details || 'Sin descripción disponible.',
              cvss: score,
              Published: doc.published || doc.modified || ''
            });
          }

          const validVulns = mappedVulns.filter(v => v.id).slice(0, 30);
          setVulns(validVulns);
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
