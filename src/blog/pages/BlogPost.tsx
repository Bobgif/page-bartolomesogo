//BlogPost.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import frontMatter from 'front-matter';
import { IMAGES } from '../../data/imageUrls';

interface FrontMatterAttributes {
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

// 1. Modificamos las props para recibir lo que Markdown nos manda (src y alt)
interface SmartImageProps {
  src?: string;
  alt?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({ src, alt }) => {
  if (!src) return null;

  // 2. ¿Es un enlace normal de internet o local? (https://... o /imagenes/...)
  if (src.startsWith('http') || src.startsWith('/')) {
    return <img src={src} alt={alt} loading="lazy" className="w-full rounded-xl shadow-md my-8" />;
  }

  // 3. Si no es un enlace, asumimos que es una CLAVE de tu diccionario
  const imgKey = src as keyof typeof IMAGES.blogMd;
  const imgData = IMAGES.blogMd[imgKey]; 

  // Si escribiste mal la clave en el Markdown, te avisa en rojo en vez de romper la página
  if (!imgData) {
    return <div className="p-4 bg-red-50 text-red-500 text-xs text-center border border-red-200 rounded-xl my-8">⚠️ Clave de imagen no encontrada en diccionario: {src}</div>;
  }

  // Renderiza desde el diccionario
  return (
    <figure className="my-8">
      <img 
        src={imgData.url} 
        alt={imgData.alt || alt} 
        loading="lazy"
        className="w-full h-auto object-cover rounded-xl shadow-md"
      />
      {/* Opcional: Muestra la descripción debajo de la foto */}
      {(imgData.alt || alt) && (
        <figcaption className="text-center text-xs font-mono text-gray-400 mt-3 uppercase tracking-wider">
          {imgData.alt || alt}
        </figcaption>
      )}
    </figure>
  );
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const mdFiles = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default', eager: true });
  const fileKey = Object.keys(mdFiles).find(key => key.includes(`/${slug}.md`));

  if (!fileKey) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold text-barto-dark">Crónica no encontrada</h2>
        <Link to="/blog" className="text-barto-gold mt-6 inline-flex items-center font-bold tracking-widest uppercase hover:underline">
          &larr; Volver al diario
        </Link>
      </div>
    );
  }

  const content = mdFiles[fileKey] as string;
  const { attributes, body } = frontMatter<FrontMatterAttributes>(content);

  return (
    <article className="max-w-4xl mx-auto py-10 px-4 md:px-0">
      
      <Link to="/blog" className="text-sm font-mono text-gray-500 hover:text-barto-gold transition-colors mb-10 inline-block uppercase tracking-widest">
        &larr; Volver al diario
      </Link>

      <header className="mb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-widest bg-barto-dark text-barto-gold px-3 py-1 rounded-sm shadow-sm inline-block mb-6">
          {attributes.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-barto-dark mb-6 leading-tight tracking-tight">
          {attributes.title}
        </h1>
        <div className="flex justify-center items-center text-xs font-mono text-gray-500 space-x-4 uppercase tracking-wider">
          <span>{attributes.date}</span>
          <span>&bull;</span>
          <span>{attributes.readTime}</span>
        </div>
      </header>

      <div className="w-full h-64 md:h-[500px] mb-12 overflow-hidden rounded-xl shadow-lg border border-barto-border">
        <img 
          src={attributes.imageUrl} 
          alt={attributes.title} 
          className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700" 
        />
      </div>

      <div className="prose prose-lg max-w-3xl mx-auto text-gray-700 font-sans prose-headings:text-barto-dark prose-a:text-barto-gold">
        
        <ReactMarkdown 
          rehypePlugins={[rehypeRaw]}
          // 4. AQUÍ OCURRE LA MAGIA DE REACT-MARKDOWN
          components={{
            // Interceptamos la creación de imágenes y usamos nuestro SmartImage
            img: (props) => <SmartImage src={props.src} alt={props.alt} />
          }}
        >
          {body}
        </ReactMarkdown>

      </div>
    </article>
  );
};