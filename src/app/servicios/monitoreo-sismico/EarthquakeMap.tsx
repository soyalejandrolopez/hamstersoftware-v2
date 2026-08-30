/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './Sismico.module.css';

// Interfaz para los terremotos que pasaremos como prop
interface Earthquake {
  id: string;
  mag: number;
  place: string;
  time: number;
  url: string;
  tsunami: number;
  depth: number;
  coords: [number, number]; // [lat, lng]
}

export default function EarthquakeMap({ earthquakes }: { earthquakes: Earthquake[] }) {
  // Fix común para los iconos por defecto de Leaflet en React, aunque usaremos CircleMarkers
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const getMagnitudeColor = (mag: number) => {
    if (mag >= 7.0) return '#ef4444'; // Red
    if (mag >= 6.0) return '#f97316'; // Orange
    if (mag >= 5.0) return '#eab308'; // Yellow
    return '#10b981'; // Green
  };

  const formatTime = (time: number) => {
    return new Intl.DateTimeFormat('es-ES', { 
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(time));
  };

  return (
    <div className={styles.mapContainer}>
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', borderRadius: '16px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        
        {earthquakes.map((quake) => (
          <CircleMarker
            key={quake.id}
            center={quake.coords}
            radius={Math.max(quake.mag * 2, 4)}
            pathOptions={{
              color: getMagnitudeColor(quake.mag),
              fillColor: getMagnitudeColor(quake.mag),
              fillOpacity: 0.6,
              weight: 1
            }}
          >
            <Popup className="custom-popup">
              <div style={{ fontFamily: 'inherit' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: getMagnitudeColor(quake.mag) }}>
                  M {quake.mag.toFixed(1)}
                </h3>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#1a1a1a' }}>{quake.place}</p>
                <p style={{ margin: '0 0 4px 0', color: '#4a4a4a', fontSize: '0.9rem' }}>Profundidad: {quake.depth.toFixed(1)} km</p>
                <p style={{ margin: '0', color: '#666', fontSize: '0.85rem' }}>{formatTime(quake.time)}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
