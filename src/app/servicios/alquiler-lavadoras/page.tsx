'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Waves, Truck, CalendarClock, MapPin, Clock } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Lavadoras.module.css';

export default function AlquilerLavadoras() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
          {/* HERO SECTION */}
          <div className={styles.hero}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.badge}>SISTEMA DE ALQUILER</span>
              <h1 className={styles.title}>
                Gestión de <span className={styles.highlight}>Alquiler de Lavadoras</span>
              </h1>
              <p className={styles.subtitle}>
                La solución definitiva para empresas de renta de equipos de lavado.
                Controla tu inventario, agenda entregas, y ofrece a tus clientes una 
                plataforma intuitiva para alquilar lavadoras por hora, día o semana.
              </p>
              
              <div className={styles.ctaGroup}>
                <button className={styles.primaryBtn}>
                  Ver Demo
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* FEATURES GRID */}
          <div className={styles.features}>
            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.iconWrapper}>
                <Waves />
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Catálogo Digital</h3>
                <p className={styles.featureDesc}>Muestra tus lavadoras con capacidades y precios, permitiendo a los clientes elegir el equipo adecuado.</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.iconWrapper}>
                <CalendarClock />
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Control de Tiempos</h3>
                <p className={styles.featureDesc}>Sistema automatizado que calcula tarifas por horas o días y alerta sobre equipos que deben recogerse.</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={styles.iconWrapper}>
                <Truck />
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Rutas de Entrega</h3>
                <p className={styles.featureDesc}>Optimiza las rutas de tus transportistas para entregas y recolecciones basadas en la ubicación del cliente.</p>
              </div>
            </motion.div>
          </div>

          {/* SHOWCASE BENTO INTERFACE */}
          <div className={styles.showcaseWrapper}>
            
            {/* Equipment Selector Mockup */}
            <motion.div 
              className={styles.equipmentPanel}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.panelHeader}>
                <h3 className={styles.panelTitle}>Selecciona un Equipo</h3>
              </div>

              <div className={styles.machinesGrid}>
                <div className={styles.machineCard}>
                  <div className={styles.machineIcon}><Waves size={24} /></div>
                  <span className={styles.machineName}>Lavadora Básica</span>
                  <span className={styles.machineCapacity}>12 kg</span>
                  <span className={styles.machinePrice}>$5 / hora</span>
                </div>
                <div className={`${styles.machineCard} ${styles.selected}`}>
                  <div className={styles.machineIcon}><Waves size={24} /></div>
                  <span className={styles.machineName}>Lavadora Premium</span>
                  <span className={styles.machineCapacity}>18 kg</span>
                  <span className={styles.machinePrice}>$8 / hora</span>
                </div>
                <div className={styles.machineCard}>
                  <div className={styles.machineIcon}><Waves size={24} /></div>
                  <span className={styles.machineName}>Torre de Lavado</span>
                  <span className={styles.machineCapacity}>22 kg</span>
                  <span className={styles.machinePrice}>$12 / hora</span>
                </div>
              </div>
            </motion.div>

            {/* Scheduling Panel Mockup */}
            <motion.div 
              className={styles.schedulePanel}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className={styles.sectionSubtitle}>Duración del Alquiler</h4>
              <div className={styles.durationSelector}>
                <div className={styles.durationOption}>
                  <span className={styles.durationText}>3 Horas (Mínimo)</span>
                  <span className={styles.durationPrice}>$24</span>
                </div>
                <div className={`${styles.durationOption} ${styles.active}`}>
                  <span className={styles.durationText}>Medio Día (6h)</span>
                  <span className={styles.durationPrice}>$40</span>
                </div>
                <div className={styles.durationOption}>
                  <span className={styles.durationText}>Día Completo (24h)</span>
                  <span className={styles.durationPrice}>$65</span>
                </div>
              </div>
            </motion.div>

            {/* Delivery Tracking Mockup */}
            <motion.div 
              className={styles.trackingPanel}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className={styles.sectionSubtitle}>Estado de Entrega</h4>
              <div className={styles.mapMockup}>
                <div className={styles.mapGrid}></div>
                <div className={styles.truckIcon}>
                  <Truck size={16} />
                </div>
              </div>
              <div className={styles.trackingInfo}>
                <div className={styles.trackingRow}>
                  <Clock size={16} className={styles.trackingIcon} />
                  <span className={styles.trackingText}>Llegada estimada: 15 mins</span>
                </div>
                <div className={styles.trackingRow}>
                  <MapPin size={16} className={styles.trackingIcon} />
                  <span className={styles.trackingText}>Av. Siempre Viva 742</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
