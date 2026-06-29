'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './OpenClaw.module.css';

export default function OpenClawPage() {
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
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badge}>Teleoperación & Robótica</div>
            <h1 className={styles.title}>
              Sistema <span className={styles.highlight}>OpenClaw</span>
            </h1>
            <p className={styles.subtitle}>
              Lleva el control de tu hardware a la nube. Nuestra plataforma permite controlar brazos robóticos, máquinas de garra (claw machines) y sistemas IoT en tiempo real desde cualquier dispositivo, con latencia ultra baja.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="#demo" className={styles.primaryBtn}>
                Ver Demo en Vivo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </Link>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className={styles.features}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Baja Latencia</h3>
                <p className={styles.featureDesc}>Transmisión de video WebRTC sub-segundo para controles precisos.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Multidispositivo</h3>
                <p className={styles.featureDesc}>Controla máquinas usando el teclado, mouse o pantalla táctil.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>API IoT Abierta</h3>
                <p className={styles.featureDesc}>Integración sencilla con Raspberry Pi, Arduino y PLCs industriales.</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Interface Showcase */}
          <motion.div 
            className={styles.showcaseWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            
            {/* Camera Stream Mockup */}
            <div className={styles.streamPanel}>
              <div className={styles.streamHeader}>
                <div className={styles.streamTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  Cámara 1: Eje Z (Garra)
                </div>
                <div className={styles.liveIndicator}>
                  <div className={styles.liveDot}></div>
                  LIVE
                </div>
              </div>
              
              <div className={styles.videoFeed}>
                {/* Simulated crosshair/reticle */}
                <div className={styles.verticalLine}></div>
                <div className={styles.targetReticle}></div>
              </div>
            </div>

            {/* Joystick Panel */}
            <div className={styles.controlPanel}>
              <div className={styles.joystickBase}>
                <div className={styles.controlArrows}>
                  <div className={`${styles.arrow} ${styles.top}`}>▲</div>
                  <div className={`${styles.arrow} ${styles.bottom}`}>▼</div>
                  <div className={`${styles.arrow} ${styles.left}`}>◀</div>
                  <div className={`${styles.arrow} ${styles.right}`}>▶</div>
                </div>
                <div className={styles.joystickStick}></div>
              </div>
            </div>

            {/* Stats / Action Panel */}
            <div className={styles.statsPanel}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Latencia Red</span>
                <span className={styles.statValue}>42 <span className={styles.statUnit}>ms</span></span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Fuerza Motor Z</span>
                <span className={styles.statValue}>85 <span className={styles.statUnit}>%</span></span>
              </div>
              <button className={styles.actionBtn}>
                Descender Garra
              </button>
            </div>

          </motion.div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
