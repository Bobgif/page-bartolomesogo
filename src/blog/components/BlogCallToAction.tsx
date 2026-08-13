import React from 'react';
import { Link } from 'react-router-dom';

export const BlockCallToAction: React.FC = () => {
  return (
    // Contenedor principal con fondo crema (barto-bg) y borde superior
    <section className="bg-[#FAF8F5] border-t border-emerald-900/10 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Lado Izquierdo: Texto descriptivo */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 bg-emerald-900 px-3 py-1 rounded-sm shadow-sm inline-block mb-6">
            Soberanía Tecnológica & Expediciones
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-6 leading-tight tracking-tight uppercase">
            El puente entre el campo y el código
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-sans leading-relaxed max-w-2xl mx-auto md:mx-0">
            Consultoría especializada en levantamiento geoespacial en la Amazonía, 
            registro documental de avistamientos bajo rigurosidad científica y 
            desarrollo web ultraligero para organizaciones de conservación.
          </p>
        </div>

        {/* Lado Derecho: Botón de acción principal */}
        <div className="flex-shrink-0 w-full md:w-auto text-center">
          <Link 
            to="/servicios" 
            className="inline-flex items-center px-8 py-4 bg-emerald-900 text-[#FAF8F5] font-bold font-mono text-sm uppercase tracking-widest hover:bg-amber-600 transition-colors duration-300 rounded-sm shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Explorar Consultoría
            <span className="ml-3 font-normal text-2xl leading-none">&rarr;</span>
          </Link>
          <p className="text-[10px] font-mono text-gray-500 mt-4 uppercase tracking-wider">
            Diseño de soluciones técnicas a medida
          </p>
        </div>

      </div>
    </section>
  );
};