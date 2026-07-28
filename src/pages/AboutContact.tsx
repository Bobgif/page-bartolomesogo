import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export const AboutContact: React.FC = () => {
  // Extraemos la ubicación y URL actual
 const location = useLocation();

  useEffect(() => {
    // Si la URL contiene la palabra "contacto", bajamos suavemente al formulario
    if (location.pathname.includes('contacto')) {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Si la URL es "/acerca", nos aseguramos de estar en la parte superior
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-barto-bg text-barto-dark">
      <div className="max-w-5xl mx-auto px-6 py-2 space-y-24">
        
        {/* Llamada al componente modular de perfil */}
        <About />

        {/* Llamada al componente modular de formulario */}
        <Contact />

      </div>
    </div>
  );
};