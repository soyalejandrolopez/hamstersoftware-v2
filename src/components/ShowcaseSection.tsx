'use client';

import React from 'react';
import styles from './ShowcaseSection.module.css';
import { motion } from 'framer-motion';

// REEMPLAZA LOS ENLACES EN 'imageUrl' CON TUS PROPIOS VIDEOS O CAPTURAS DE PANTALLA
const projects = [
  {
    id: 1,
    title: 'Sitio Web para Spa & Bienestar',
    description: 'Diseñamos una experiencia digital relajante y premium para un centro de bienestar. Incluye integración de pagos, catálogo de masajes y un diseño que transmite paz desde el primer clic.',
    tags: ['Web App', 'Next.js', 'Stripe'],
    // IMAGEN DESCARGADA.
    imageUrl: '/images/spa_website_ui.png', 
    device: 'laptop',
  },
  {
    id: 2,
    title: 'App de Reservas para Salón de Belleza',
    description: 'Aplicación nativa que permite a los clientes agendar citas, elegir a su estilista favorito y recibir recordatorios automáticos. Aumentó las reservas del salón en un 40%.',
    tags: ['Mobile App', 'React Native', 'Firebase'],
    // IMAGEN DESCARGADA.
    imageUrl: '/images/beauty_app_ui.png', 
    device: 'mobile',
  },
];

export default function ShowcaseSection() {
  return (
    <section id="portafolio" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Casos de Éxito</span>
          <h2 className={styles.title}>
            Transformando ideas en <span className={styles.highlight}>experiencias digitales</span>
          </h2>
          <p className={styles.subtitle}>
            Conoce algunas de las soluciones de software y aplicaciones que hemos construido para llevar a nuestros clientes al siguiente nivel.
          </p>
        </motion.div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id} 
                className={`${styles.projectRow} ${!isEven ? styles.rowReverse : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <a href="#contacto" className={`btn btn-primary ${styles.ctaButton}`}>
                    Quiero un proyecto similar
                  </a>
                </div>

                <div className={styles.projectVisual}>
                  {project.device === 'laptop' ? (
                    <div className={styles.laptopMockup}>
                      <div className={styles.laptopScreen}>
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className={`${styles.videoContent} ${styles.animatePan}`} 
                        />
                      </div>
                      <div className={styles.laptopBase}></div>
                    </div>
                  ) : (
                    <div className={styles.phoneMockup}>
                      <div className={styles.phoneScreen}>
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className={`${styles.videoContentMobile} ${styles.animatePan}`} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
