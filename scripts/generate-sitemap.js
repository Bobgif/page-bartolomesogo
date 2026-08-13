import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://bartolomesogo.com';

// 1. Tus páginas principales que siempre van a estar
const staticPages = [
  '',
  '/blog',
  '/fotografia',
    '/acerca',
    '/contacto'
];

// 2. Leer automáticamente la carpeta de tus posts del blog (.md)
const blogDir = path.resolve('src/content/blog');
let blogSlugs = [];

try {
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    blogSlugs = files
      .filter(file => file.endsWith('.md'))
      .map(file => `/blog/${file.replace('.md', '')}`);
  }
} catch (error) {
  console.log('No se pudo leer la carpeta de blog:', error);
}

// 3. Juntar todo en una sola lista de rutas
const allRoutes = [...staticPages, ...blogSlugs];

// 4. Armar la estructura del archivo XML
const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(route => {
    return `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

// 5. Guardarlo mágicamente en la carpeta public/
const outputPath = path.resolve('public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapXML);

console.log(`✅ ¡Sitemap generado automáticamente con ${allRoutes.length} URLs!`);