import React from 'react';
import { IMAGES } from '../data/imageUrls';

export const Allies: React.FC = () => {
  const alliesList = Object.values(IMAGES.allies);

  return (
    <section className="py-16 border-t border-white/5 ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Encabezado */}
        <div className="mb-10">
         
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-barto-dark mb-2">
            Aliados Estratégicos
          </h3>
        </div>

        {/* Galería fluida sin cajas oscuras */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {alliesList.map((ally, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center transition-all duration-300"
            >
              <div className="h-16 md:h-20 flex items-center justify-center">
                <img 
                  src={ally.url} 
                  alt={ally.alt} 
                  className="max-h-full w-auto object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Allies;