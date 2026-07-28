// src/types/index.ts

export interface Waypoint {
  id: string;
  title: string;
  description: string;
  coordinates: [number, number]; // Una tupla estricta: [Latitud, Longitud]
  category: string; // Ej: "aves", "herpetos", "expedicion"
  slug: string; // MUY IMPORTANTE: Es el nombre exacto de tu archivo .md (sin el .md)
}