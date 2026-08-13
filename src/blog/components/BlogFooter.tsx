// src/components/blog/BlogFooter.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bgv from '../../../package.json';
export const BlogFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-barto-bg border-t border-barto-border mt-20">
      
      {/* Sección Superior: CTA / Boletín de Expedición */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-barto-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-extrabold text-barto-dark uppercase tracking-widest mb-2">
            Únete a la Expedición
          </h3>
          <p className="text-sm text-gray-600 font-mono">
            Recibe crónicas y fotografías exclusivas directamente desde el campo.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input 
            type="email" 
            placeholder="TU CORREO ELECTRÓNICO" 
            className="px-4 py-2 bg-transparent border-2 border-barto-dark text-barto-dark font-mono text-xs focus:outline-none w-full md:w-64 placeholder:text-gray-400"
          />
          <button className="px-6 py-2 bg-barto-dark text-barto-bg font-bold font-mono text-xs uppercase tracking-widest hover:bg-barto-gold transition-colors duration-300">
            Suscribir
          </button>
        </div>
      </div>

      {/* Contenido Principal del Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Columna 1 y 2: Marca y Bio */}
        <div className="md:col-span-2">
          <Link to="/" className="inline-block font-extrabold tracking-widest text-barto-dark text-2xl uppercase mb-6">
            Bartolomé Sogo<span className="text-barto-gold">Blog</span>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
            Investigando y documentando la biodiversidad del Perú, desde la Amazonía hasta los Andes. Crónicas de campo, fotografías y descubrimientos de especies.
          </p>
          {/* Sello de coordenadas estilo pasaporte */}
          <div className="inline-block border border-barto-border p-2 text-barto-dark font-mono text-[10px] uppercase tracking-widest bg-white/50">
            📍 Perú, Desarrollado por Bartolome Sogo v{bgv.blogVersion}
          </div>
        </div>

        {/* Columna 3: Enlaces Rápidos */}
        <div>
          <h4 className="text-barto-dark font-bold mb-6 uppercase tracking-widest text-xs font-mono">
            Navegación
          </h4>
          <ul className="space-y-4 text-sm font-medium text-gray-600 font-mono">
            <li><Link to="/" className="hover:text-barto-gold transition-colors">Portafolio Web</Link></li>
            <li><Link to="/blog" className="hover:text-barto-gold transition-colors">Revistas</Link></li>
            <li><Link to="/about" className="hover:text-barto-gold transition-colors">Socios</Link></li>
            <li><Link to="/contacto" className="hover:text-barto-gold transition-colors">Consultoría B2B</Link></li>
          </ul>
        </div>

        {/* Columna 4: Ciencia y Redes */}
        <div>
          <h4 className="text-barto-dark font-bold mb-6 uppercase tracking-widest text-xs font-mono">
            Conexiones
          </h4>
          <ul className="space-y-4 text-sm font-medium text-gray-600 font-mono">
            <li><a href="https://ebird.org/profile/NTA4NDA4MQ" target="_blank" rel="noopener noreferrer" className="hover:text-barto-gold transition-colors flex items-center gap-2">🦅 Perfil en eBird</a></li>
            <li><a href="https://www.instagram.com/bartosogo/" target="_blank" rel="noopener noreferrer" className="hover:text-barto-gold transition-colors flex items-center gap-2">📸 Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/bartolome-soto/" target="_blank" rel="noopener noreferrer" className="hover:text-barto-gold transition-colors flex items-center gap-2">💼 LinkedIn</a></li>
           
          </ul>
        </div>

      </div>

      {/* Base Final con contraste (Copyright y Tech Stack) */}
      <div className="bg-barto-dark text-barto-bg py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest">
          <p>&copy; {currentYear} Bartolomé Sogo. Todos los derechos reservados.</p>
          <p className="text-gray-400">
            Ucayali <span className="text-barto-gold">Perú</span>
          </p>
        </div>
      </div>

    </footer>
  );
};