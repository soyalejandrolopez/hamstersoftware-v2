'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './ReservaBoletos.module.css';

export default function ReservaBoletosPage() {
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
            <div className={styles.badge}>Plataforma de Eventos</div>
            <h1 className={styles.title}>
              Sistema de <span className={styles.highlight}>Reserva y Boletos</span>
            </h1>
            <p className={styles.subtitle}>
              Monetiza tus eventos con nuestra plataforma de boletería. Selección de asientos interactiva, pagos inmediatos y control de acceso con códigos QR.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="#demo" className={styles.primaryBtn}>
                Crear Evento
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Mapa de Asientos 3D</h3>
                <p className={styles.featureDesc}>Permite a tus asistentes elegir exactamente dónde quieren sentarse.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Pagos Inmediatos</h3>
                <p className={styles.featureDesc}>Integración con múltiples pasarelas. Recibe el dinero al instante.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect x="7" y="7" width="10" height="10"></rect>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Control de Acceso QR</h3>
                <p className={styles.featureDesc}>Escanea boletos rápidamente desde cualquier dispositivo móvil.</p>
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
            {/* Ticket Mockup */}
            <div className={styles.ticketMockup}>
              <div className={styles.ticketImage}>
                <div className={styles.ticketGradient}></div>
              </div>
              
              <div className={styles.ticketBody}>
                <div className={styles.eventName}>Neon Lights Festival 2026</div>
                <div className={styles.eventDate}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  15 Octubre • 21:00 PM
                </div>
                
                <div className={styles.ticketDetails}>
                  <div className={styles.detailCol}>
                    <span className={styles.detailLabel}>Sección</span>
                    <span className={styles.detailValue}>VIP A</span>
                  </div>
                  <div className={styles.detailCol}>
                    <span className={styles.detailLabel}>Fila</span>
                    <span className={styles.detailValue}>12</span>
                  </div>
                  <div className={styles.detailCol}>
                    <span className={styles.detailLabel}>Asiento</span>
                    <span className={styles.detailValue}>45</span>
                  </div>
                </div>

                <div className={styles.qrSection}>
                  <div className={styles.qrCode}>
                    <svg viewBox="0 0 24 24" fill="#000"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h-3v2h3v-2zm-3 4h-2v4h2v-4zm3-2h2v6h-2v-6zm-5-4h2v2h-2v-2z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Titular del Boleto</div>
                    <div style={{ fontWeight: 600 }}>Alejandro López</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Panel */}
            <div className={styles.checkoutPanel}>
              <div className={styles.checkoutTitle}>Resumen de Compra</div>
              <div className={styles.orderRow}>
                <span>2x Entradas VIP A</span>
                <span>$240.00</span>
              </div>
              <div className={styles.orderRow}>
                <span>Cargos de Servicio</span>
                <span>$24.00</span>
              </div>
              <div className={styles.orderTotal}>
                <span>Total</span>
                <span>$264.00</span>
              </div>
              <div className={styles.payBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                Pagar Ahora
              </div>
            </div>

            {/* Seat Map Panel */}
            <div className={styles.seatMapPanel}>
              <div className={styles.stage}>Escenario Principal</div>
              <div className={styles.seatsGrid}>
                {[...Array(18)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`${styles.seat} ${i === 4 || i === 8 ? styles.taken : ''} ${i === 14 || i === 15 ? styles.selected : ''}`}
                  ></div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
