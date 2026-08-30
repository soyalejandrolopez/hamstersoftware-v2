'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Clock, User, Bell, Sparkles } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './LimpiezaFacial.module.css';

export default function LimpiezaFacial() {
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
            <span className={styles.badge}>SOFTWARE PARA SPAS</span>
            <h1 className={styles.title}>
              Sistema de Citas para <span className={styles.highlight}>Limpieza Facial</span>
            </h1>
            <p className={styles.subtitle}>
              Un software especializado para clínicas estéticas y spas. Permite a tus clientes agendar 
              tratamientos faciales, gestionar historiales clínicos de la piel y optimizar 
              el tiempo de tus cosmetólogas con recordatorios automáticos.
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
              <h3 className={styles.featureTitle}>Agenda Inteligente</h3>
              <p className={styles.featureDesc}>Tus clientes reservan su limpieza facial 24/7. El sistema evita empalmes y respeta los tiempos de cada cabina.</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.iconWrapper}>
              <Sparkles />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Historial Dermatológico</h3>
              <p className={styles.featureDesc}>Lleva un registro detallado del tipo de piel, alergias y progreso de cada paciente en su perfil digital.</p>
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
              <p className={styles.featureDesc}>Reduce el ausentismo enviando confirmaciones automáticas y recordatorios del cuidado post-tratamiento.</p>
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
              <h3 className={styles.bookingTitle}>Seleccionar Tratamiento</h3>
              <div className={styles.bookingSteps}>
                <div className={`${styles.stepDot} ${styles.active}`}></div>
                <div className={styles.stepDot}></div>
                <div className={styles.stepDot}></div>
              </div>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Limpieza Básica</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>45 min</span>
                </div>
                <span className={styles.servicePrice}>$30</span>
              </div>
              <div className={`${styles.serviceCard} ${styles.selected}`}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Limpieza Profunda</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>90 min</span>
                </div>
                <span className={styles.servicePrice}>$55</span>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Peeling Ultrasónico</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>60 min</span>
                </div>
                <span className={styles.servicePrice}>$45</span>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Hidratación VIP</span>
                  <span className={styles.serviceDuration}><Clock size={12} style={{display:'inline', marginRight:'4px'}}/>75 min</span>
                </div>
                <span className={styles.servicePrice}>$60</span>
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
            <h4 className={styles.panelTitle}>Cosmetóloga Disponible</h4>
            <div className={styles.staffList}>
              <div className={styles.staffItem}>
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80" alt="Laura" className={styles.staffAvatar} />
                <div className={styles.staffInfo}>
                  <div className={styles.staffName}>Dra. Laura M.</div>
                  <div className={styles.staffRole}>Dermatóloga Especialista</div>
                </div>
              </div>
              <div className={styles.staffItem} style={{ opacity: 0.6 }}>
                <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=150&q=80" alt="Sofia" className={styles.staffAvatar} />
                <div className={styles.staffInfo}>
                  <div className={styles.staffName}>Sofía P.</div>
                  <div className={styles.staffRole}>Cosmetóloga Senior</div>
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
            <h4 className={styles.panelTitle}>Disponibilidad (Hoy)</h4>
            <div className={styles.timeGrid}>
              <div className={styles.timeSlot}>09:00 AM</div>
              <div className={`${styles.timeSlot} ${styles.booked}`}>10:30 AM</div>
              <div className={styles.timeSlot}>12:00 PM</div>
              <div className={`${styles.timeSlot} ${styles.selected}`}>01:30 PM</div>
              <div className={styles.timeSlot}>03:00 PM</div>
              <div className={`${styles.timeSlot} ${styles.booked}`}>04:30 PM</div>
            </div>
          </motion.div>

        </div>
      </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
