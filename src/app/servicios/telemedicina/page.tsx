/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Telemedicina.module.css';

export default function TelemedicinaPage() {
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
            <div className={styles.badge}>Innovación en Salud</div>
            <h1 className={styles.title}>
              Sistema de <span className={styles.highlight}>Telemedicina</span> con Reservas
            </h1>
            <p className={styles.subtitle}>
              Conecta con tus pacientes de forma remota y segura. Plataforma integral que incluye agendamiento automático, historiales clínicos y videollamadas en alta definición.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="#demo" className={styles.primaryBtn}>
                Ver Demo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
                  <path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Videoconsultas HD</h3>
                <p className={styles.featureDesc}>Conexión estable y segura cifrada de extremo a extremo.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Gestión de Reservas</h3>
                <p className={styles.featureDesc}>Calendario inteligente con recordatorios automáticos.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Historia Clínica</h3>
                <p className={styles.featureDesc}>Expediente electrónico accesible durante la consulta.</p>
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
            {/* Video Mockup */}
            <div className={styles.videoMockup}>
              {/* Doctor/Patient Image from URL */}
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" alt="Video Call Main" className={styles.mainVideo} />
              
              <div className={styles.pipVideo}>
                <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" alt="Video Call PIP" />
              </div>

              <div className={styles.videoControls}>
                <div className={styles.controlBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </div>
                <div className={styles.controlBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </div>
                <div className={`${styles.controlBtn} ${styles.danger}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line></svg>
                </div>
              </div>
            </div>

            {/* Patient Panel */}
            <div className={styles.patientPanel}>
              <div className={styles.patientHeader}>
                <div className={styles.patientAvatar} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&q=80)', backgroundSize: 'cover' }}></div>
                <div>
                  <div className={styles.patientName}>Carlos Mendoza</div>
                  <div className={styles.patientDetail}>ID: #4928 • 34 años</div>
                </div>
              </div>
              <div className={styles.vitalsGrid}>
                <div className={styles.vitalCard}>
                  <div className={styles.vitalLabel}>Ritmo Cardíaco</div>
                  <div className={styles.vitalValue} style={{ color: '#ef4444' }}>72 bpm</div>
                </div>
                <div className={styles.vitalCard}>
                  <div className={styles.vitalLabel}>Presión</div>
                  <div className={styles.vitalValue}>120/80</div>
                </div>
              </div>
            </div>

            {/* Calendar Panel */}
            <div className={styles.calendarPanel}>
              <div className={styles.calendarTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Agenda de Hoy
              </div>
              <div className={styles.appointmentItem}>
                <div className={styles.aptTime}>10:00 AM - 10:30 AM</div>
                <div className={styles.aptPatient}>Carlos Mendoza</div>
                <div className={styles.aptType}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                  Consulta General (En curso)
                </div>
              </div>
              <div className={styles.appointmentItem} style={{ opacity: 0.7 }}>
                <div className={styles.aptTime}>11:00 AM - 11:30 AM</div>
                <div className={styles.aptPatient}>María González</div>
                <div className={styles.aptType}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></div>
                  Revisión Exámenes
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
