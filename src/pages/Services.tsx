import React from 'react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const serviceList = [
    {
      id: 's1',
      title: 'Mapeo Geoespacial y Cartografía de Campo',
      description: 'Levantamiento de waypoints, rutas GPX y mapas interactivas optimizados para expediciones biológicas y de conservación en la Amazonía.',
      tag: 'Geoinformática',
      icon: '🗺️'
    },
    {
      id: 's2',
      title: 'Registro Documental y Fotografía de Fauna',
      description: 'Cobertura fotográfica profesional de flora, herpetos y avifauna bajo rigurosidad científica y metodologías de campo (eBird, SERNANP).',
      tag: 'Documentación',
      icon: '📸'
    },
    {
      id: 's3',
      title: 'Desarrollo Web & Soberanía de Datos',
      description: 'Creación de portales web ultraligeros, estáticos e independientes para divulgación científica, integrados con Cloudflare y Markdown.',
      tag: 'Software Libre',
      icon: '💻'
    }
  ];

  return (
    <div className="bg-barto-bg min-h-screen text-barto-dark">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="text-xs font-mono uppercase tracking-widest bg-barto-dark text-barto-gold px-3 py-1 rounded-sm inline-block mb-6 shadow-sm">
          Consultoría B2B & Expediciones
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight uppercase">
          Servicios de <span className="text-barto-gold">Campo y Código</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          Soluciones técnicas y científicas diseñadas específicamente para instituciones, investigadores y organizaciones que operan en territorio amazónico.
        </p>
      </section>

      {/* Cuadrícula de Servicios */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-barto-border rounded-xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="text-3xl mb-6 bg-gray-50 inline-block p-3 rounded-lg border border-barto-border">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-barto-gold bg-barto-dark px-2.5 py-1 rounded-sm inline-block mb-3">
                  {service.tag}
                </span>
                <h3 className="text-xl font-bold text-barto-dark mb-4 group-hover:text-barto-gold transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-barto-border/50">
                <a 
                  href="mailto:contacto@bartolomesogo.com?subject=Consulta%20sobre%20Servicios" 
                  className="text-xs font-bold uppercase tracking-widest text-barto-dark hover:text-barto-gold transition-colors inline-flex items-center"
                >
                  Solicitar cotización <span className="ml-2 font-normal text-lg leading-none">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Autoridad / Llamado a la Acción */}
      <section className="bg-barto-dark text-barto-bg py-16 px-6 text-center my-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest mb-4">
            ¿Tienes un proyecto en la Amazonía?
          </h2>
          <p className="text-gray-400 font-mono text-xs md:text-sm mb-8 leading-relaxed">
            Combinamos el rigor de la investigación biológica con estándares modernos de ingeniería web para garantizar resultados reales en campo.
          </p>
          <a 
            href="mailto:contacto@bartolomesogo.com" 
            className="inline-block px-8 py-3 bg-barto-gold text-barto-dark font-bold font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm"
          >
            Iniciar Conversación Técnica
          </a>
        </div>
      </section>

    </div>
  );
};