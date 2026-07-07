import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        textAlign: 'center',
        padding: '8rem 2rem 4rem 2rem'
      }}>
        <svg width="140" height="140" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ marginBottom: '1.5rem' }}>
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
        <h1 style={{ fontSize: '4rem', margin: '0 0 0.5rem 0', fontWeight: '900', color: 'var(--color-primary)' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>Página no encontrada</h2>
        <p style={{ marginBottom: '2.5rem', maxWidth: '500px', lineHeight: '1.6', color: 'var(--color-text-light)', fontSize: '1.125rem' }}>
          Parece que te has perdido en el laberinto de código. La página que buscas no existe o ha sido movida a otro sitio.
        </p>
        <Link href="/" style={{
          padding: '0.875rem 2rem',
          backgroundColor: 'var(--color-cta)',
          color: 'var(--color-primary-dark)',
          textDecoration: 'none',
          borderRadius: '999px',
          fontWeight: 'bold',
          transition: 'all 0.2s',
          display: 'inline-block',
          boxShadow: '0 4px 14px rgba(254, 213, 20, 0.4)',
          fontSize: '1.125rem'
        }}>
          Volver al inicio
        </Link>
      </main>
      <Footer />
    </>
  );
}
