'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { 
    label: 'Servicios', 
    href: '/#servicios',
    subLinks: [
      { label: 'Vulnerabilidades', href: '/servicios/vulnerabilidades' },
      { label: 'Monitoreo Sísmico', href: '/servicios/monitoreo-sismico' },
      { label: 'Resultados Deportivos', href: '/servicios/resultados-deportivos' },
      { label: 'Análisis de Ventas', href: '/servicios/analisis-de-ventas' },
      { label: 'Radio Streaming', href: '/servicios/radio-streaming' },
      { label: 'Sistema Telemedicina', href: '/servicios/telemedicina' },
      { label: 'Reserva y Boletos', href: '/servicios/reserva-boletos' },
      { label: 'Sistema Odoo CRM', href: '/servicios/odoo' },
      { label: 'Plugins WordPress', href: '/servicios/plugins-wordpress' },
      { label: 'IoT Internet de las Cosas', href: '/servicios/iot' },
      { label: 'Precios Medicamentos', href: '/servicios/precios-medicamentos' },
      { label: 'OpenClaw', href: '/servicios/openclaw' },
    ]
  },
  { label: 'Industrias', href: '/#industrias' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');

  const playSqueak = () => {
    const audio = new Audio('/sounds/squeak.ogg');
    audio.play().catch(e => console.log('Audio play failed', e));
  };

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'ru', label: 'RU' },
    { code: 'zh-CN', label: 'ZH' },
  ];

  const handleLangChange = (langCode: string, label: string) => {
    setCurrentLang(label);
    setIsLangOpen(false);
    
    // Find the hidden Google Translate select element and trigger a change
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Hamster Software — Inicio">
          {/* Hamster Logo SVG */}
          <svg className={styles.logoIcon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" onClick={playSqueak} style={{ cursor: 'pointer' }}>
            <circle cx="20" cy="20" r="18" fill="url(#hamsterGrad)" />
            <ellipse cx="13" cy="14" rx="5" ry="6" fill="#FEE566" />
            <ellipse cx="27" cy="14" rx="5" ry="6" fill="#FEE566" />
            <circle cx="20" cy="22" r="10" fill="#FED514" />
            <circle cx="16" cy="20" r="2" fill="#013A6B" />
            <circle cx="24" cy="20" r="2" fill="#013A6B" />
            <ellipse cx="20" cy="24" rx="2.5" ry="1.5" fill="#E5BF00" />
            <circle cx="15" cy="24" r="3" fill="#FEE566" opacity="0.5" />
            <circle cx="25" cy="24" r="3" fill="#FEE566" opacity="0.5" />
            <defs>
              <linearGradient id="hamsterGrad" x1="2" y1="2" x2="38" y2="38">
                <stop stopColor="#024F90" />
                <stop offset="1" stopColor="#0A6BB5" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>
            Hamster<span className={styles.logoTextAccent}>Software</span>
          </span>
        </Link>

        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <div key={link.href} className={styles.navDropdownGroup}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
              {link.subLinks && (
                <div className={styles.navDropdown}>
                  {link.subLinks.map(sub => (
                    <Link key={sub.href} href={sub.href} className={styles.navSubLink}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Service Icons */}
          <div className={styles.serviceIcons}>
            <div className={styles.serviceIconWrapper} title="App Móvil">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <div className={styles.serviceIconWrapper} title="Website / WWW">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className={styles.serviceIconWrapper} title="Tienda Virtual">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className={styles.langSelector}>
            <button 
              className={styles.langButton} 
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              {currentLang}
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  className={styles.langDropdown}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {languages.map(lang => (
                    <button 
                      key={lang.code} 
                      className={styles.langOption}
                      onClick={() => handleLangChange(lang.code, lang.label)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#contacto" className="btn btn-nav">
            Agendar Consulta
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMobileOpen ? styles.open : ''}`} />
          <span className={`${styles.hamburgerLine} ${isMobileOpen ? styles.open : ''}`} />
          <span className={`${styles.hamburgerLine} ${isMobileOpen ? styles.open : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link, i) => (
              <div key={link.href}>
                <Link href={link.href} passHref legacyBehavior>
                  <motion.a
                    className={styles.mobileLink}
                    onClick={() => setIsMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {link.label}
                  </motion.a>
                </Link>
                {link.subLinks && link.subLinks.map((sub, j) => (
                   <Link key={sub.href} href={sub.href} passHref legacyBehavior>
                     <motion.a
                       className={`${styles.mobileLink} ${styles.mobileSubLink}`}
                       onClick={() => setIsMobileOpen(false)}
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: (i + j + 0.5) * 0.08 }}
                     >
                       - {sub.label}
                     </motion.a>
                   </Link>
                ))}
              </div>
            ))}
            
            <div className={styles.mobileLangContainer}>
              <span className={styles.mobileLangLabel}>Idioma:</span>
              <div className={styles.mobileLangOptions}>
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    className={`${styles.mobileLangBtn} ${currentLang === lang.label ? styles.activeLang : ''}`}
                    onClick={() => {
                      handleLangChange(lang.code, lang.label);
                      setIsMobileOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <Link href="/#contacto" passHref legacyBehavior>
              <a
                className="btn btn-primary"
                onClick={() => setIsMobileOpen(false)}
                style={{ marginTop: '0.5rem', width: '100%', textAlign: 'center' }}
              >
                Agendar Consulta
              </a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
