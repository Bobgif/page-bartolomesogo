import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, category, date, readTime, imageUrl, slug }) => {
  return (
    <article className="flex flex-col bg-white border border-barto-border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      
      {/* Contenedor de la Imagen */}
      <Link to={`/blog/${slug}`} className="block relative h-64 overflow-hidden bg-barto-dark">
        <img 
          src={imageUrl} 
          alt={title} 
          loading="lazy" /* <--- CRÍTICO: Carga perezosa para zonas de baja cobertura */
          className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
        />
        {/* Etiqueta de Categoría */}
        <div className="absolute top-4 left-4 bg-barto-dark text-barto-gold text-[10px] font-mono px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
          {category}
        </div>
      </Link>

      {/* Contenido de Texto */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Metadatos (Fecha y Tiempo de lectura jalados por el script) */}
        <div className="flex items-center text-[10px] font-mono text-gray-500 mb-3 space-x-4 uppercase tracking-wider">
          <span>{date}</span>
          <span>&bull;</span>
          <span>{readTime}</span>
        </div>
        
        {/* Título */}
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-extrabold text-barto-dark mb-3 group-hover:text-barto-gold transition-colors leading-tight">
            {title}
          </h3>
        </Link>
        
        {/* Resumen */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {excerpt}
        </p>
        
        {/* Botón de "Leer Crónica" */}
        <Link to={`/blog/${slug}`} className="text-xs font-bold uppercase tracking-widest text-barto-dark hover:text-barto-gold transition-colors inline-flex items-center mt-auto">
          Leer crónica <span className="ml-2 font-normal text-lg leading-none">&rarr;</span>
        </Link>

      </div>
    </article>
  );
};