'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWidget.module.css';

const WHATSAPP_NUMBER = '573025790274';

const OPTIONS = [
  {
    id: 'data',
    label: 'Ingeniería de Datos / IA',
    message: 'Hola, estoy interesado en sus servicios de Ingeniería de Datos e Inteligencia Artificial.',
  },
  {
    id: 'software',
    label: 'Desarrollo de Software / Web',
    message: 'Hola, me gustaría cotizar un desarrollo de Software / Web a medida.',
  },
  {
    id: 'consulting',
    label: 'Hablar con un asesor',
    message: 'Hola, me gustaría hablar con un asesor para que me orienten con mi proyecto.',
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const playSqueak = () => {
    const audio = new Audio('/sounds/squeak.ogg');
    audio.play().catch(e => console.log('Audio play failed', e));
  };

  return (
    <div className={styles.widgetContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <div className={styles.avatar} onClick={playSqueak} style={{ cursor: 'pointer' }}>
                  {/* Hamster minimalist icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="#024F90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div className={styles.headerText}>
                  <span className={styles.title}>Hamster Asesor</span>
                  <span className={styles.status}>
                    <span className={styles.statusDot}></span>
                    En línea
                  </span>
                </div>
              </div>
              <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Cerrar chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className={styles.chatBody}>
              <div className={styles.botMessage}>
                ¡Hola! 🐹 Soy tu asistente virtual. ¿En qué podemos ayudarte a transformar tu negocio hoy?
              </div>
              
              <div className={styles.optionsContainer}>
                {OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    className={styles.optionButton}
                    onClick={() => handleOptionClick(option.message)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.floatingButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        )}
      </motion.button>
    </div>
  );
}
