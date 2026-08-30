'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Clock, User, Bell } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Barberia.module.css';

export default function ReservaBarberia() {
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
            <span className={styles.badge}>SISTEMA DE RESERVAS</span>
            <h1 className={styles.title}>
              Reservas para <span className={styles.highlight}>Barberías</span> y Peluquerías
            </h1>
            <p className={styles.subtitle}>
              Un sistema de reservas en línea optimizado para el sector de la belleza.
              Permite a tus clientes agendar citas 24/7, selecciona servicios, y gestiona
              tu equipo de profesionales con un calendario inteligente que maximiza tus ganancias.
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
              <CalendarCheck />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Agenda 24/7 Automatizada</h3>
              <p className={styles.featureDesc}>Tus clientes reservan en cualquier momento sin necesidad de llamadas o mensajes, sincronizándose en tiempo real.</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.iconWrapper}>
              <User />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Gestión de Barberos/Estilistas</h3>
              <p className={styles.featureDesc}>Cada miembro de tu equipo tiene su propio calendario, horario laboral y lista de servicios asignados.</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.iconWrapper}>
              <Bell />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Recordatorios por WhatsApp</h3>
              <p className={styles.featureDesc}>Reduce drásticamente las inasistencias con alertas automáticas para los clientes antes de su cita.</p>
            </div>
          </motion.div>
        </div>

        {/* SHOWCASE BENTO INTERFACE */}
        <div className={styles.showcaseWrapper}>
          
          {/* Booking Widget Mockup */}
          <motion.div 
            className={styles.bookingPanel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.bookingHeader}>
              <h3 className={styles.bookingTitle}>Seleccionar Servicio</h3>
              <div className={styles.bookingSteps}>
                <div className={`${styles.stepDot} ${styles.active}`}></div>
                <div className={styles.stepDot}></div>
                <div className={styles.stepDot}></div>
              </div>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Corte Clásico</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>45 min</span>
                </div>
                <span className={styles.servicePrice}>$15</span>
              </div>
              <div className={`${styles.serviceCard} ${styles.selected}`}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Corte + Barba</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>60 min</span>
                </div>
                <span className={styles.servicePrice}>$25</span>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Arreglo de Barba</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>30 min</span>
                </div>
                <span className={styles.servicePrice}>$10</span>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Tinte / Color</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>90 min</span>
                </div>
                <span className={styles.servicePrice}>$45</span>
              </div>
            </div>
          </motion.div>

          {/* Staff Panel Mockup */}
          <motion.div 
            className={styles.staffPanel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className={styles.panelTitle}>Profesional Disponible</h4>
            <div className={styles.staffList}>
              <div className={styles.staffItem}>
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" alt="Carlos" className={styles.staffAvatar} />
                <div className={styles.staffInfo}>
                  <div className={styles.staffName}>Carlos M.</div>
                  <div className={styles.staffRole}>Master Barber</div>
                </div>
              </div>
              <div className={styles.staffItem} style={{ opacity: 0.6 }}>
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80" alt="David" className={styles.staffAvatar} />
                <div className={styles.staffInfo}>
                  <div className={styles.staffName}>David P.</div>
                  <div className={styles.staffRole}>Estilista Senior</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Calendar Mockup */}
          <motion.div 
            className={styles.calendarPanel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className={styles.panelTitle}>Horarios (Hoy)</h4>
            <div className={styles.timeGrid}>
              <div className={styles.timeSlot}>09:00 AM</div>
              <div className={`${styles.timeSlot} ${styles.booked}`}>10:00 AM</div>
              <div className={styles.timeSlot}>11:00 AM</div>
              <div className={`${styles.timeSlot} ${styles.selected}`}>12:30 PM</div>
              <div className={styles.timeSlot}>02:00 PM</div>
              <div className={`${styles.timeSlot} ${styles.booked}`}>03:30 PM</div>
            </div>
          </motion.div>

        </div>
      </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
