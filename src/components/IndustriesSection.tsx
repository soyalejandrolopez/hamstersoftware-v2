'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './IndustriesSection.module.css';

const industries = [
  // Tech
  { label: 'SaaS', color: '#024F90' },
  { label: 'Micro SaaS', color: '#024F90' },
  { label: 'B2B', color: '#024F90' },
  { label: 'Developer Tools', color: '#024F90' },
  { label: 'IA / Chatbots', color: '#024F90' },
  { label: 'Ciberseguridad', color: '#024F90' },
  // Finance
  { label: 'Fintech', color: '#FED514' },
  { label: 'Banca', color: '#FED514' },
  { label: 'Seguros', color: '#FED514' },
  { label: 'Facturación', color: '#FED514' },
  // Health
  { label: 'Clínica Médica', color: '#024F90' },
  { label: 'Farmacia', color: '#024F90' },
  { label: 'Odontología', color: '#024F90' },
  { label: 'Veterinaria', color: '#024F90' },
  { label: 'Salud Mental', color: '#024F90' },
  // E-commerce
  { label: 'E-commerce', color: '#FED514' },
  { label: 'Marketplace', color: '#FED514' },
  { label: 'Suscripciones', color: '#FED514' },
  { label: 'Delivery', color: '#FED514' },
  // Services
  { label: 'Restaurantes', color: '#024F90' },
  { label: 'Hoteles', color: '#024F90' },
  { label: 'Belleza / Spa', color: '#024F90' },
  { label: 'Servicios Legales', color: '#024F90' },
  { label: 'Reservas', color: '#024F90' },
  // Creative
  { label: 'Portafolio', color: '#FED514' },
  { label: 'Agencia', color: '#FED514' },
  { label: 'Gaming', color: '#FED514' },
  { label: 'Streaming', color: '#FED514' },
  // Lifestyle
  { label: 'Hábitos', color: '#024F90' },
  { label: 'Recetas', color: '#024F90' },
  { label: 'Meditación', color: '#024F90' },
  // Emerging
  { label: 'Web3 / NFT', color: '#FED514' },
  { label: 'Computación Cuántica', color: '#FED514' },
  { label: 'Drones Autónomos', color: '#FED514' },
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
                style={{ borderColor: `${item.color}30`, color: item.color }}
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
                style={{ borderColor: `${item.color}30`, color: item.color }}
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
