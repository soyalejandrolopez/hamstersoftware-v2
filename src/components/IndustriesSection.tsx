'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './IndustriesSection.module.css';

const industries = [
  // Tech
  { label: 'SaaS', color: '#0ea5e9' },
  { label: 'Micro SaaS', color: '#0ea5e9' },
  { label: 'B2B', color: '#0ea5e9' },
  { label: 'Developer Tools', color: '#0ea5e9' },
  { label: 'IA / Chatbots', color: '#0ea5e9' },
  { label: 'Ciberseguridad', color: '#0ea5e9' },
  // Finance
  { label: 'Fintech', color: '#38bdf8' },
  { label: 'Banca', color: '#38bdf8' },
  { label: 'Seguros', color: '#38bdf8' },
  { label: 'Facturación', color: '#38bdf8' },
  // Health
  { label: 'Clínica Médica', color: '#0ea5e9' },
  { label: 'Farmacia', color: '#0ea5e9' },
  { label: 'Odontología', color: '#0ea5e9' },
  { label: 'Veterinaria', color: '#0ea5e9' },
  { label: 'Salud Mental', color: '#0ea5e9' },
  // E-commerce
  { label: 'E-commerce', color: '#38bdf8' },
  { label: 'Marketplace', color: '#38bdf8' },
  { label: 'Suscripciones', color: '#38bdf8' },
  { label: 'Delivery', color: '#38bdf8' },
  // Services
  { label: 'Restaurantes', color: '#0ea5e9' },
  { label: 'Hoteles', color: '#0ea5e9' },
  { label: 'Belleza / Spa', color: '#0ea5e9' },
  { label: 'Servicios Legales', color: '#0ea5e9' },
  { label: 'Reservas', color: '#0ea5e9' },
  // Creative
  { label: 'Portafolio', color: '#38bdf8' },
  { label: 'Agencia', color: '#38bdf8' },
  { label: 'Gaming', color: '#38bdf8' },
  { label: 'Streaming', color: '#38bdf8' },
  // Lifestyle
  { label: 'Hábitos', color: '#0ea5e9' },
  { label: 'Recetas', color: '#0ea5e9' },
  { label: 'Meditación', color: '#0ea5e9' },
  // Emerging
  { label: 'Web3 / NFT', color: '#38bdf8' },
  { label: 'Computación Cuántica', color: '#38bdf8' },
  { label: 'Drones Autónomos', color: '#38bdf8' },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const firstRow = industries.slice(0, Math.ceil(industries.length / 2));
  const secondRow = industries.slice(Math.ceil(industries.length / 2));

  return (
    <section className={`section ${styles.industries}`} id="industrias" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Industrias
        </span>
        <h2 className="heading-lg">
          Experiencia en <span className="text-gradient">todas las industrias</span>
        </h2>
        <p className="text-body">
          Desde fintech hasta salud, hemos construido soluciones para empresas en todos los sectores.
        </p>
      </motion.div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            {[...firstRow, ...firstRow].map((item, i) => (
              <span
                key={i}
                className={styles.pill}
                style={{ borderColor: `${item.color}40`, color: '#fff' }}
              >
                <span className={styles.pillDot} style={{ background: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <div className={`${styles.marqueeTrack} ${styles.marqueeReverse}`}>
          <div className={styles.marqueeContent}>
            {[...secondRow, ...secondRow].map((item, i) => (
              <span
                key={i}
                className={styles.pill}
                style={{ borderColor: `${item.color}40`, color: '#fff' }}
              >
                <span className={styles.pillDot} style={{ background: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
