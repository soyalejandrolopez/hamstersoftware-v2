'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import styles from './WhatsAppWidget.module.css';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    interest: 'Cotización',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `Hola, mi nombre es *${formData.name}*.\nEstoy interesado/a en: *${formData.interest}*.\n\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Target phone number provided by user
    const phoneNumber = '573025790274';
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    
    // Optionally close the popup after sending
    setIsOpen(false);
  };

  return (
    <div className={styles.widgetContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.popup}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <span className={styles.headerTitle}>Chatea con nosotros</span>
                <span className={styles.headerSubtitle}>Respondemos lo antes posible</span>
              </div>
              <button 
                className={styles.closeBtn} 
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar widget de WhatsApp"
              >
                <X size={20} />
              </button>
            </div>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="wa-name" className={styles.label}>Nombre</label>
                <input 
                  id="wa-name"
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.interest}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="Cotización">Solicitar una Cotización</option>
                  <option value="Servicios de Software">Servicios de Software</option>
                  <option value="Asesoría Técnica">Asesoría Técnica</option>
                  <option value="Soporte">Soporte</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="wa-message" className={styles.label}>Mensaje</label>
                <textarea 
                  id="wa-message"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea} 
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                <Send size={18} />
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className={styles.floatingBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat de WhatsApp"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
