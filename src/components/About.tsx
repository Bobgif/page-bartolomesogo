import React from 'react';
import frontMatter from 'front-matter';
import ReactMarkdown from 'react-markdown';
import aboutRaw from '../content/about/about.md?raw';
import { IMAGES } from '../data/imageUrls';
//import { Link } from 'react-router-dom';
// 1. Definimos qué datos esperamos del YAML del markdown
interface AboutFrontMatter {
  title: string;
  subtitle: string;
  profileImgKey: keyof typeof IMAGES.about; // Exige que la clave exista en tu diccionario
  email: string;
}

export const About: React.FC = () => {
  // 2. Extraemos la información del .md
  const { attributes, body } = frontMatter<AboutFrontMatter>(aboutRaw);

  // 3. Jalamos la data de la imagen desde tu diccionario
  const profileImage = IMAGES.about[attributes.profileImgKey];

  return (
    <div className="animate-fade-in max-w-6xl mx-auto px-4 py-12 md:py-2">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: La Fotografía Vertical */}
        <div className="lg:col-span-5 relative group">
          {/* Tarjeta de imagen con proporción 4:5 */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#0B1311] border border-gray-200">
            {profileImage ? (
              <img 
                src={profileImage.url} 
                alt={profileImage.alt}
                loading="lazy"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-105"
              />
            ) : (
              // Por si te equivocas de clave en el .md
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Imagen no encontrada
              </div>
            )}
          </div>
          
          {/* Bloque decorativo de coordenadas (Tu estilo hacker/explorador) */}
          <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-[#0B1311] text-white p-4 rounded-xl shadow-xl border border-gray-800 hidden sm:block z-10">
            <p className="text-[10px] font-mono text-[#FF6B35] uppercase tracking-widest mb-1">Base de Operaciones</p>
            <p className="text-xs font-mono">Pucallpa, Ucayali</p>
            <p className="text-xs font-mono text-gray-400">8°22'54"S 74°33'14"W</p>
          </div>
        </div>

        {/* COLUMNA DERECHA: El texto en Markdown */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <header className="mb-2 border-b border-gray-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-barto-dark tracking-tight mb-3">
              {attributes.title}
            </h1>
            <p className="text-lg md:text-xl text-[#FF6B35] font-mono tracking-wide uppercase">
              {attributes.subtitle}
            </p>
          </header>

          {/* Renderizado automático del cuerpo del Markdown */}
          <div className="prose prose-lg text-gray-600 font-sans prose-headings:text-barto-dark prose-strong:text-barto-dark prose-li:marker:text-[#FF6B35]">
            <ReactMarkdown>
              {body}
            </ReactMarkdown>
          </div>

          {/* Botón de Contacto */}
          <div className="mt-10 pt-8">
            
              <button 
    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
    className="bg-barto-dark text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-barto-gold transition-colors cursor-pointer"
  >
    Iniciar Proyecto Conjunto &rarr;
  </button>
          </div>

        </div>

      </div>
    </div>
  );
};