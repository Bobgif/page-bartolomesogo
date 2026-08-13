// src/blog/components/BlogNavbar.tsx (o la ruta donde lo tengas)
import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORTAMOS LAS CATEGORÍAS GENERADAS POR EL ROBOT
// (Asegúrate de que la ruta de los ../ sea correcta hasta tu carpeta data)
import categoriasData from '../../data/categories.json';

// 2. DEFINIMOS EL CONTRATO (PROPS): El Navbar avisa al padre cuando cambia la categoría
interface BlogNavbarProps {
  categoriaActiva: string;
  setCategoriaActiva: (categoria: string) => void;
}

export const BlogNavbar: React.FC<BlogNavbarProps> = ({ categoriaActiva, setCategoriaActiva }) => {
  return (
    <header className="bg-barto-bg border-b border-barto-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Lado Izquierdo: Marca de Expedición (INTACTO) */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xs font-mono font-bold text-barto-gold hover:text-barto-dark transition-colors uppercase tracking-widest">
            &larr; Portafolio
          </Link>
          <div className="h-6 w-px bg-barto-border hidden md:block"></div>
          <Link to="/blog" className="font-extrabold tracking-widest text-barto-dark text-lg uppercase">
            Bartolomé Sogo<span className="text-barto-gold">Blog</span>
          </Link>
        </div>

        {/* Lado Derecho: Categorías del Blog y Apoyo */}
        <nav className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono uppercase tracking-wider text-barto-dark font-medium">
          
          {/* 3. LISTA DESPLEGABLE DINÁMICA (Camuflada con tus estilos) */}
          <div className="relative flex items-center group">
            <select 
              value={categoriaActiva}
              onChange={(e) => setCategoriaActiva(e.target.value)}
              className="appearance-none bg-transparent border-none text-barto-dark py-1 pr-6 cursor-pointer focus:outline-none focus:ring-0 group-hover:text-barto-gold transition-colors font-bold uppercase tracking-widest"
            >
              {categoriasData.map((cat, index) => (
                <option key={index} value={cat} className="bg-barto-bg text-barto-dark">
                  {cat}
                </option>
              ))}
            </select>
            {/* Flecha personalizada sutil */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-barto-dark group-hover:text-barto-gold transition-colors">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* 4. BOTÓN DE DONACIÓN FUNCIONAL
          {/* Lo convertimos a etiqueta <a> para que realmente lleve a un sitio *
          <a 
            href="https://paypal.me/bartosogo" // REEMPLAZA ESTO por tu link de Yape/PayPal/BuyMeACoffee
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border-2 border-barto-dark text-barto-dark hover:bg-barto-dark hover:text-barto-bg font-bold transition-all duration-300 rounded-sm block"
          >
            Apoyar
          </a> */}
        </nav>

      </div>
    </header>
  );
};