'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.ctaBanner} id="contacto" ref={ref}>
      {/* SpaceX Rocket Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBg}
      >
        <source src="/videos/rocket.webm" type="video/webm" />
      </video>

      {/* Background decoration */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />
      <div className={styles.bgPattern} aria-hidden="true" />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Small hamster decoration */}
        <div className={styles.miniHamster} aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" fill="rgba(255,255,255,0.15)" />
            <circle cx="24" cy="26" r="12" fill="#FED514" />
            <ellipse cx="17" cy="18" rx="5" ry="6" fill="#FEE566" />
            <ellipse cx="31" cy="18" rx="5" ry="6" fill="#FEE566" />
            <circle cx="20" cy="24" r="2.5" fill="#013A6B" />
            <circle cx="28" cy="24" r="2.5" fill="#013A6B" />
            <circle cx="21" cy="22.5" r="1" fill="white" />
            <circle cx="29" cy="22.5" r="1" fill="white" />
            <ellipse cx="24" cy="28" rx="2" ry="1.2" fill="#E5BF00" />
          </svg>
        </div>

        <h2 className={styles.heading}>
          ¿Listo para llevar tus datos al{' '}
          <span className={styles.headingAccent}>siguiente nivel</span>?
        </h2>

        <p className={styles.subtext}>
          Agenda una consulta gratuita con nuestro equipo. Analizamos tu caso y te
          presentamos una propuesta personalizada en 48 horas.
        </p>

        <div className={styles.ctaButtons}>
          <a 
            href="https://wa.me/573025790274?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20para%20mi%20proyecto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Contactar por WhatsApp
          </a>
        </div>

        <p className={styles.disclaimer}>
          Sin compromiso • Respuesta en 24h • 100% confidencial
        </p>
      </motion.div>
    </section>
  );
}
