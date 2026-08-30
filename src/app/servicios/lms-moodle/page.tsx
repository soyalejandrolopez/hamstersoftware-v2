'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, MonitorPlay, BarChart3 } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Lms.module.css';

export default function LMSMoodle() {
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
            <span className={styles.badge}>EDUCACIÓN & E-LEARNING</span>
            <h1 className={styles.title}>
              Plataformas LMS y <span className={styles.highlight}>Moodle a la Medida</span>
            </h1>
            <p className={styles.subtitle}>
              Diseñamos, desarrollamos y alojamos plataformas de aprendizaje virtual (LMS) 
              para escuelas, universidades y capacitaciones corporativas. Brinda una 
              experiencia educativa de primer nivel con aulas virtuales personalizadas.
            </p>
            
            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn}>
                Solicitar Cotización
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
              <BookOpen />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Aulas Virtuales Interactivas</h3>
              <p className={styles.featureDesc}>Crea cursos con videos, cuestionarios, foros y tareas. Todo el material de estudio en un solo lugar 24/7.</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.iconWrapper}>
              <Users />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Gestión de Alumnos y Docentes</h3>
              <p className={styles.featureDesc}>Control total sobre roles, permisos, grupos e inscripciones masivas para instituciones grandes.</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.iconWrapper}>
              <Award />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Certificados Automáticos</h3>
              <p className={styles.featureDesc}>Genera diplomas digitales con códigos de validación una vez que el alumno apruebe todas sus evaluaciones.</p>
            </div>
          </motion.div>
        </div>

        {/* SHOWCASE BENTO INTERFACE */}
        <div className={styles.showcaseWrapper}>
          
          {/* Course Dashboard Mockup */}
          <motion.div 
            className={styles.bookingPanel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.bookingHeader}>
              <h3 className={styles.bookingTitle}>Mis Cursos</h3>
              <div className={styles.bookingSteps}>
                <div className={`${styles.stepDot} ${styles.active}`}></div>
                <div className={styles.stepDot}></div>
                <div className={styles.stepDot}></div>
              </div>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Inducción Corporativa</span>
                  <div className={styles.progressBar}><div className={styles.progressFill} style={{width: '100%'}}></div></div>
                </div>
                <span className={styles.servicePrice}>100%</span>
              </div>
              <div className={`${styles.serviceCard} ${styles.selected}`}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Liderazgo Ágil</span>
                  <div className={styles.progressBar}><div className={styles.progressFill} style={{width: '65%'}}></div></div>
                </div>
                <span className={styles.servicePrice}>65%</span>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Seguridad de la Información</span>
                  <div className={styles.progressBar}><div className={styles.progressFill} style={{width: '15%'}}></div></div>
                </div>
                <span className={styles.servicePrice}>15%</span>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceInfo}>
                  <span className={styles.serviceName}>Inglés Intermedio</span>
                  <div className={styles.progressBar}><div className={styles.progressFill} style={{width: '0%'}}></div></div>
                </div>
                <span className={styles.servicePrice}>0%</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Panel Mockup */}
          <motion.div 
            className={styles.staffPanel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className={styles.panelTitle}>Rendimiento Global</h4>
            <div className={styles.staffList}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><MonitorPlay size={20} /></div>
                <div className={styles.staffInfo}>
                  <div className={styles.staffName}>+1,200</div>
                  <div className={styles.staffRole}>Horas de video vistas</div>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><BarChart3 size={20} /></div>
                <div className={styles.staffInfo}>
                  <div className={styles.staffName}>8.5 / 10</div>
                  <div className={styles.staffRole}>Promedio de calificaciones</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activity Mockup */}
          <motion.div 
            className={styles.calendarPanel}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className={styles.panelTitle}>Actividad Reciente</h4>
            <div className={styles.timeGrid}>
              <div className={`${styles.timeSlot} ${styles.booked}`}>Foro: Dudas (09:00 AM)</div>
              <div className={`${styles.timeSlot} ${styles.selected}`}>Examen 1 (10:30 AM)</div>
              <div className={styles.timeSlot}>Tarea subida (12:00 PM)</div>
              <div className={styles.timeSlot}>Certificado emitido</div>
            </div>
          </motion.div>

        </div>
      </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
