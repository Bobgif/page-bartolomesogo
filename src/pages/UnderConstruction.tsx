import React from 'react';

export const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-barto-dark text-white flex flex-col justify-between px-6 py-12 relative overflow-hidden select-none">
      
      {/* Fondo decorativo con rejilla sutil de mapa / topografía */}
      <div className="absolute inset-0 bg-[radial-gradient(#2D4A43_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

    

      {/* 2. CONTENIDO PRINCIPAL Y CITA */}
      <main className="relative z-10 max-w-3xl mx-auto my-auto text-center py-0">
        
        {/* Etiqueta de estado */}
        <span className="inline-block font-mono text-[11px] font-bold text-[#FF6B35] uppercase tracking-widest bg-[#FF6B35]/10 border border-[#FF6B35]/20 px-4 py-1.5 rounded-full mb-8">
          Expedición Digital en Proceso
        </span>

        {/* Título principal */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">
          Este sitio web está en <span className="text-[#FF6B35]">construcción</span>
        </h1>

        {/* Cita de la Selva */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-2xl">
          <svg 
            className="w-8 h-8 text-[#FF6B35]/40 mx-auto mb-4" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-lg sm:text-2xl font-light italic text-gray-200 leading-relaxed font-sans">
            “La selva no se construyó en un día; fueron miles de años.”
          </blockquote>

          <p className="mt-4 font-mono text-xs text-[#FF6B35] uppercase tracking-widest">
            &mdash; Bartolomé Sogo, Fotógrafo y Explorador de la Amazonía
          </p>
        </div>

        {/* Mensaje Secundario y Contacto */}
        <p className="mt-8 text-gray-400 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
          Estamos afinando las coordenadas, cargando los archivos del mapa y curando los registros fotográficos de la Amazonía peruana.
        </p>

        <div className="mt-10">
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#ff8254] transition-colors duration-300 shadow-lg shadow-[#FF6B35]/20"
          >
            Contactar por correo &rarr;
          </a>
        </div>

      </main>

      

    </div>
  );
};