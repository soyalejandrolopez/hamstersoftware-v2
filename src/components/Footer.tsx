import styles from './Footer.module.css';

const serviceLinks = [
  'Ingeniería de Datos',
  'Extracción de Datos / ETL',
  'Visualización de Datos',
  'Minería y Gestión de Datos',
  'Software de Escritorio',
  'Machine Learning',
  'Desarrollo Móvil',
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
