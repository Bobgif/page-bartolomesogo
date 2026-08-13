import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const postsDir = path.resolve('./src/content/blog');
const outputDir = path.resolve('./src/data');
const outputFile = path.join(outputDir, 'waypoints.json');
const categoriesFile = path.join(outputDir, 'categories.json'); // NUEVO: Archivo de categorías

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));

const waypoints = files.map(file => {
  const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const { attributes, body } = fm(content);
  
  // EL ROBOT CALCULA EL TIEMPO DE LECTURA (asumiendo 200 palabras por minuto)
  const words = body.trim().split(/\s+/).length;
  const calculatedReadTime = Math.ceil(words / 200) + ' min de lectura';

  return {
    slug: attributes.slug || file.replace('.md', ''),
    title: attributes.title || 'Sin título',
    category: attributes.category || 'General',
    date: attributes.date || 'Fecha por definir', 
    readTime: attributes.readTime || calculatedReadTime, 
    excerpt: attributes.excerpt || attributes.description || '', 
    lat: attributes.coordinates ? attributes.coordinates[0] : null, 
    lng: attributes.coordinates ? attributes.coordinates[1] : null,
    imageUrl: attributes.imgthumbnails || attributes.imageUrl || null
  };
}).filter(point => point !== null);

// 1. Guardamos los waypoints como siempre
fs.writeFileSync(outputFile, JSON.stringify(waypoints, null, 2));

// 2. NUEVO: Extraemos categorías, eliminamos duplicados con Set y agregamos "Todas"
const categoriasUnicas = ["Todas", ...Array.from(new Set(waypoints.map(p => p.category)))];
fs.writeFileSync(categoriesFile, JSON.stringify(categoriasUnicas, null, 2));

console.log(`🧭 ¡Intérprete ejecutado! ${waypoints.length} waypoints y ${categoriasUnicas.length - 1} categorías indexadas.`);