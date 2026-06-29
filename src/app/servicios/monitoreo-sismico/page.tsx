'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Sismico.module.css';

// Dynamic import para el mapa, Leaflet requiere acceso a "window" por lo que deshabilitamos SSR
const EarthquakeMap = dynamic(() => import('./EarthquakeMap'), {
  ssr: false,
  loading: () => (
    <div className={styles.mapContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className={styles.radar}></div>
    </div>
  ),
});

interface Earthquake {
  id: string;
  mag: number;
  place: string;
  time: number;
  url: string;
  tsunami: number;
  depth: number;
  coords: [number, number];
}

export default function MonitoreoSismicoPage() {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuakes() {
      try {
        const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson');
        const json = await res.json();
        
        if (json && json.features) {
          const mappedQuakes = json.features.map((feature: any) => {
            return {
              id: feature.id,
              mag: feature.properties.mag,
              place: feature.properties.place,
              time: feature.properties.time,
              url: feature.properties.url,
              tsunami: feature.properties.tsunami,
              depth: feature.geometry.coordinates[2],
              coords: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]] as [number, number] // Leaflet requiere [lat, lng]
            };
          });

          setEarthquakes(mappedQuakes);
        }
      } catch (error) {
        console.error("Error fetching earthquakes", error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuakes();
  }, []);

  const getMagnitudeColor = (mag: number) => {
    if (mag >= 7.0) return 'red';
    if (mag >= 6.0) return 'orange';
    if (mag >= 5.0) return 'yellow';
    return 'green';
  };

  const formatTime = (time: number) => {
    const date = new Date(time);
    return new Intl.DateTimeFormat('es-ES', { 
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getRelativeTime = (time: number) => {
    const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
    const daysDifference = Math.round((time - Date.now()) / (1000 * 60 * 60 * 24));
    
    if (daysDifference === 0) {
      const hoursDifference = Math.round((time - Date.now()) / (1000 * 60 * 60));
      if (hoursDifference === 0) {
        const minDiff = Math.round((time - Date.now()) / (1000 * 60));
        return rtf.format(minDiff, 'minute');
      }
      return rtf.format(hoursDifference, 'hour');
    }
    return rtf.format(daysDifference, 'day');
  };

  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.bgGlow}></div>
        <div className={styles.bgGlow2}></div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>
              Monitoreo <span className={styles.highlight}>Sísmico</span> Global
            </h1>
            <p className={styles.subtitle}>
              Rastreador en tiempo real (estilo ShakeViewer) de la actividad sísmica mundial de magnitud significativa (M4.5+), potenciado por la API del Servicio Geológico de los Estados Unidos (USGS).
            </p>
          </motion.div>

          {loading ? (
            <div className={styles.loader}>
              <div className={styles.radar}></div>
              <p>Rastreando ondas sísmicas globales...</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <EarthquakeMap earthquakes={earthquakes} />

              <div className={styles.grid}>
                {earthquakes.map((quake, i) => {
                  const color = getMagnitudeColor(quake.mag);
                  return (
                    <motion.div
                      key={quake.id}
                      className={styles.card}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(i * 0.05, 1.5) }}
                    >
                      <div className={styles.cardHeader}>
                        <span className={`${styles.magnitude} ${styles[`severity_${color}`]}`}>
                          {quake.mag.toFixed(1)}
                        </span>
                        {quake.tsunami === 1 && (
                          <span className={styles.tsunamiBadge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2 12h4l3-9 5 18 3-9h5"/>
                            </svg>
                            Alerta Tsunami
                          </span>
                        )}
                      </div>
                      
                      <h2 className={styles.place}>{quake.place}</h2>
                      
                      <div className={styles.details}>
                        <div className={styles.detailItem}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          {getRelativeTime(quake.time)}
                        </div>
                        <div className={styles.detailItem}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                          Profundidad: {quake.depth.toFixed(1)} km
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <span className={styles.date}>{formatTime(quake.time)}</span>
                        <a 
                          href={quake.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          Ver Detalles
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
