import React, { useState } from 'react'; // 1. IMPORTAMOS useState
import { Outlet } from 'react-router-dom';
import { BlogNavbar } from '../components/BlogNavbar';
//import { BlogFooter } from '../components/BlogFooter';
//import { BlockCallToAction} from '../components/BlogCallToAction';

export const BlogLayout: React.FC = () => {
  // 2. LA MEMORIA CENTRAL: Vive aquí para compartirse con toda la sección Blog
  const [categoriaActiva, setCategoriaActiva] = useState<string>('Todas');

  return (
    <div className="min-h-screen bg-barto-surface text-barto-dark font-sans selection:bg-barto-gold selection:text-white">
      
      {/* 3. CONECTAMOS EL NAVBAR: Le pasamos los mandos de la nave */}
      <BlogNavbar 
        categoriaActiva={categoriaActiva} 
        setCategoriaActiva={setCategoriaActiva} 
      />

      {/* Grid de 12 columnas: 8 para el post, 4 para el sidebar */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* ZONA PRINCIPAL DE LECTURA */}
        <div className="lg:col-span-8">
          {/* 4. EL PUENTE MAGICO: Le pasamos la categoría a la página que cargue aquí dentro */}
          <Outlet context={{ categoriaActiva }} /> 
        </div>

        {/* BARRA LATERAL DERECHA (Sidebar) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* //Módulo de Donaciones / Patrocinio *
          <div className="bg-barto-bg p-8 rounded-xl border border-barto-border shadow-xs text-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-barto-gold font-bold mb-2 block">
              Ciencia Ciudadana
            </span>
            <h3 className="font-bold text-xl mb-3 text-barto-dark">Apoya la Exploración</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Tu aporte financia equipos fotográficos y logística para seguir documentando la biodiversidad del Sira y la Amazonía.
            </p>
            // 5. BOTÓN FUNCIONAL: Ahora es una etiqueta <a> con tus mismos estilos *
            <a 
              href="https://ko-fi.com/bartolomesogo" // REEMPLAZA CON TU LINK DE DONACIÓN
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-barto-dark text-white py-3 rounded-lg font-medium hover:bg-barto-gold transition-colors shadow-sm"
            >
              Donar / Patrocinar
            </a>
          </div>/}

          {/* Módulo Futuro: Carrito de Compras / Tienda */}
          <div className="bg-barto-bg p-8 rounded-xl border border-barto-border shadow-xs">
            <h3 className="font-bold text-lg mb-2 text-barto-dark border-b border-barto-border pb-2">Prints y Libros</h3>
            <p className="text-sm text-gray-500 mt-4 italic">Próximamente: Fotografías en alta resolución y bitácoras impresas.</p>
          </div>

        </aside>

      </main>
      {/* <BlockCallToAction /> */}
      {/* <BlogFooter /> */}
    </div>
  );
};