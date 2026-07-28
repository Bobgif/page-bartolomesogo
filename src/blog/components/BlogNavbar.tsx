import React from 'react';
import { Link } from 'react-router-dom';

export const BlogNavbar: React.FC = () => {
  return (
    <header className="bg-barto-bg border-b border-barto-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Lado Izquierdo: Marca de Expedición */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xs font-mono font-bold text-barto-gold hover:text-barto-dark transition-colors uppercase tracking-widest">
            &larr; Portafolio
          </Link>
          <div className="h-6 w-px bg-barto-border hidden md:block"></div>
          <Link to="/blog" className="font-extrabold tracking-widest text-barto-dark text-lg uppercase">
            Barto<span className="text-barto-gold">Blog</span>
          </Link>
        </div>

        {/* Lado Derecho: Categorías del Blog */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono uppercase tracking-wider text-barto-dark font-medium">
          <Link to="/blog" className="hover:text-barto-gold transition-colors duration-300">Crónicas</Link>
          <Link to="/blog" className="hover:text-barto-gold transition-colors duration-300">Herpetos & Aves</Link>
          {/* Botón de Donación directo en el menú */}
          <button className="px-4 py-1.5 border-2 border-barto-dark text-barto-dark hover:bg-barto-dark hover:text-barto-bg font-bold transition-all duration-300 rounded-sm">
            Apoyar
          </button>
        </nav>

      </div>
    </header>
  );
};