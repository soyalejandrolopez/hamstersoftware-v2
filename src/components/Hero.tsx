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
            <circle cx="8" cy="8" r="6" fill="var(--color-primary)" />
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>+50 proyectos entregados</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>100% a tiempo</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 320 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.hamsterSvg}>
          
          {/* Glowing 3D Platform */}
          <g className={styles.platform}>
            <ellipse cx="160" cy="300" rx="140" ry="25" fill="url(#platformGrad1)" />
            <ellipse cx="160" cy="290" rx="140" ry="25" fill="url(#platformGrad2)" />
            <path d="M20 290 L20 300 A 140 25 0 0 0 300 300 L300 290 A 140 25 0 0 1 20 290 Z" fill="#0284c7" opacity="0.8" />
            {/* Glow effect under platform */}
            <ellipse cx="160" cy="310" rx="130" ry="20" fill="#38bdf8" filter="blur(15px)" opacity="0.4" />
          </g>

          {/* Wheel */}
          <circle cx="160" cy="140" r="140" stroke="url(#wheelGrad)" strokeWidth="6" strokeDasharray="12 8" className={styles.wheel} />
          <circle cx="160" cy="140" r="120" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 6" className={styles.wheelInner} />

          {/* Hamster body */}
          <ellipse cx="160" cy="155" rx="55" ry="50" fill="url(#bodyGrad)" />
          {/* Head */}
          <circle cx="160" cy="110" r="42" fill="#FBBF24" />
          {/* Ears */}
          <ellipse cx="128" cy="80" rx="16" ry="20" fill="#FED514" stroke="#E5BF00" strokeWidth="2" />
          <ellipse cx="192" cy="80" rx="16" ry="20" fill="#FED514" stroke="#E5BF00" strokeWidth="2" />
          <ellipse cx="128" cy="80" rx="10" ry="13" fill="#FEE566" />
          <ellipse cx="192" cy="80" rx="10" ry="13" fill="#FEE566" />
          {/* Eyes */}
          <circle cx="145" cy="105" r="8" fill="#013A6B" />
          <circle cx="175" cy="105" r="8" fill="#013A6B" />
          <circle cx="148" cy="102" r="3" fill="white" />
          <circle cx="178" cy="102" r="3" fill="white" />
          {/* Nose */}
          <ellipse cx="160" cy="118" rx="5" ry="3.5" fill="#E5BF00" />
          {/* Mouth */}
          <path d="M153 123 Q160 128 167 123" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="133" cy="116" r="10" fill="#FEE566" opacity="0.5" />
          <circle cx="187" cy="116" r="10" fill="#FEE566" opacity="0.5" />
          {/* Arms */}
          <ellipse cx="115" cy="165" rx="12" ry="8" fill="#E5BF00" transform="rotate(-20, 115, 165)" />
          <ellipse cx="205" cy="165" rx="12" ry="8" fill="#E5BF00" transform="rotate(20, 205, 165)" />
          <ellipse cx="140" cy="200" rx="14" ry="8" fill="#E5BF00" />
          <ellipse cx="180" cy="200" rx="14" ry="8" fill="#E5BF00" />
          
          {/* Tiny data nodes floating around */}
          <circle cx="80" cy="60" r="6" fill="#38bdf8" opacity="0.8" className={styles.dataNode1} filter="blur(1px)" />
          <circle cx="240" cy="70" r="4" fill="#7dd3fc" opacity="0.8" className={styles.dataNode2} />
          <circle cx="260" cy="180" r="5" fill="#facc15" opacity="0.8" className={styles.dataNode3} />
          <circle cx="60" cy="190" r="4" fill="#0ea5e9" opacity="0.8" className={styles.dataNode4} />
          
          <defs>
            <linearGradient id="wheelGrad" x1="20" y1="20" x2="300" y2="300">
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#0ea5e9" />
              <stop offset="1" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="105" y1="125" x2="215" y2="225">
              <stop stopColor="#FED514" />
              <stop offset="1" stopColor="#E5BF00" />
            </linearGradient>
            <linearGradient id="platformGrad1" x1="20" y1="290" x2="300" y2="300">
              <stop stopColor="#0369a1" />
              <stop offset="1" stopColor="#0c4a6e" />
            </linearGradient>
            <linearGradient id="platformGrad2" x1="20" y1="280" x2="300" y2="290">
              <stop stopColor="#0284c7" />
              <stop offset="1" stopColor="#075985" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
