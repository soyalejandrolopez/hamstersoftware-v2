/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  LayoutDashboard, 
  Mail, 
  CheckSquare, 
  Calendar, 
  Globe, 
  BarChart2, 
  DollarSign,
  MoreVertical,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import styles from './Ventas.module.css';

const barData = [
  { name: 'A', value: 210, color: '#3b82f6' },
  { name: 'B', value: 110, color: '#8b5cf6' },
  { name: 'C', value: 176, color: '#ec4899' },
  { name: 'D', value: 145, color: '#f59e0b' },
];

const efficiencyData = [
  { label: 'A', value: 75, color: '#3b82f6' },
  { label: 'B', value: 44, color: '#8b5cf6' },
  { label: 'C', value: 68, color: '#ec4899' },
  { label: 'D', value: 55, color: '#f59e0b' },
];

const timelineData = [
  { id: 'A', title: 'Generación de Leads', progress: 55, color: '#3b82f6', width: '40%', left: '0%' },
  { id: 'B', title: 'Calificación', progress: 80, color: '#8b5cf6', width: '55%', left: '10%' },
  { id: 'C', title: 'Negociación', progress: 65, color: '#ec4899', width: '45%', left: '10%' },
  { id: 'D', title: 'Cierre', progress: 75, color: '#f59e0b', width: '45%', left: '30%' },
];

const kanbanColumns: any[] = [
  {
    title: 'PROSPECTOS',
    cards: [
      { id: 1, letter: 'A', title: 'Contactar Empresa X', color: '#3b82f6', type: 'lead' },
      { id: 2, letter: 'B', title: 'Llamada de seguimiento', color: '#8b5cf6', type: 'call' }
    ]
  },
  {
    title: 'EN PROCESO',
    cards: [
      { id: 3, letter: 'C', title: 'Reunión inicial', color: '#ec4899', progress: 75 }
    ]
  },
  {
    title: 'NEGOCIANDO',
    cards: [
      { id: 4, type: 'bullet', text: 'Revisión legal', color: '#3b82f6' },
      { id: 5, type: 'bullet', text: 'Ajustes presupuesto', color: '#8b5cf6' }
    ]
  },
  {
    title: 'CERRADOS',
    cards: [
      { id: 6, letter: 'A', title: 'Contrato firmado', color: '#3b82f6', done: true },
      { id: 7, letter: 'B', title: 'Pago recibido', color: '#8b5cf6', done: true }
    ]
  }
];

const CircularProgress = ({ value, color, label }: { value: number, color: string, label: string }) => {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className={styles.dialContainer}>
      <svg width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r={radius} stroke="#f1f5f9" strokeWidth="3" fill="none" />
        <circle 
          cx="18" cy="18" r={radius} 
          stroke={color} strokeWidth="3" fill="none" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
        />
        <text x="18" y="21.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0f172a">{value}</text>
      </svg>
      <span className={styles.dialLabel}>{label}</span>
    </div>
  );
};

export default function SalesDashboard() {
  return (
    <SmoothScroll>
      <Navbar />
      <div className={styles.pageContainer}>
        <motion.div 
          className={styles.dashboardWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* LEFT SIDEBAR */}
          <aside className={styles.sidebar}>
            <div className={styles.menuIcon}>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
            </div>
            
            <nav className={styles.navMenu}>
              <div className={`${styles.navItem} ${styles.active}`}>
                <LayoutDashboard size={16} /> <span className={styles.navText}>DASHBOARD</span>
              </div>
              <div className={styles.navItem}>
                <Mail size={16} /> <span className={styles.navText}>MENSAJES</span>
              </div>
              <div className={styles.navItem}>
                <CheckSquare size={16} /> <span className={styles.navText}>TAREAS</span>
              </div>
              <div className={styles.navItem}>
                <Calendar size={16} /> <span className={styles.navText}>PLANIFICACIÓN</span>
              </div>
              <div className={styles.navItem}>
                <Globe size={16} /> <span className={styles.navText}>GLOBAL</span>
              </div>
              <div className={styles.navItem}>
                <BarChart2 size={16} /> <span className={styles.navText}>ANÁLISIS</span>
              </div>
              <div className={styles.navItem}>
                <DollarSign size={16} /> <span className={styles.navText}>FINANZAS</span>
              </div>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className={styles.mainContent}>
            <header className={styles.topHeader}>
              <div className={styles.breadcrumbs}>
                Ventas &gt; <strong>Hoy</strong>
              </div>
              <div className={styles.topLinks}>
                <span className={styles.activeLink}>Precios</span>
                <span>Acerca de</span>
                <span>Idioma</span>
                <span>Condiciones</span>
              </div>
            </header>

            <div className={styles.titleSection}>
              <h1 className={styles.mainTitle}>Gestión de Ventas</h1>
              <p className={styles.subTitle}>01 División / 01 Departamento / Equipo A</p>
            </div>

            {/* TIMELINE SECTION */}
            <div className={styles.timelineArea}>
              <div className={styles.timelineHeader}>
                <span>28</span><span>29</span><span>30</span><span>31</span><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span>
              </div>
              <div className={styles.timelineBars}>
                {timelineData.map((item, i) => (
                  <div key={i} className={styles.timelineRow}>
                    <div className={styles.timelineLabelCard}>
                      <div className={styles.circleLetter} style={{ backgroundColor: item.color }}>{item.id}</div>
                      <span className={styles.labelText}>{item.title}</span>
                      <MoreVertical size={12} color="#cbd5e1" />
                    </div>
                    <div className={styles.timelineTrack}>
                      <div className={styles.timelineBar} style={{ width: item.width, left: item.left, backgroundColor: item.color }}>
                        <div className={styles.barDots}>
                          <div className={styles.dot} style={{ backgroundColor: '#fff' }}></div>
                          <div className={styles.dot}></div>
                        </div>
                        <span className={styles.barProgress}>{item.progress}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KANBAN SECTION */}
            <div className={styles.kanbanArea}>
              {kanbanColumns.map((col: any, idx: number) => (
                <div key={idx} className={styles.kanbanCol}>
                  <h3 className={styles.kanbanTitle}>{col.title}</h3>
                  <div className={styles.kanbanCards}>
                    {col.cards.map((card: any, cidx: number) => (
                      <div key={cidx} className={styles.kanbanCard}>
                        {card.type === 'bullet' ? (
                          <div className={styles.bulletCard}>
                            <div className={styles.bulletDot} style={{ backgroundColor: card.color }}></div>
                            <span className={styles.bulletText}>{card.text}</span>
                          </div>
                        ) : (
                          <>
                            <div className={styles.cardHeader}>
                              <div className={styles.cardInfo}>
                                <div className={styles.circleLetterSmall} style={{ backgroundColor: card.color }}>{card.letter}</div>
                                <span className={styles.cardTitle}>{card.title}</span>
                              </div>
                              {card.done && <CheckCircle2 size={14} color="#10b981" />}
                            </div>
                            
                            {card.progress && (
                              <div className={styles.progressSection}>
                                <div className={styles.progressInfo}>
                                  <MessageSquare size={10} color="#94a3b8" /> <span>1</span>
                                  <span style={{ marginLeft: 'auto', fontSize: '9px', fontWeight: 'bold' }}>Progress {card.progress}%</span>
                                </div>
                                <div className={styles.progressBarBg}>
                                  <div className={styles.progressBarFill} style={{ width: `${card.progress}%`, backgroundColor: card.color }}></div>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.rightSidebar}>
            <div className={styles.profileSection}>
              <div className={styles.profileIconWrapper}>
                <div className={styles.profileShape}></div>
              </div>
            </div>

            <div className={styles.planSection}>
              <h3 className={styles.sectionHeading}>Plan</h3>
              <div className={styles.planItem}>
                <div className={styles.planBadge} style={{ backgroundColor: '#fdf4ff', color: '#ec4899' }}>ABC</div>
                <span className={styles.planTime}>12:00 - 13:00</span>
              </div>
              <div className={styles.planItem}>
                <div className={styles.planBadge} style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}>ABD</div>
                <span className={styles.planTime}>13:00 - 14:00</span>
              </div>
            </div>

            <div className={styles.efficiencySection}>
              <h3 className={styles.sectionHeading}>Eficiencia</h3>
              <div className={styles.dialsRow}>
                {efficiencyData.map((d, i) => (
                  <CircularProgress key={i} value={d.value} color={d.color} label={d.label} />
                ))}
              </div>
            </div>

            <div className={styles.completedSection}>
              <h3 className={styles.sectionHeading}>Ventas Completadas</h3>
              <div className={styles.barChartWrapper}>
                <ResponsiveContainer width="100%" height={80}>
                  <BarChart data={barData} barSize={10}>
                    <Bar dataKey="value" radius={[10, 10, 10, 10]}>
                      {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.chartLabels}>
                {barData.map((d, i) => (
                  <div key={i} className={styles.chartLabelItem}>
                    <span className={styles.labelValue}>{d.value}</span>
                    <span className={styles.labelName}>Autor {d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </motion.div>
      </div>
    </SmoothScroll>
  );
}
