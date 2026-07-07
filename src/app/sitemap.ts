import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hamstersoftware.com';
  
  const routes = [
    '',
    '/servicios/analisis-de-ventas',
    '/servicios/iot',
    '/servicios/monitoreo-sismico',
    '/servicios/odoo',
    '/servicios/openclaw',
    '/servicios/plugins-wordpress',
    '/servicios/precios-medicamentos',
    '/servicios/radio-streaming',
    '/servicios/reserva-boletos',
    '/servicios/resultados-deportivos',
    '/servicios/telemedicina',
    '/servicios/vulnerabilidades',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
