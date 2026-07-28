import React, { useRef } from 'react';

interface Photo {
  url: string;
  alt: string;
}

interface PhotoSliderProps {
  photos: Photo[];
}

export const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
  // Referencia para controlar el deslizamiento con los botones
  const sliderRef = useRef<HTMLDivElement>(null);

  // Función para mover exactamente 1 diapositiva a la vez
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth; // Mide el ancho exacto de tu foto
      sliderRef.current.scrollBy({ 
        left: direction === 'left' ? -slideWidth : slideWidth, 
        behavior: 'smooth' 
      });
    }
  };

  if (!photos || photos.length === 0) return null;

  return (
    // Agregamos 'group' aquí para que detecte cuando el mouse entra a la foto
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 group bg-[#0B1311]">
      
      {/* Contenedor del Slider */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
      >
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="w-full shrink-0 snap-center relative aspect-[4/3] md:aspect-[16/9]"
          >
            {/* Imagen con Carga Diferida (Lazy) */}
            <img 
              src={photo.url} 
              alt={photo.alt}
              loading="lazy" 
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-full object-cover select-none"
            />
            
            {/* Texto de la diapositiva */}
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              <p className="text-white text-xs md:text-sm font-mono uppercase tracking-wider">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTONES FLOTANTES (Solo en Computadora) */}
      {/* hidden md:flex -> Los oculta en celular. opacity-0 group-hover:opacity-100 -> Los muestra al pasar el mouse */}
      
      <button 
        onClick={() => scroll('left')}
        className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#FF6B35] transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 cursor-pointer backdrop-blur-sm border border-white/20"
        aria-label="Anterior foto"
      >
        &larr;
      </button>

      <button 
        onClick={() => scroll('right')}
        className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#FF6B35] transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 cursor-pointer backdrop-blur-sm border border-white/20"
        aria-label="Siguiente foto"
      >
        &rarr;
      </button>
      
    </div>
  );
};