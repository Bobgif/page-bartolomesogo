import React from 'react';
import frontMatter from 'front-matter';
import photosRaw from '../content/photos/photos.md?raw';
// Importamos tu nuevo y limpio componente
import { PhotoSlider } from '../components/PhotoSlider';

interface Photo {
  url: string;
  alt: string;
}

interface PhotosData {
  active: boolean;
  title: string;
  subtitle: string;
  photos: Photo[];
}

export const Photos: React.FC = () => {
  const { attributes } = frontMatter<PhotosData>(photosRaw);
  const photosList = attributes.photos || [];

  if (!attributes.active) return null;

  return (
    <div className="animate-fade-in pb-16">
      
  

      {/* AQUÍ ESTÁ LA MAGIA: Llamamos al Slider y le pasamos las fotos */}
      <div className="px-4 md:px-8">
        <PhotoSlider photos={photosList} />
      </div>

    </div>
  );
};