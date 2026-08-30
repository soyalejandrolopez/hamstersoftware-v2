/* eslint-disable @next/next/no-img-element */
import styles from './Footer.module.css';

const serviceLinks = [
  'Ingeniería de Datos',
  'Extracción de Datos / ETL',
  'Visualización de Datos',
  'Minería y Gestión de Datos',
  'Software de Escritorio',
  'Machine Learning',
  'Desarrollo Móvil',
  'IoT Internet de las Cosas',
  'Precios Medicamentos',
  'Sistemas Bajo Demanda',
  'Desarrollo Web',
];

const quickLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo} aria-label="Hamster Software — Inicio">
            <svg className={styles.logoIcon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="url(#footerGrad)" />
              <circle cx="20" cy="22" r="10" fill="#FED514" />
              <circle cx="16" cy="20" r="2" fill="#013A6B" />
              <circle cx="24" cy="20" r="2" fill="#013A6B" />
              <ellipse cx="20" cy="24" rx="2.5" ry="1.5" fill="#E5BF00" />
              <ellipse cx="13" cy="14" rx="5" ry="6" fill="#FEE566" />
              <ellipse cx="27" cy="14" rx="5" ry="6" fill="#FEE566" />
              <defs>
                <linearGradient id="footerGrad" x1="2" y1="2" x2="38" y2="38">
                  <stop stopColor="#024F90" />
                  <stop offset="1" stopColor="#0A6BB5" />
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>
              Hamster<span className={styles.logoAccent}>Software</span>
            </span>
          </a>
          <p className={styles.brandDesc}>
            Desde Popayán, transformamos datos en decisiones inteligentes. Soluciones de software con
            la energía y dedicación de un hámster en su rueda.
          </p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/hamstersoftwareCol" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/hamstersoftwarecol/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@hamstersoftwarecol" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-1.76.13-3.59 1.07-5.16 1.17-1.87 3.28-3.05 5.43-3.26v4.06c-1.07.13-2.1.8-2.61 1.74-.53.94-.52 2.12-.02 3.09.52 1.03 1.63 1.69 2.78 1.76 1.45.1 2.75-.76 3.23-2.12.21-.59.25-1.23.23-1.85-.04-3.18-.01-6.36-.02-9.54z"/>
              </svg>
            </a>
            <a href="mailto:info@hamstersoftware.com" className={styles.socialLink} aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
          
          <div className={styles.verification}>
            <span className={styles.verificationText}>Razón social legalmente constituida y registrada en la Cámara de Comercio del Cauca.</span>
            <a href="https://www.rues.org.co/buscar/RM/hamster%20software" target="_blank" rel="noopener noreferrer">
              <img src="https://d1ubo22jqmjd7v.cloudfront.net/images/82205767e296e81508c339a8e093fda0-rues-logo.svg" alt="Registro Único Empresarial y Social" className={styles.verificationLogo} />
            </a>
          </div>
        </div>

        <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Navegación</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Servicios</h4>
          <ul className={styles.linkList}>
            {serviceLinks.map((s, i) => (
              <li key={i}>
                <a href="#servicios" className={styles.link}>{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Hamster Software. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
