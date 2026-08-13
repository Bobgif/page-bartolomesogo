import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 1. IMPORTACIÓN DE ÉLITE
import waypointsData from '../../data/waypoints.json';

// Solución para iconos en Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// 2. TU DOMINIO MAESTRO (CDN)
const R2_DOMAIN = 'https://cdn.bartolomesogo.com';

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
  
  // 3. EL CEREBRO: Extraemos automáticamente las categorías únicas del JSON
  const categoriasUnicas = ["Todas", ...Array.from(new Set(waypointsData.map((p: any) => p.category)))];

  // 4. LA MEMORIA: Guardamos qué botón ha presionado el usuario
  const [categoriaActiva, setCategoriaActiva] = useState<string>("Todas");

  // 5. EL FILTRO: Solo dejamos pasar al mapa los puntos de la categoría seleccionada
  const waypointsFiltrados = categoriaActiva === "Todas" 
    ? waypointsData 
    : waypointsData.filter((p: any) => p.category === categoriaActiva);

  return (
    <div className="w-full space-y-4">
      
      {/* --- PANEL DE FILTROS DINÁMICOS --- */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {categoriasUnicas.map(cat => (
          <button 
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              categoriaActiva === cat 
                ? 'bg-barto-dark text-white border-barto-dark shadow-md scale-105' 
                : 'bg-white text-gray-600 border-gray-300 hover:bg-emerald-50 hover:border-emerald-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- EL DOMADOR DE MAPAS --- */}
      <div className="relative z-0 w-full max-w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-emerald-900/30">
        
        <MapContainer 
          center={[-8.8, -74.6]} 
          zoom={7} 
          scrollWheelZoom={false}
          className="w-full h-full" 
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* 6. DIBUJAMOS SOLO LOS PUNTOS FILTRADOS Y VALIDADOS */}
          {waypointsFiltrados.map((point: any) => {
            
            // 🛡️ EL ESCUDO VITAL: Si el artículo no tiene coordenadas, lo ignoramos y no rompemos la web.
            if (!point.lat || !point.lng) return null;

            return (
              <Marker key={point.slug} position={[point.lat, point.lng]}>
                <Popup>
                  <div className="w-[220px] pb-1">
                    
                    {point.imageUrl && (
                      <div className="w-full h-28 overflow-hidden rounded-md mb-2 shadow-sm">
                        <img 
                          // 7. LA MAGIA R2
                          src={point.imageUrl.startsWith('http') ? point.imageUrl : `${R2_DOMAIN}/${point.imageUrl}`} 
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
                    <p className="text-xs text-gray-600 mt-2 mb-3 leading-snug line-clamp-3">
                      {point.description || 'Leer la expedición...'}
                    </p>
                    <a 
                      href={`/blog/${point.slug}`}
                      className="block text-xs font-bold text-emerald-600 hover:text-emerald-800 hover:underline"
                    >
                      Leer más &rarr;
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};