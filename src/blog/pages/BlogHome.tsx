import React from 'react';
import { BlogCard } from '../components/BlogCard';
import frontMatter from 'front-matter';

interface FrontMatterAttributes {
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export const BlogHome: React.FC = () => {
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
      
      {/* Aquí es donde cada post se dibuja usando tu BlogCard.tsx */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map(post => (
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
    </div>
  );
};