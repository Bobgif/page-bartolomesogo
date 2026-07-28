import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logosvg from '../assets/bartolome-sogo-logo.svg'; 

export const Navbar: React.FC = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace (en móviles)
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Cambiamos flex-col a flex-row siempre, para que el logo y el botón queden alineados en móvil */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logotipo en SVG */}
        <Link to="/" onClick={closeMenu} className="flex items-center space-x-3 group z-50">
          <img src={logosvg} alt="Logo de Bartolome Sogo" className="h-14 w-auto transition-transform transform group-hover:scale-105" />
        </Link>

        {/* ----------------- VISTA DE ESCRITORIO ----------------- */}
        
        {/* Enlaces de Navegación Limpios (Ocultos en móvil: hidden md:flex) */}
        <nav className="hidden md:flex justify-center gap-6 text-xs font-mono uppercase tracking-wider text-gray-800 font-medium">
          <Link to="/" className="hover:text-amber-600 transition-colors">Inicio</Link>
          <Link to="/underconstruction" className="hover:text-amber-600 transition-colors">Fotografías</Link>
          <Link to="/acerca" className="hover:text-amber-600 transition-colors">Acerca de mi</Link>
          <Link to="/contacto" className="hover:text-amber-600 transition-colors">Contacto</Link>
          <Link to="/underconstruction" className="hover:text-amber-600 transition-colors">Blog de exploraciones</Link>
        </nav>

        {/* Iconos de Redes Sociales (Ocultos en móvil) */}
        <div className="hidden md:flex items-center space-x-5 text-gray-800">
          <a href="https://www.instagram.com/bartosogo/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.facebook.com/bartolome.sogo/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@bartosogo" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
        </div>

        {/* ----------------- BOTÓN HAMBURGUESA (MÓVIL) ----------------- */}
        <button 
          className="md:hidden text-gray-800 hover:text-amber-600 focus:outline-none z-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // Icono de "X" cuando está abierto
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Icono de hamburguesa (3 líneas) cuando está cerrado
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* ----------------- MENÚ DESPLEGABLE MÓVIL ----------------- */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-6 text-sm font-mono uppercase tracking-wider text-gray-800 font-medium">
          <Link to="/" onClick={closeMenu} className="hover:text-amber-600 transition-colors w-full text-center">Inicio</Link>
          <Link to="/fotografias" onClick={closeMenu} className="hover:text-amber-600 transition-colors w-full text-center">Fotografías</Link>
          <Link to="/acerca" onClick={closeMenu} className="hover:text-amber-600 transition-colors w-full text-center">Acerca de</Link>
          <Link to="/contacto" onClick={closeMenu} className="hover:text-amber-600 transition-colors w-full text-center">Contacto</Link>
          <Link to="/blog" onClick={closeMenu} className="hover:text-amber-600 transition-colors w-full text-center">Diario de Expediciones</Link>
          
          {/* Redes sociales en móvil */}
          <div className="flex space-x-6 pt-4 border-t border-gray-100 w-1/2 justify-center">
            <a href="https://www.instagram.com/bartosogo/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/bartolome.sogo/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.youtube.com/@bartosogo" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};