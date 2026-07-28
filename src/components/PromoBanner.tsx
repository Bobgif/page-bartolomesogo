import React from 'react';
import { Link } from 'react-router-dom';
import frontMatter from 'front-matter';
import bannerRaw from '../content/home/banner.md?raw';

interface BannerData {
  active: boolean;
  tag: string;
  title: string;
  buttonText: string;
  link: string;
  imageUrl: string;
  altText: string;
}

export const PromoBanner: React.FC = () => {
  const { attributes, body } = frontMatter<BannerData>(bannerRaw);

  if (!attributes.active) return null;

  return (
    // 1. Agregamos 'relative' y 'min-h-[200px] md:min-h-0' al contenedor padre
    <aside className="w-full bg-[#1A332D] border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row relative group hover:border-[#FF6B35]/50 transition-colors shadow-lg min-h-[100px] md:min-h-0">
      
      {/* 2. LA IMAGEN: La movemos arriba en el código.
          - En móvil: absoluta (fondo completo)
          - En PC (md:): relativa y ocupa 1/3 del ancho */}
      <div className="absolute inset-0 md:relative md:inset-auto md:w-1/3 h-full md:h-auto overflow-hidden z-0">
        <img 
          src={attributes.imageUrl} 
          alt={attributes.altText} 
          className="w-full h-full object-cover grayscale opacity-50 md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
        {/* Tu gradiente original: Lo ocultamos en celular (hidden) pero lo mostramos en PC (md:block) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0B1311] via-transparent to-transparent"></div>
      </div>

      {/* 3. CAPA OSCURA MÓVIL: Una sombra negra que SOLO aparece en el teléfono (md:hidden) */}
      <div className="absolute inset-0 bg-black/60 md:hidden z-0 pointer-events-none"></div>

      {/* 4. EL TEXTO: Le agregamos 'relative z-10' para que flote sobre la foto en el celular */}
      <div className="py-3.5 px-3.5 md:py-3 md:px-6 flex flex-col justify-center flex-grow relative z-10 md:z-auto md:w-2/3">
        
        <div className="flex items-center space-x-3 mb-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
          </span>
          <span className="text-[10px] font-mono text-[#FF6B35] uppercase tracking-widest">{attributes.tag}</span>
        </div>
        
        <h3 className="text-lg md:text-2xl font-extrabold text-white mb-1 leading-tight">
          {attributes.title}
        </h3>
        
        {/* Tu párrafo que ya logramos ocultar en celular */}
        <p className="hidden md:block text-gray-400 text-sm mb-2 max-w-xl">
          {body.trim()}
        </p>
        
        {/* BOTONES: En celular le damos un fondo semi-transparente para que parezca un botón real sobre la foto, en PC se lo quitamos */}
        <div className="mt-1 md:mt-0">
          {attributes.link.startsWith('/') ? (
            <Link to={attributes.link} className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF6B35] transition-colors inline-flex items-center bg-white/10 md:bg-transparent px-3 py-1.5 md:p-0 rounded-sm md:rounded-none border border-white/20 md:border-none backdrop-blur-sm md:backdrop-blur-none">
              {attributes.buttonText} <span className="ml-2">&rarr;</span>
            </Link>
          ) : (
            <a href={attributes.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#FF6B35] transition-colors inline-flex items-center bg-white/10 md:bg-transparent px-3 py-1.5 md:p-0 rounded-sm md:rounded-none border border-white/20 md:border-none backdrop-blur-sm md:backdrop-blur-none">
              {attributes.buttonText} <span className="ml-2">&nearr;</span>
            </a>
          )}
        </div>

      </div>

    </aside>
  );
};