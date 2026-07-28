import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import fm from 'front-matter';

// Solución para iconos en Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

export const HomeMap = (): React.JSX.Element => {
  
  const mdFiles = import.meta.glob('../../content/blog/*.md', { query: '?raw', eager: true });

  const waypoints = Object.values(mdFiles).map((file: any) => {
    const { attributes } = fm(file.default); 
    return attributes as any;
  }).filter(attr => attr.coordinates); 

  return (
    /* 1. EL DOMADOR DE MAPAS: 
       - relative y z-0: Evita que el mapa flote por encima de tu Navbar.
       - max-w-full: Le prohíbe terminantemente desbordar la pantalla hacia la derecha.
       - Aislar altura (h-[400px] md:h-[500px]): Lo hace responsivo para celulares.
    */
    <div className="relative z-0 w-full max-w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-emerald-900/30">
      
      <MapContainer 
        center={[-8.8, -74.6]} 
        zoom={7} 
        scrollWheelZoom={false}
        /* 2. En lugar de style={{...}}, usamos las clases de Tailwind para forzarlo al 100% de la caja padre */
        className="w-full h-full" 
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {waypoints.map((point) => (
          <Marker key={point.slug} position={point.coordinates}>
            <Popup>
              <div className="w-[220px] pb-1">
                
                {/* NOTA: Corregí un pequeño detalle aquí. Antes verificabas point.imageUrl pero imprimías point.imgthumbnails. 
                    Asegúrate de usar la variable correcta de tu .md */}
                {point.imageUrl && (
                  <div className="w-full h-28 overflow-hidden rounded-md mb-2 shadow-sm">
                    <img 
                      src={point.imageUrl} 
                      alt={`Expedición: ${point.title}`}
                      loading="lazy" 
                      className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                )}
                
                <h3 className="font-bold text-emerald-900 text-sm m-0 leading-tight mt-1">
                  {point.title}
                </h3>
                <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded uppercase tracking-wider">
                  {point.category}
                </span>
                <p className="text-xs text-gray-600 mt-2 mb-3 leading-snug">
                  {point.description || 'Crónica de expedición...'}
                </p>
                <a 
                  href={`/blog/${point.slug}`} // Ajusté la ruta a /blog/ según lo que configuramos antes
                  className="block text-xs font-bold text-emerald-600 hover:text-emerald-800 hover:underline"
                >
                  Leer más &rarr;
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};