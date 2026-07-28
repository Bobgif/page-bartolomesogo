import React from 'react';

export const ExpeditionMap: React.FC = () => {
  return (
    <section id="expedition-map" className="mt-8 mb-12 scroll-mt-20 ">
      
      {/* Cabecera tecnológica del mapa */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-barto-border pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-barto-dark tracking-tight">
            Mapa de Exploración
          </h2>
          <p className="text-gray-500 font-mono text-xs mt-2 uppercase tracking-widest">
            Mis Recorridos &bull; Puntos de Documentación
          </p>
        </div>
        
      </div>

      {/* Contenedor del Iframe con diseño "In-hackeable" */}
      <div className="relative w-full h-[450px] md:h-[450px] rounded-xl overflow-hidden border border-gray-300 shadow-xl group bg-barto-dark">
        
        {/* Aquí pegas el Iframe que te da Google My Maps. (Este es uno de ejemplo) */}
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1oxfbCItfsz2-UlumE8L964tFcZxo7Mc&ehbc=2E312F" width="100%" height="100%" ></iframe>

        {/* Efecto de capa tecnológica que desaparece al pasar el mouse para interactuar */}
        <div className="absolute inset-0 bg-barto-dark/10 pointer-events-none z-20 group-hover:bg-transparent transition-colors duration-500"></div>
        
      </div>
      
      <p className="text-center text-xs text-gray-400 font-mono mt-4">
        * Haz clic en los waypoints del mapa para acceder a las crónicas geolocalizadas.
      </p>

    </section>
  );
};