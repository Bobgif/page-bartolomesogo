// src/types/index.ts

export type CategoryType = 'aves' | 'herpetos' | 'expedicion' | 'consultoria';

export interface Waypoint {
  id: string;
  title: string;
  description: string;
  coordinates: [number, number]; // [Latitud, Longitud]
  category: CategoryType;
  slug: string;        // Nombre exacto del .md (ej: "expedicion-sira")
  thumbnail: string;   // Miniatura 400x250px en WebP desde tu CDN de Cloudflare R2
  color: string;       // Color del pin en el mapa (ej: "#FF6B35")
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: CategoryType;
  summary: string;
  thumbnail: string;
  coordinates?: string;
}