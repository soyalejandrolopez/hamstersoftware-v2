'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Odoo.module.css';

export default function OdooPage() {
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
            <div className={styles.badge}>Partners Oficiales Odoo</div>
            <h1 className={styles.title}>
              Sistema Integral <span className={styles.highlight}>Odoo CRM</span>
            </h1>
            <p className={styles.subtitle}>
              Centraliza tus ventas, marketing y atención al cliente en una sola plataforma. Convierte leads en clientes de forma automática y haz crecer tu negocio.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="#demo" className={styles.primaryBtn}>
                Solicitar Demo
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Gestión de Leads</h3>
                <p className={styles.featureDesc}>Capta prospectos desde tu web, email o redes sociales automáticamente.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Pipeline Visual (Kanban)</h3>
                <p className={styles.featureDesc}>Arrastra y suelta oportunidades para avanzar en el proceso de venta.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Integración Total</h3>
                <p className={styles.featureDesc}>Conectado nativamente con Facturación, Inventario y Marketing.</p>
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
            
            {/* Kanban Pipeline Mockup */}
            <div className={styles.kanbanPanel}>
              <div className={styles.kanbanHeader}>
                <div className={styles.kanbanTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                  Pipeline de Ventas
                </div>
                <div className={styles.kanbanTabs}>
                  <div className={`${styles.kanbanTab} ${styles.active}`}>Mi Equipo</div>
                  <div className={styles.kanbanTab}>Global</div>
                </div>
              </div>
              
              <div className={styles.kanbanBoard}>
                {/* Column 1 */}
                <div className={styles.kanbanColumn}>
                  <div className={styles.colHeader}>
                    <span>Nuevo</span>
                    <span className={styles.colCount}>2</span>
                  </div>
                  <div className={styles.kanbanCard}>
                    <div className={styles.cardTitle}>Renovación Software ERP</div>
                    <div className={styles.cardClient}>TechCorp S.A.</div>
                    <div className={styles.cardFooter}>
                      <span>$12,500</span>
                      <div className={styles.cardAvatar}></div>
                    </div>
                  </div>
                  <div className={styles.kanbanCard}>
                    <div className={styles.cardTitle}>Consultoría IT</div>
                    <div className={styles.cardClient}>Grupo Mendieta</div>
                    <div className={styles.cardFooter}>
                      <span>$4,000</span>
                      <div className={styles.cardAvatar} style={{background: '#fecaca'}}></div>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className={styles.kanbanColumn}>
                  <div className={styles.colHeader}>
                    <span>Calificado</span>
                    <span className={styles.colCount}>1</span>
                  </div>
                  <div className={styles.kanbanCard}>
                    <div className={styles.cardTitle}>Implementación CRM</div>
                    <div className={styles.cardClient}>Logística Express</div>
                    <div className={styles.cardFooter}>
                      <span>$8,200</span>
                      <div className={styles.cardAvatar} style={{background: '#bbf7d0'}}></div>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className={styles.kanbanColumn}>
                  <div className={styles.colHeader}>
                    <span>Ganado</span>
                    <span className={styles.colCount}>1</span>
                  </div>
                  <div className={`${styles.kanbanCard} ${styles.won}`}>
                    <div className={styles.cardTitle}>Migración Cloud</div>
                    <div className={styles.cardClient}>StartUp Chile</div>
                    <div className={styles.cardFooter} style={{color: '#017E84'}}>
                      <span>$25,000</span>
                      <div className={styles.cardAvatar}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Profile Panel */}
            <div className={styles.profilePanel}>
              <div className={styles.profileTop}>
                <div className={styles.profileImg}></div>
                <div>
                  <div className={styles.profileName}>Roberto Carlos</div>
                  <div className={styles.profileCompany}>CEO, TechCorp S.A.</div>
                </div>
              </div>
              <div className={styles.profileStats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Valor Vida (CLV)</span>
                  <span className={styles.statValue}>$45,200</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Probabilidad</span>
                  <span className={styles.statValue} style={{color: '#10b981'}}>85%</span>
                </div>
              </div>
            </div>

            {/* Analytics Panel */}
            <div className={styles.analyticsPanel}>
              <div className={styles.analyticsTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                Conversión Mensual
              </div>
              <div className={styles.analyticsChart}>
                <div className={styles.bar} style={{ height: '40%' }}></div>
                <div className={styles.bar} style={{ height: '60%' }}></div>
                <div className={styles.bar} style={{ height: '35%' }}></div>
                <div className={styles.bar} style={{ height: '80%' }}></div>
                <div className={`${styles.bar} ${styles.active}`} style={{ height: '95%' }}></div>
              </div>
            </div>

          </motion.div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
