'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContextMenu.module.css';

export default function ContextMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only apply on devices with pointer (prevent breaking mobile tap-and-hold)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      
      // Calculate position to prevent menu from going off-screen
      const menuWidth = 220;
      const menuHeight = 200;
      
      let x = e.clientX;
      let y = e.clientY;
      
      if (x + menuWidth > window.innerWidth) {
        x = window.innerWidth - menuWidth - 10;
      }
      
      if (y + menuHeight > window.innerHeight) {
        y = window.innerHeight - menuHeight - 10;
      }

      setPosition({ x, y });
      setIsOpen(true);
    };

    const handleClick = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClick);
    // Also close on scroll
    window.addEventListener('scroll', handleClick, { passive: true });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleClick);
    };
  }, [isOpen]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleScrollServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    const WHATSAPP_NUMBER = '573025790274';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20para%20mi%20proyecto`, '_blank');
    setIsOpen(false);
  };

  const playSqueak = () => {
    const audio = new Audio('/sounds/squeak.ogg');
    audio.play().catch(e => console.log('Audio play failed', e));
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.contextMenu}
          initial={{ opacity: 0, scale: 0.9, originX: 0, originY: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          style={{ left: position.x, top: position.y }}
        >
          <button className={styles.menuItem} onClick={handleScrollTop}>
            <span className={styles.menuIcon}>⬆️</span> Volver Arriba
          </button>
          
          <button className={styles.menuItem} onClick={handleScrollServices}>
            <span className={styles.menuIcon}>⚡</span> Ver Servicios
          </button>
          
          <div className={styles.separator} />
          
          <button className={styles.menuItem} onClick={handleWhatsApp}>
            <span className={styles.menuIcon}>💬</span> Chat WhatsApp
          </button>
          
          <div className={styles.separator} />
          
          <button className={styles.menuItem} onClick={playSqueak}>
            <span className={styles.menuIcon}>🐹</span> ¡Alimentar Hámster!
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
