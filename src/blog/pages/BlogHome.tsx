// src/pages/BlogHome.tsx (o la ruta donde lo tengas)
import React from 'react';
import { useOutletContext } from 'react-router-dom'; // 1. IMPORTAMOS EL PUENTE
import { BlogCard } from '../components/BlogCard';
import frontMatter from 'front-matter';

interface FrontMatterAttributes {
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

// 2. DEFINIMOS EL TIPO DE DATO QUE VIENE DESDE EL LAYOUT
interface BlogContextType {
  categoriaActiva: string;
}

export const BlogHome: React.FC = () => {
  // 3. ATRAPAMOS LA CATEGORÍA QUE ELIGIERON EN EL NAVBAR
  const { categoriaActiva } = useOutletContext<BlogContextType>();

  // Vite escanea automáticamente todos tus .md en la carpeta de contenido
  const mdFiles = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default', eager: true });
  
  const posts = Object.entries(mdFiles).map(([path, content]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const { attributes, body } = frontMatter<FrontMatterAttributes>(content as string);
    const excerpt = body.substring(0, 130).replace(/#/g, '').trim() + '...';

    return {
      id: slug,
      slug,
      excerpt,
      ...attributes
    };
  });

  // 4. LA MAGIA DEL FILTRO: Si es "Todas" pasa entero, si no, se recorta.
  const postsFiltrados = categoriaActiva === 'Todas' 
    ? posts 
    : posts.filter(post => post.category === categoriaActiva);

  return (
    <div className="space-y-10">
      <div className="border-b border-barto-border pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-barto-dark">
          Diario de Expediciones
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl leading-relaxed">
          Crónicas de campo, datos de especies y reportes técnicos desde el corazón de Ucayali y la Amazonía peruana.
        </p>
      </div>
      
      {/* 5. DIBUJAMOS USANDO LA LISTA FILTRADA EN LUGAR DE LA ORIGINAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {postsFiltrados.map(post => (
          <BlogCard 
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            category={post.category}
            date={post.date}
            readTime={post.readTime}
            imageUrl={post.imageUrl}
            slug={post.slug}
          />
        ))}
      </div>

      {/* 6. DETALLE ÉLITE: Mensaje por si no hay artículos en esa categoría */}
      {postsFiltrados.length === 0 && (
        <div className="text-center py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
            Aún no hay bitácoras documentadas en esta categoría.
          </span>
        </div>
      )}

    </div>
  );
};