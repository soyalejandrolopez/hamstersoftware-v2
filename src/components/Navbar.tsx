'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Globe, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { 
    label: 'Servicios', 
    href: '/#servicios',
    subLinks: [
      { label: 'Vulnerabilidades', href: '/servicios/vulnerabilidades', desc: 'Pentesting y auditorías' },
      { label: 'Monitoreo Sísmico', href: '/servicios/monitoreo-sismico', desc: 'Estaciones sísmicas en tiempo real' },
      { label: 'Resultados Deportivos', href: '/servicios/resultados-deportivos', desc: 'Plataforma live score' },
      { label: 'Análisis de Ventas', href: '/servicios/analisis-de-ventas', desc: 'Dashboards y métricas' },
      { label: 'Radio Streaming', href: '/servicios/radio-streaming', desc: 'Infraestructura de audio' },
      { label: 'Sistema Telemedicina', href: '/servicios/telemedicina', desc: 'Consultas y expedientes' },
      { label: 'Reserva y Boletos', href: '/servicios/reserva-boletos', desc: 'Ticketing avanzado' },
      { label: 'Sistema Odoo CRM', href: '/servicios/odoo', desc: 'Implementación ERP' },
      { label: 'Plugins WordPress', href: '/servicios/plugins-wordpress', desc: 'Desarrollo a medida' },
      { label: 'IoT Internet de las Cosas', href: '/servicios/iot', desc: 'Hardware y sensores' },
      { label: 'Precios Medicamentos', href: '/servicios/precios-medicamentos', desc: 'Comparador farmacéutico' },
      { label: 'OpenClaw', href: '/servicios/openclaw', desc: 'Control de hardware arcade' },
      { label: 'Reserva Barbería', href: '/servicios/reserva-barberia', desc: 'Sistema para peluquerías' },
      { label: 'Limpieza Facial', href: '/servicios/limpieza-facial', desc: 'Sistema para spas y clínicas' },
      { label: 'Plataformas LMS y Moodle', href: '/servicios/lms-moodle', desc: 'Cursos para escuelas y empresas' },
      { label: 'Alquiler Lavadoras', href: '/servicios/alquiler-lavadoras', desc: 'Gestión de rentas' },
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
      setMobileServicesOpen(false); // Reset accordion when closing
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
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
              Hamster <span className={styles.logoTextAccent}>Software</span>
            </span>
          </Link>

          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <div key={link.href} className={styles.navDropdownGroup}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                  {link.subLinks && <ChevronDown size={14} className={styles.chevron} />}
                </Link>
                {link.subLinks && (
                  <div className={styles.megaMenu}>
                    <div className={styles.megaMenuGrid}>
                      {link.subLinks.map(sub => (
                        <Link key={sub.href} href={sub.href} className={styles.megaMenuLink}>
                          <span className={styles.megaMenuTitle}>{sub.label}</span>
                          <span className={styles.megaMenuDesc}>{sub.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className={styles.divider}></div>
            
            {/* Language Selector */}
            <div className={styles.langSelector}>
              <button 
                className={styles.langButton} 
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-expanded={isLangOpen}
              >
                <Globe size={16} />
                {currentLang}
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    className={styles.langDropdown}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
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
              Contactar Ventas
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
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className={styles.mobileDrawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className={styles.drawerHeader}>
                <span className={styles.drawerTitle}>Menú</span>
                <button className={styles.closeBtn} onClick={() => setIsMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className={styles.drawerContent}>
                {navLinks.map((link, i) => (
                  <div key={link.href} className={styles.mobileLinkGroup}>
                    {link.subLinks ? (
                      <>
                        <button
                          className={styles.mobileLinkBtn}
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                          {link.label}
                          <motion.div
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              className={styles.mobileAccordion}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {link.subLinks.map((sub) => (
                                <Link key={sub.href} href={sub.href} passHref legacyBehavior>
                                  <a
                                    className={styles.mobileSubLink}
                                    onClick={() => setIsMobileOpen(false)}
                                  >
                                    {sub.label}
                                  </a>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={link.href} passHref legacyBehavior>
                        <a className={styles.mobileLink} onClick={() => setIsMobileOpen(false)}>
                          {link.label}
                        </a>
                      </Link>
                    )}
                  </div>
                ))}

                <div className={styles.mobileLangSection}>
                  <span className={styles.mobileLangTitle}>Idioma preferido</span>
                  <div className={styles.mobileLangGrid}>
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
              </div>

              <div className={styles.drawerFooter}>
                <Link href="/#contacto" passHref legacyBehavior>
                  <a
                    className="btn btn-primary"
                    onClick={() => setIsMobileOpen(false)}
                    style={{ width: '100%', textAlign: 'center', padding: '1rem' }}
                  >
                    Agendar Consulta
                  </a>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
