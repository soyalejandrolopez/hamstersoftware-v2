'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardShowcase from './DashboardShowcase';
import styles from './RadioStreaming.module.css';

export default function RadioStreamingPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
          {/* Hero Section */}
          <motion.div 
            className={styles.hero}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={styles.title}>
              Crea tu propia <span className={styles.highlight}>Radio Virtual</span>
            </h1>
            <p className={styles.subtitle}>
              Lanza tu emisora en línea en minutos. Te ofrecemos streaming de audio de alta fidelidad, AutoDJ, panel de control intuitivo y todo lo que necesitas para que tu estación suene en todo el mundo sin interrupciones.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="#planes" className={styles.primaryBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Probar Ahora
              </Link>
              <Link href="#contacto" className={styles.secondaryBtn}>
                Hablar con Asesor
              </Link>
            </div>
          </motion.div>

          {/* Interactive Dashboard Showcase */}
          <DashboardShowcase />

          {/* Features Grid */}
          <div className={styles.features}>
            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Gestión Total (AutoDJ)</h3>
                <p className={styles.featureDesc}>Automatiza tu emisora 24/7. Sube tu música, programa listas de reproducción y mantén tu radio al aire incluso con tu computadora apagada.</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Audio HD</h3>
                <p className={styles.featureDesc}>Calidad de sonido cristalina. Transmite en AAC+ o MP3 hasta 320kbps sin cortes ni buffering molesto para tus oyentes.</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Web & Apps Móviles</h3>
                <p className={styles.featureDesc}>Tus oyentes podrán sintonizarte desde cualquier lugar. Transmite vía web, directorios online y con apps móviles personalizadas para tu emisora.</p>
              </div>
            </motion.div>
          </div>



        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
