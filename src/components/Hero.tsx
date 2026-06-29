'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Animated mesh gradient background */}
      <div className={styles.gradientBg} aria-hidden="true" />
      <div className={styles.gradientOrb1} aria-hidden="true" />
      <div className={styles.gradientOrb2} aria-hidden="true" />
      <div className={styles.gradientOrb3} aria-hidden="true" />

      {/* Decorative shapes */}
      <div className={styles.floatingShape1} aria-hidden="true" />
      <div className={styles.floatingShape2} aria-hidden="true" />
      <div className={styles.floatingShape3} aria-hidden="true" />

      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="section-badge" variants={fadeUp}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6" fill="#10B981" />
            <path d="M6 8l1.5 1.5L10 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Soluciones de datos a tu medida
        </motion.div>

        <motion.h1 className={`heading-xl ${styles.title}`} variants={fadeUp}>
          En Popayán, transformamos datos en{' '}
          <span className="text-gradient">decisiones inteligentes</span>
        </motion.h1>

        <motion.p className={`text-body ${styles.subtitle}`} variants={fadeUp}>
          Arquitectamos pipelines robustos, desplegamos modelos de ML y construimos software 
          que impulsa tu negocio — todo con la energía y determinación de un hámster en su rueda.
        </motion.p>

        <motion.div className={styles.ctas} variants={fadeUp}>
          <a href="#contacto" className="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar Consulta
          </a>
          <a href="#servicios" className="btn btn-secondary">
            Ver Servicios
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>

        <motion.div className={styles.trustBadges} variants={fadeUp}>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>+50 proyectos entregados</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>100% a tiempo</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Equipos dedicados</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Hamster illustration */}
      <motion.div
        className={styles.heroIllustration}
        initial={{ opacity: 0, scale: 0.8, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.hamsterSvg}>
          {/* Wheel */}
          <circle cx="160" cy="160" r="140" stroke="url(#wheelGrad)" strokeWidth="6" strokeDasharray="12 8" className={styles.wheel} />
          <circle cx="160" cy="160" r="120" stroke="var(--color-border-strong)" strokeWidth="2" strokeDasharray="4 6" className={styles.wheelInner} />

          {/* Hamster body */}
          <ellipse cx="160" cy="175" rx="55" ry="50" fill="url(#bodyGrad)" />
          {/* Head */}
          <circle cx="160" cy="130" r="42" fill="#FBBF24" />
          {/* Ears */}
          <ellipse cx="128" cy="100" rx="16" ry="20" fill="#FED514" stroke="#E5BF00" strokeWidth="2" />
          <ellipse cx="192" cy="100" rx="16" ry="20" fill="#FED514" stroke="#E5BF00" strokeWidth="2" />
          <ellipse cx="128" cy="100" rx="10" ry="13" fill="#FEE566" />
          <ellipse cx="192" cy="100" rx="10" ry="13" fill="#FEE566" />
          {/* Eyes */}
          <circle cx="145" cy="125" r="8" fill="#013A6B" />
          <circle cx="175" cy="125" r="8" fill="#013A6B" />
          <circle cx="148" cy="122" r="3" fill="white" />
          <circle cx="178" cy="122" r="3" fill="white" />
          {/* Nose */}
          <ellipse cx="160" cy="138" rx="5" ry="3.5" fill="#E5BF00" />
          {/* Mouth */}
          <path d="M153 143 Q160 148 167 143" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="133" cy="136" r="10" fill="#FEE566" opacity="0.5" />
          <circle cx="187" cy="136" r="10" fill="#FEE566" opacity="0.5" />
          {/* Arms */}
          <ellipse cx="115" cy="185" rx="12" ry="8" fill="#E5BF00" transform="rotate(-20, 115, 185)" />
          <ellipse cx="205" cy="185" rx="12" ry="8" fill="#E5BF00" transform="rotate(20, 205, 185)" />
          <ellipse cx="140" cy="220" rx="14" ry="8" fill="#E5BF00" />
          <ellipse cx="180" cy="220" rx="14" ry="8" fill="#E5BF00" />
          {/* Tiny data nodes floating around */}
          <circle cx="80" cy="80" r="6" fill="var(--color-primary)" opacity="0.6" className={styles.dataNode1} />
          <circle cx="240" cy="90" r="4" fill="var(--color-cta)" opacity="0.6" className={styles.dataNode2} />
          <circle cx="260" cy="200" r="5" fill="var(--color-accent-warm)" opacity="0.6" className={styles.dataNode3} />
          <circle cx="60" cy="210" r="4" fill="var(--color-primary-light)" opacity="0.6" className={styles.dataNode4} />
          {/* Connection lines */}
          <line x1="80" y1="80" x2="128" y2="100" stroke="var(--color-primary)" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
          <line x1="240" y1="90" x2="192" y2="100" stroke="var(--color-cta)" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />

          <defs>
            <linearGradient id="wheelGrad" x1="20" y1="20" x2="300" y2="300">
              <stop stopColor="#024F90" />
              <stop offset="0.5" stopColor="#0A6BB5" />
              <stop offset="1" stopColor="#FED514" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="105" y1="125" x2="215" y2="225">
              <stop stopColor="#FED514" />
              <stop offset="1" stopColor="#E5BF00" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
