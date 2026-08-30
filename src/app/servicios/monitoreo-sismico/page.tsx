/* eslint-disable react-hooks/purity, @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Activity, AlertTriangle, Layers, Radio } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Sismico.module.css';

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

  // Metrics
  const [maxMag, setMaxMag] = useState(0);
  const [avgDepth, setAvgDepth] = useState(0);
  const [tsunamiCount, setTsunamiCount] = useState(0);

  useEffect(() => {
    async function fetchQuakes() {
      try {
        const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson');
        const json = await res.json();
        
        if (json && json.features) {
          let highestMag = 0;
          let totalDepth = 0;
          let tsunamis = 0;

          const mappedQuakes = json.features.map((feature: any) => {
            const mag = feature.properties.mag;
            const depth = feature.geometry.coordinates[2];
            const tsunami = feature.properties.tsunami;

            if (mag > highestMag) highestMag = mag;
            totalDepth += depth;
            if (tsunami === 1) tsunamis++;

            return {
              id: feature.id,
              mag: mag,
              place: feature.properties.place,
              time: feature.properties.time,
              url: feature.properties.url,
              tsunami: tsunami,
              depth: depth,
              coords: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]] as [number, number]
            };
          });

          setEarthquakes(mappedQuakes);
          setMaxMag(highestMag);
          setTsunamiCount(tsunamis);
          if (mappedQuakes.length > 0) {
            setAvgDepth(totalDepth / mappedQuakes.length);
          }
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

  const getRelativeTime = (time: number) => {
    const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
    const diff = time - Date.now();
    const minDiff = Math.round(diff / (1000 * 60));
    
    if (Math.abs(minDiff) < 60) return rtf.format(minDiff, 'minute');
    const hoursDiff = Math.round(diff / (1000 * 60 * 60));
    if (Math.abs(hoursDiff) < 24) return rtf.format(hoursDiff, 'hour');
    return rtf.format(Math.round(diff / (1000 * 60 * 60 * 24)), 'day');
  };

  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.bgGlow}></div>
        
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Centro de <span className={styles.highlight}>Monitoreo Sísmico</span>
            </h1>
            <p className={styles.subtitle}>
              Panel de control táctico. Monitoreo global en tiempo real de eventos sísmicos significativos (M4.5+).
            </p>
          </div>

          {loading ? (
            <div className={styles.loader}>
              <div className={styles.radar}></div>
              <p>Sincronizando con red sísmica global...</p>
            </div>
          ) : (
            <motion.div 
              className={styles.dashboardWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* KPIs Row */}
              <div className={styles.kpiRow}>
                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIcon} ${styles.total}`}>
                    <Activity size={24} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>Eventos Activos (7d)</span>
                    <span className={styles.kpiValue}>{earthquakes.length}</span>
                  </div>
                </div>
                
                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIcon} ${styles.max}`}>
                    <AlertTriangle size={24} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>Magnitud Máxima</span>
                    <span className={styles.kpiValue}>M {maxMag.toFixed(1)}</span>
                  </div>
                </div>

                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIcon} ${styles.avg}`}>
                    <Layers size={24} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>Prof. Promedio</span>
                    <span className={styles.kpiValue}>{avgDepth.toFixed(0)} km</span>
                  </div>
                </div>

                <div className={styles.kpiCard}>
                  <div className={`${styles.kpiIcon} ${styles.tsunami}`}>
                    <Radio size={24} />
                  </div>
                  <div className={styles.kpiInfo}>
                    <span className={styles.kpiLabel}>Alertas Tsunami</span>
                    <span className={styles.kpiValue}>{tsunamiCount}</span>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div className={styles.mainDashboard}>
                
                {/* Sidebar List */}
                <div className={styles.sidebar}>
                  <div className={styles.sidebarHeader}>
                    <span className={styles.sidebarTitle}>Registro de Eventos</span>
                    <div className={styles.pulseIndicator}>
                      <div className={styles.pulseDot}></div>
                      Live
                    </div>
                  </div>
                  
                  <div className={styles.quakeList}>
                    {earthquakes.map((quake) => {
                      const color = getMagnitudeColor(quake.mag);
                      return (
                        <div key={quake.id} className={styles.quakeItem}>
                          {quake.tsunami === 1 && <span className={styles.tsunamiAlert}>Tsunami</span>}
                          
                          <div className={styles.quakeItemHeader}>
                            <span className={`${styles.quakeMagBadge} ${styles[`severity_${color}`]}`}>
                              {quake.mag.toFixed(1)}
                            </span>
                            <span className={styles.quakeTime}>{getRelativeTime(quake.time)}</span>
                          </div>
                          
                          <h3 className={styles.quakePlace}>{quake.place}</h3>
                          
                          <div className={styles.quakeMeta}>
                            <span>Prof: {quake.depth.toFixed(1)} km</span>
                            <a 
                              href={quake.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              style={{ color: '#3b82f6', textDecoration: 'none' }}
                            >
                              Reporte USGS ↗
                            </a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Map Area */}
                <EarthquakeMap earthquakes={earthquakes} />

              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
