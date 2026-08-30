/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './RadioStreaming.module.css';

const mockData = [
  { time: '00:00', listeners: 1200 },
  { time: '04:00', listeners: 800 },
  { time: '08:00', listeners: 3500 },
  { time: '12:00', listeners: 5200 },
  { time: '16:00', listeners: 6800 },
  { time: '20:00', listeners: 8400 },
  { time: '23:59', listeners: 4100 },
];

export default function DashboardShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
     
    setMounted(true);
  }, []);

  return (
    <div className={styles.dashboardWrapper}>
      <motion.div 
        className={styles.dashboardContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.dashboardHeader}>
          <div className={styles.dashboardTitle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            Panel de Control Pro
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
            <div className={styles.liveIndicator}></div>
            Servidor Online
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Oyentes Actuales
            </div>
            <div className={styles.statValue}>
              8,402 <span className={styles.statChange}>+12%</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              Pico Hoy
            </div>
            <div className={styles.statValue}>
              12,150
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9"></path></svg>
              Uso de Red
            </div>
            <div className={styles.statValue}>
              4.2 TB <span className={styles.statChange}>Normal</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Uptime
            </div>
            <div className={styles.statValue}>
              99.99%
            </div>
          </div>
        </div>

        <div className={styles.dashboardBody}>
          <div className={styles.chartSection}>
            <h3 className={styles.chartTitle}>Audiencia Global (24h)</h3>
            <div style={{ width: '100%', height: '180px' }}>
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorListeners" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00B4B6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#00B4B6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                    <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: 'rgba(0,0,0,0.05)', borderRadius: '8px', color: '#0f172a', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                      itemStyle={{ color: '#00B4B6' }}
                    />
                    <Area type="monotone" dataKey="listeners" stroke="#00B4B6" strokeWidth={3} fillOpacity={1} fill="url(#colorListeners)" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className={styles.playerSection}>
            <h3 className={styles.nowPlayingTitle}>AutoDJ • En Vivo</h3>
            <div className={styles.trackInfo}>
              <div className={styles.albumArt}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              </div>
              <div className={styles.trackDetails}>
                <div className={styles.trackName}>Synthwave City</div>
                <div className={styles.trackArtist}>The Midnight Riders</div>
              </div>
            </div>
            <div className={styles.playerControls}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '65%' }}></div>
              </div>
              <div className={styles.timeInfo}>
                <span>02:14</span>
                <span>03:45</span>
              </div>
            </div>
            
            <div className={styles.autoDjBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Transmitiendo Automáticamente
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
