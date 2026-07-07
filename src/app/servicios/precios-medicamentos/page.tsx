import { motion } from 'framer-motion';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Precios.module.css';
import PreciosTable from './PreciosTable';

export default function PreciosMedicamentosPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.container}>
          
          {/* Hero Section */}
          <div className={styles.hero}>
            <div className={styles.badge}>Datos Abiertos</div>
            <h1 className={styles.title}>
              Consulta de <span className={styles.highlight}>Precios de Medicamentos</span>
            </h1>
            <p className={styles.subtitle}>
              Explora y compara los precios de referencia de medicamentos regulados, con información oficial del Gobierno de Colombia. Construimos soluciones de datos que integran APIs gubernamentales (Socrata) en tiempo real para tu negocio.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="/#contacto" className={styles.primaryBtn}>
                Integrar API similar
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </Link>
            </div>
          </div>

          {/* Table App */}
          <div className={styles.appWrapper}>
            <PreciosTable />
          </div>

        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
