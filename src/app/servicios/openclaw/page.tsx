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
            <div className={styles.badge}>Inteligencia Artificial</div>
            <h1 className={styles.title}>
              Asistente AI <span className={styles.highlight}>OpenClaw</span>
            </h1>
            <p className={styles.subtitle}>
              Tu agente autónomo personal. OpenClaw es una Inteligencia Artificial diseñada para trabajar por ti: redacta correos, analiza datos, interactúa con tus sistemas y ejecuta tareas repetitivas en piloto automático.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="#demo" className={styles.primaryBtn}>
                Iniciar Chat
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
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
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Automatización Financiera</h3>
                <p className={styles.featureDesc}>Analiza hojas de cálculo, genera reportes de ventas y envía facturas por correo.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Integración de Sistemas</h3>
                <p className={styles.featureDesc}>Conecta OpenClaw con Odoo, WordPress y tu CRM para ejecutar acciones mediante lenguaje natural.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Agente Autónomo</h3>
                <p className={styles.featureDesc}>Dale un objetivo complejo y el agente dividirá el problema en pasos lógicos hasta resolverlo.</p>
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
            
            {/* AI CHAT INTERFACE MOCKUP */}
            <div className={styles.chatPanel}>
              <div className={styles.chatHeader}>
                <div className={styles.aiProfile}>
                  <div className={styles.aiAvatar}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.1 7.1"></path><path d="M12 12l9.9 4.9"></path></svg>
                  </div>
                  <div>
                    <div className={styles.aiName}>OpenClaw Agent</div>
                    <div className={styles.aiStatus}>
                      <div className={styles.aiStatusDot}></div>
                      Online & Listo
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.chatBody}>
                <div className={`${styles.message} ${styles.user}`}>
                  <div className={styles.bubble}>
                    Genera un reporte semanal usando los datos de ventas de Stripe y envíalo a mi equipo de marketing.
                  </div>
                </div>

                <div className={`${styles.message} ${styles.ai}`}>
                  <div className={styles.bubble}>
                    ¡Entendido! Dame un momento mientras analizo la base de datos de Stripe y redacto el correo.
                  </div>
                </div>
              </div>

              <div className={styles.chatInputArea}>
                <input type="text" className={styles.chatInput} placeholder="Escribe tu siguiente tarea..." readOnly />
                <button className={styles.sendBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </div>
            </div>

            {/* Agent Tasks Execution Mockup */}
            <div className={styles.tasksPanel}>
              <div className={styles.tasksHeader}>
                <span>Terminal del Agente</span>
                <span style={{color: '#34d399'}}>Ejecutando...</span>
              </div>
              
              <div className={styles.taskItem}>
                <div className={styles.taskIcon}>✓</div>
                <div className={styles.taskText}>Conectando a API Stripe</div>
              </div>
              <div className={styles.taskItem}>
                <div className={styles.taskIcon}>✓</div>
                <div className={styles.taskText}>Extrayendo CSV de Ventas</div>
              </div>
              <div className={styles.taskItem}>
                <div className={styles.taskSpinner}></div>
                <div className={styles.taskText}>Generando gráficas PDF</div>
              </div>
            </div>

            {/* AI Skills Profile */}
            <div className={styles.skillsPanel}>
              <div className={styles.tasksHeader}>
                Habilidades Activas
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Web Scraping</span>
                <span className={styles.skillTag}>Análisis de Datos</span>
                <span className={styles.skillTag}>Gestión CRM</span>
                <span className={styles.skillTag}>Redacción Emails</span>
                <span className={styles.skillTag}>Programación Python</span>
              </div>
            </div>

          </motion.div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
