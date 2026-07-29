import React from 'react';
import { PromoBanner } from '../components/PromoBanner';
import { Allies } from '../components/Allies';
import { HomeMap } from '../components/maps/HomeMap';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in pb-10 space-y-12">
      
      {/* BANNER PROMOCIONAL (.MD) */}
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <PromoBanner />
      </div>

      {/* SECCIÓN HERO (Tu propuesta de valor rápida) */}
      <section className="pt-3 pb-2 md:pt-2 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-barto-dark tracking-tighter leading-tight mb-2">
          Documentando la <span className="text-barto-gold">Amazonía</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 leading-relaxed font-light">
          Fotografía de fauna silvestre, monitoreo de herpetos y soporte visual para investigación científica en la selva del Perú.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => document.getElementById('home-map')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-barto-dark text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-barto-gold transition-colors cursor-pointer"
          >
            Ver el Maps de Barto ↓
          </button>
        </div>
      </section>

      {/* MAPA INTERACTIVO */}
      <div id="home-map" className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-barto-dark">Bitácora de Expediciones - Bartolomé Sogo</h2>
        <HomeMap />
      </div>

      {/* SECCIÓN DE ALIADOS ESTRATÉGICOS (Fluyendo limpiamente) */}
      <Allies />

    </div>
  );
};

export default Home;