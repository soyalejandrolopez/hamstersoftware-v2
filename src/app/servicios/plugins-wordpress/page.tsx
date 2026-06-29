'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Plugins.module.css';

export default function PluginsWordPressPage() {
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
            <div className={styles.badge}>Desarrollo WordPress</div>
            <h1 className={styles.title}>
              Plugins a Medida para <span className={styles.highlight}>WordPress</span>
            </h1>
            <p className={styles.subtitle}>
              Extendemos la funcionalidad de tu sitio web o WooCommerce con plugins personalizados. Código limpio, optimizado y 100% integrado al panel de administración nativo.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="#contacto" className={styles.primaryBtn}>
                Cotizar Plugin
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
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Integración de APIs</h3>
                <p className={styles.featureDesc}>Conectamos tu WordPress con ERPs, CRMs (como Odoo), pasarelas de pago y más.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Shortcodes y Bloques</h3>
                <p className={styles.featureDesc}>Creamos bloques nativos para Gutenberg o shortcodes fáciles de usar.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Optimización</h3>
                <p className={styles.featureDesc}>Evitamos el "bloatware". Programamos funciones ligeras que no ralentizan tu web.</p>
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
            
            {/* WP Admin Mockup */}
            <div className={styles.wpAdminPanel}>
              
              {/* Sidebar */}
              <div className={styles.wpSidebar}>
                <div className={styles.wpSidebarHeader}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12a4 4 0 0 1 8 0"></path>
                  </svg>
                  WordPress
                </div>
                <ul className={styles.wpMenu}>
                  <li className={styles.wpMenuItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    Escritorio
                  </li>
                  <li className={styles.wpMenuItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
                    Páginas
                  </li>
                  <li className={`${styles.wpMenuItem} ${styles.active}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    Mi Plugin Custom
                  </li>
                  <li className={styles.wpMenuItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    Ajustes
                  </li>
                </ul>
              </div>

              {/* Content Area */}
              <div className={styles.wpContent}>
                <div className={styles.wpHeader}>
                  <h2 className={styles.wpTitle}>Ajustes del Plugin API</h2>
                  <button className={styles.wpSaveBtn}>Guardar Cambios</button>
                </div>

                <div className={styles.wpBox}>
                  <div className={styles.wpBoxHeader}>
                    Configuración de Conexión
                  </div>
                  <div className={styles.wpBoxContent}>
                    <div className={styles.wpFormGroup}>
                      <span className={styles.wpLabel}>API Key Externa</span>
                      <input type="text" className={styles.wpInput} value="sk_live_51M..." readOnly />
                    </div>
                    
                    <div className={styles.wpFormGroup}>
                      <span className={styles.wpLabel}>Sincronización Automática</span>
                      <div className={styles.wpToggle}>
                        <div className={styles.wpToggleSwitch}></div>
                        <span>Activo (Cada 15 min)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className={styles.codePanel}>
                  <div><span className={styles.keyword}>add_action</span>( <span className={styles.string}>'init'</span>, <span className={styles.string}>'hamster_custom_api_init'</span> );</div>
                  <br/>
                  <div><span className={styles.keyword}>function</span> <span className={styles.function}>hamster_custom_api_init</span>() {'{'}</div>
                  <div style={{ paddingLeft: '1rem' }}>
                    <span className={styles.keyword}>if</span> ( get_option( <span className={styles.string}>'sync_active'</span> ) ) {'{'}
                  </div>
                  <div style={{ paddingLeft: '2rem' }}>
                    hamster_sync_external_data();
                  </div>
                  <div style={{ paddingLeft: '1rem' }}>{'}'}</div>
                  <div>{'}'}</div>
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
