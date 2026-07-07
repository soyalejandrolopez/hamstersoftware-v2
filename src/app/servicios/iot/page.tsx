import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Iot.module.css';

export default function IotPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
          
          {/* Hero Section */}
          <div className={styles.hero}>
            <div className={styles.badge}>IoT & Conectividad</div>
            <h1 className={styles.title}>
              Internet de las <span className={styles.highlight}>Cosas (IoT)</span>
            </h1>
            <p className={styles.subtitle}>
              Conecta sensores, dispositivos físicos y maquinaria a internet para recolectar datos en tiempo real. Construimos arquitecturas robustas para automatizar tus operaciones y transformar datos físicos en inteligencia de negocio.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="/#contacto" className={styles.primaryBtn}>
                Hablar con un Experto
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Monitoreo en Tiempo Real</h3>
                <p className={styles.featureDesc}>Adquiere datos de sensores (temperatura, humedad, vibración) y visualízalos instantáneamente.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Telemetría Avanzada</h3>
                <p className={styles.featureDesc}>Transmisión confiable de datos a través de MQTT, LoRaWAN y HTTP hacia plataformas en la nube.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>Automatización Inteligente</h3>
                <p className={styles.featureDesc}>Ejecuta acciones automáticas y alertas basadas en los umbrales definidos en tus métricas IoT.</p>
              </div>
            </div>
          </div>

          {/* Interactive Interface Showcase */}
          <div className={styles.showcaseWrapper}>
            {/* IoT Dashboard Mockup */}
            <div className={styles.dashboardPanel}>
              <div className={styles.tasksHeader}>
                Panel de Sensores
                <span style={{color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <span className={styles.statusDot}></span> Live
                </span>
              </div>
              
              <div className={styles.sensorGrid}>
                <div className={styles.sensorCard}>
                  <div className={styles.sensorLabel}>Temperatura</div>
                  <div className={styles.sensorValue}>24.5°C</div>
                  <div className={styles.sensorTrend}>+1.2% desde ayer</div>
                </div>
                <div className={styles.sensorCard}>
                  <div className={styles.sensorLabel}>Humedad</div>
                  <div className={styles.sensorValue}>45%</div>
                  <div className={styles.sensorTrend}>Estable</div>
                </div>
                <div className={styles.sensorCard}>
                  <div className={styles.sensorLabel}>Voltaje</div>
                  <div className={styles.sensorValue}>220V</div>
                  <div className={styles.sensorTrend} style={{color: '#ef4444'}}>-5V fluctuación</div>
                </div>
              </div>
            </div>

            {/* Architecture Protocol */}
            <div className={styles.protocolsPanel}>
              <div className={styles.tasksHeader}>
                Protocolos Soportados
              </div>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>MQTT</span>
                <span className={styles.skillTag}>LoRaWAN</span>
                <span className={styles.skillTag}>CoAP</span>
                <span className={styles.skillTag}>WebSocket</span>
                <span className={styles.skillTag}>BLE</span>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
