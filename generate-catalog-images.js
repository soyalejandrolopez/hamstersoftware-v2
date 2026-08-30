const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const services = [
  { id: 'analisis-de-ventas', name: 'Análisis de', name2: 'Ventas' },
  { id: 'iot', name: 'Internet de', name2: 'las Cosas' },
  { id: 'monitoreo-sismico', name: 'Monitoreo', name2: 'Sísmico' },
  { id: 'odoo', name: 'Desarrollo', name2: 'Odoo' },
  { id: 'openclaw', name: 'Sistemas', name2: 'OpenClaw' },
  { id: 'plugins-wordpress', name: 'Plugins', name2: 'WordPress' },
  { id: 'precios-medicamentos', name: 'Precios', name2: 'Farma' },
  { id: 'radio-streaming', name: 'Radio', name2: 'Streaming' },
  { id: 'reserva-boletos', name: 'Reserva de', name2: 'Boletos' },
  { id: 'resultados-deportivos', name: 'Resultados', name2: 'Deportivos' },
  { id: 'telemedicina', name: 'Salud y', name2: 'Telemedicina' },
  { id: 'vulnerabilidades', name: 'Ciber', name2: 'Seguridad' }
];

const outDir = path.join(__dirname, 'public', 'catalog');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generate() {
  for (const s of services) {
    const svg = `
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" fill="#024F90"/>
        
        <!-- Subtle Hamster Icon in Background -->
        <g opacity="0.1" transform="translate(38, 20) scale(3.5)">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#FFFFFF" stroke-width="2"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2" fill="none" stroke="#FFFFFF" stroke-width="2"/>
          <circle cx="9" cy="9" r="1.5" fill="#FFFFFF"/>
          <circle cx="15" cy="9" r="1.5" fill="#FFFFFF"/>
        </g>
        
        <text x="80" y="70" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#FED514" text-anchor="middle">${s.name}</text>
        <text x="80" y="95" font-family="Arial, sans-serif" font-weight="bold" font-size="16" fill="#FFFFFF" text-anchor="middle">${s.name2}</text>
      </svg>
    `;
    
    await sharp(Buffer.from(svg))
      .png()
      .toFile(path.join(outDir, `${s.id}.png`));
    console.log(`Generated ${s.id}.png`);
  }
}

generate().then(() => console.log('Done')).catch(console.error);
