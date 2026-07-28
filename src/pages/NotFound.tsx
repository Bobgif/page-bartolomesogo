import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-2">
        Error 404 &bull; Coordenadas no encontradas
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-barto-dark mb-4 tracking-tight">
        Ruta fuera de Mapa
      </h1>
      <p className="text-gray-600 max-w-md mb-8 text-sm md:text-base font-light">
        Muchas personas se pierden en la selva digital. La ruta que intentas seguir no existe en nuestro mapa de expediciones. Quizás quieras regresar al campamento base y explorar otras coordenadas.
      </p>
      <p className="text-gray-600 max-w-md mb-8 text-sm md:text-base font-light">
        Si crees que esto es un error, por favor contáctanos para que podamos actualizar nuestro mapa y guiar a los exploradores perdidos.
      </p>
      <Link 
        to="/" 
        className="bg-barto-dark text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-barto-gold transition-colors shadow-md"
      >
        Regresar al Campamento Base (Inicio)
      </Link>
    </div>
  );
};