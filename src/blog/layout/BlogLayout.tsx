import React from 'react';
import { Outlet } from 'react-router-dom';
import { BlogNavbar } from '../components/BlogNavbar';
import { Footer } from '../../components/Footer'; // Reutilizamos tu footer global

export const BlogLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-barto-surface text-barto-dark font-sans selection:bg-barto-gold selection:text-white">
      
      <BlogNavbar />

      {/* Grid de 12 columnas: 8 para el post, 4 para el sidebar */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* ZONA PRINCIPAL DE LECTURA (Aquí cargan las páginas del blog) */}
        <div className="lg:col-span-8">
          <Outlet /> 
        </div>

        {/* BARRA LATERAL DERECHA (Sidebar) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Módulo de Donaciones / Patrocinio */}
          <div className="bg-barto-bg p-8 rounded-xl border border-barto-border shadow-xs text-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-barto-gold font-bold mb-2 block">
              Ciencia Ciudadana
            </span>
            <h3 className="font-bold text-xl mb-3 text-barto-dark">Apoya la Exploración</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Tu aporte financia equipos fotográficos y logística para seguir documentando la biodiversidad del Sira y la Amazonía.
            </p>
            <button className="w-full bg-barto-dark text-white py-3 rounded-lg font-medium hover:bg-barto-gold transition-colors shadow-sm">
              Donar / Patrocinar
            </button>
          </div>

          {/* Módulo Futuro: Carrito de Compras / Tienda */}
          <div className="bg-barto-bg p-8 rounded-xl border border-barto-border shadow-xs">
            <h3 className="font-bold text-lg mb-2 text-barto-dark border-b border-barto-border pb-2">Prints y Libros</h3>
            <p className="text-sm text-gray-500 mt-4 italic">Próximamente: Fotografías en alta resolución y bitácoras impresas.</p>
          </div>

        </aside>

      </main>

      <Footer />
    </div>
  );
};