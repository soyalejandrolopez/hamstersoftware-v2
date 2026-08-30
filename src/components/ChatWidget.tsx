'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWidget.module.css';

const WHATSAPP_NUMBER = '573025790274';

const OPTIONS = [
  {
    id: 'consulting',
    label: 'Hablar con un asesor',
    message: 'Hola, me gustaría hablar con un asesor para que me orienten con mi proyecto.',
  },
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
];

export default function ChatWidget() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOptionClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    setIsChatOpen(false);
  };

  const playSqueak = () => {
    const audio = new Audio('/sounds/squeak.ogg');
    audio.play().catch(e => console.log('Audio play failed', e));
  };

  return (
    <div className={styles.widgetContainer}>
      <AnimatePresence>
        {isChatOpen && (
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
              <button className={styles.closeButton} onClick={() => setIsChatOpen(false)} aria-label="Cerrar chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className={styles.chatBody}>
              <form className={styles.form} onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const interest = formData.get('interest');
                const message = formData.get('message');
                
                const text = `Hola, mi nombre es *${name}*.\nEstoy interesado/a en: *${interest}*.\n\n${message}`;
                const encodedText = encodeURIComponent(text);
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
                setIsChatOpen(false);
              }}>
                <div className={styles.inputGroup}>
                  <label htmlFor="wa-name" className={styles.label}>Nombre</label>
                  <input 
                    id="wa-name"
                    type="text" 
                    name="name" 
                    className={styles.input} 
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="wa-interest" className={styles.label}>Me interesa...</label>
                  <select 
                    id="wa-interest"
                    name="interest"
                    className={styles.select}
                    required
                  >
                    {OPTIONS.map(opt => (
                      <option key={opt.id} value={opt.label}>{opt.label}</option>
                    ))}
                    <option value="Cotización general">Cotización general</option>
                    <option value="Soporte técnico">Soporte técnico</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="wa-message" className={styles.label}>Mensaje</label>
                  <textarea 
                    id="wa-message"
                    name="message" 
                    className={styles.textarea} 
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && !isChatOpen && (
          <motion.div
            className={styles.speedDial}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
          >
            <button className={styles.speedDialButton} onClick={() => { setIsMenuOpen(false); setIsChatOpen(true); }} aria-label="Chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </button>
            <a href="https://www.facebook.com/hamstersoftwareCol" target="_blank" rel="noopener noreferrer" className={styles.speedDialButton} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/hamstersoftwarecol/" target="_blank" rel="noopener noreferrer" className={styles.speedDialButton} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@hamstersoftwarecol" target="_blank" rel="noopener noreferrer" className={styles.speedDialButton} aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-1.76.13-3.59 1.07-5.16 1.17-1.87 3.28-3.05 5.43-3.26v4.06c-1.07.13-2.1.8-2.61 1.74-.53.94-.52 2.12-.02 3.09.52 1.03 1.63 1.69 2.78 1.76 1.45.1 2.75-.76 3.23-2.12.21-.59.25-1.23.23-1.85-.04-3.18-.01-6.36-.02-9.54z"/>
              </svg>
            </a>
            <a href="mailto:info@hamstersoftware.com" className={styles.speedDialButton} aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.floatingButton}
        onClick={() => {
          if (isChatOpen) {
            setIsChatOpen(false);
          } else {
            setIsMenuOpen(!isMenuOpen);
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Menú"
      >
        {isMenuOpen || isChatOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
          </svg>
        )}
      </motion.button>
    </div>
  );
}
