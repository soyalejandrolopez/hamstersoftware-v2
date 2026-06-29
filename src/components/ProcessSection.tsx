'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ProcessSection.module.css';

const steps = [
  {
    number: '01',
    title: 'Consulta',
    description:
      'Escuchamos tus necesidades, analizamos tu situación actual y definimos juntos los objetivos del proyecto.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: '#024F90',
  },
  {
    number: '02',
    title: 'Diseño & Desarrollo',
    description:
      'Arquitectamos la solución, diseñamos prototipos y construimos con metodología ágil — con entregas iterativas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: '#FED514',
  },
  {
    number: '03',
    title: 'Entrega & Soporte',
    description:
      'Desplegamos tu solución, capacitamos a tu equipo y ofrecemos soporte continuo para garantizar el éxito.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#024F90',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.process}`} id="proceso" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Cómo Trabajamos
          </span>
          <h2 className="heading-lg">
            Tres pasos hacia tu{' '}
            <span className="text-gradient">transformación digital</span>
          </h2>
          <p className="text-body">
            Un proceso simple, transparente y eficiente para llevar tu proyecto de la idea a la realidad.
          </p>
        </motion.div>

        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`glass-card ${styles.stepCard}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.stepNumber} style={{ color: step.color }}>
                {step.number}
              </div>
              <div
                className={styles.stepIconWrap}
                style={{ background: `${step.color}14` }}
              >
                <div className={styles.stepIcon} style={{ color: step.color }}>
                  {step.icon}
                </div>
              </div>
              <h3 className={`heading-sm ${styles.stepTitle}`}>{step.title}</h3>
              <p className="text-small">{step.description}</p>

              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <path
                      d="M0 12h32m0 0l-6-6m6 6l-6 6"
                      stroke={step.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
