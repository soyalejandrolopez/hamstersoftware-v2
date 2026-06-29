import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hamster Software | Data & Dev',
    short_name: 'Hamster Soft',
    description: 'Ingeniería de Datos y Desarrollo de Software',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#FED514',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
