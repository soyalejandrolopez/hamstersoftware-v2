'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './ServicesSection.module.css';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Ingeniería de Datos',
    description: 'Arquitectamos e implementamos pipelines de datos robustos y escalables que son la columna vertebral de tu estrategia de datos.',
    features: [
      'Diseño e implementación de pipelines de datos',
      'Procesamiento en tiempo real y por lotes',
      'Migración a data warehouse en la nube',
      'Integración con Apache Spark y Kafka',
      'Marcos de calidad y gobernanza de datos',
    ],
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Extracción de Datos / ETL',
    description: 'Extraemos datos de cualquier fuente y los transformamos en formatos limpios y estructurados listos para análisis.',
    features: [
      'Integración de datos multi-fuente',
      'Ingestión de APIs y webhooks',
      'Migración de sistemas heredados',
      'Estrategias incrementales y de carga completa',
      'Programación y monitoreo automatizado',
    ],
    color: '#38bdf8',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Visualización de Datos',
    description: 'Transformamos datos complejos en visuales claros y convincentes que empoderan decisiones rápidas basadas en evidencia.',
    features: [
      'Dashboards interactivos (Tableau, Power BI, D3.js)',
      'Sistemas de reportes ejecutivos',
      'Monitoreo de KPIs en tiempo real',
      'Componentes de gráficos personalizados',
      'Visualización geoespacial y de redes',
    ],
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="11" y1="8" x2="11" y2="14" />
      </svg>
    ),
    title: 'Minería y Gestión de Datos',
    description: 'Descubrimos insights ocultos en tus datos con soluciones de minería y gestión que te dan visibilidad y control total.',
    features: [
      'Detección de patrones y anomalías',
      'Segmentación y clustering de clientes',
      'Minería de reglas de asociación',
      'Gestión de datos maestros (MDM)',
      'Catálogo de datos y seguimiento de linaje',
    ],
    color: '#38bdf8',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Software de Escritorio',
    description: 'Construimos aplicaciones de escritorio nativas con el rendimiento y la seguridad de nivel empresarial.',
    features: [
      'Aplicaciones para Windows, macOS y Linux',
      'Apps multiplataforma con Electron y Tauri',
      'Integraciones con ERP y CRM',
      'Arquitectura offline-first',
      'Sistemas de actualización y despliegue automático',
    ],
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
        <circle cx="19" cy="5" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Machine Learning',
    description: 'Desplegamos sistemas inteligentes de ML que automatizan decisiones complejas — desde pronósticos hasta procesamiento de documentos.',
    features: [
      'Analítica predictiva y pronósticos',
      'Modelos de NLP y visión por computadora',
      'Fine-tuning de LLMs y pipelines RAG',
      'MLOps y gestión del ciclo de vida de modelos',
      'Frameworks de A/B testing y experimentación',
    ],
    color: '#38bdf8',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Desarrollo Móvil',
    description: 'Creamos aplicaciones móviles pulidas y de alto rendimiento para iOS y Android que los usuarios usan cada día.',
    features: [
      'iOS (Swift / SwiftUI) y Android (Kotlin)',
      'Multiplataforma con React Native y Flutter',
      'PWAs con capacidad offline',
      'Notificaciones push y compras in-app',
      'Optimización para App Store y Play Store',
    ],
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Sistemas Bajo Demanda',
    description: '¿Necesitas una solución personalizada — rápido? Arquitectamos y entregamos sistemas adaptados a tus requisitos y plazos.',
    features: [
      'Prototipado rápido y entrega de MVPs',
      'Arquitectura de microservicios y serverless',
      'Ingeniería de plataformas SaaS',
      'Diseño API-first y GraphQL',
      'Configuración de DevOps y pipelines CI/CD',
    ],
    color: '#38bdf8',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Desarrollo Web',
    description: 'Diseñamos experiencias web de alto rendimiento — desde landing pages hasta plataformas empresariales complejas.',
    features: [
      'Frontends con React, Next.js y Vue.js',
      'Backends con Laravel, Node.js y Django',
      'Plataformas de e-commerce y marketplaces',
      'Optimización de rendimiento (Core Web Vitals)',
      'Integraciones con CMS headless y APIs',
    ],
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Ciberseguridad y Monitoreo',
    description: 'Ofrecemos monitoreo proactivo de amenazas y consulta pública de las vulnerabilidades y fallas más recientes (CVE).',
    features: [
      'Monitoreo en tiempo real de CVEs',
      'Auditorías de código y análisis estático',
      'Pruebas de penetración (Pen Testing)',
      'Implementación de DevSecOps',
    ],
    color: '#38bdf8',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      className={`glass-card ${styles.card}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.cardIconWrap} style={{ background: `${service.color}14` }}>
        <div className={styles.cardIcon} style={{ color: service.color }}>
          {service.icon}
        </div>
      </div>
      <h3 className={`heading-md ${styles.cardTitle}`}>{service.title}</h3>
      <p className={`text-small ${styles.cardDesc}`}>{service.description}</p>
      <ul className={styles.featureList}>
        {service.features.map((f, i) => (
          <li key={i} className={styles.featureItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.checkIcon}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {service.title === 'Ciberseguridad y Monitoreo' ? (
        <a href="/servicios/vulnerabilidades" className="btn btn-primary btn-sm" style={{ marginTop: 'auto' }}>
          Explorar Vulnerabilidades
        </a>
      ) : (
        <a href="#contacto" className="btn btn-primary btn-sm" style={{ marginTop: 'auto' }}>
          Solicitar Cotización
        </a>
      )}
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.services}`} id="servicios" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Nuestros Servicios
          </span>
          <h2 className="heading-lg">
            Todo lo que necesitas para{' '}
            <span className="text-gradient">impulsar tu negocio</span>
          </h2>
          <p className="text-body">
            Desde pipelines de datos hasta apps móviles, cubrimos el ciclo completo
            de tu transformación digital.
          </p>
        </motion.div>

        <div className={styles.swiperWrap}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <ServiceCard service={service} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
