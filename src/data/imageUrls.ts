// Definimos la interfaz para que TypeScript valide ambos campos
/*<img 
          src={IMAGES.blogPortadas.expedicionSira.url} 
          alt={IMAGES.blogPortadas.expedicionSira.alt} 
        />
  md 
 ![IMAGES.blogPortadas.expedicionSira.alt](IMAGES.blogPortadas.expedicionSira.url)       
*/
export interface MediaItem {
  url: string;
  alt: string;
}

export interface ImageCollection {
  
  mapThumbnails: {
    [key: string]: MediaItem;
  };
  blogMd: {
    [key: string]: MediaItem;
  };
  sliderHome: {
    [key: string]: MediaItem;
  };
  about: {
    [key: string]: MediaItem;
  };
  allies: {
    [key: string]: MediaItem;
  };
}

export const IMAGES: ImageCollection = {
  /* Aliados Estratégicos e Instituciones */
  allies: {
    aieco: {
      url: "https://pub-21f4cdb8c7c84cca84d4747d00efce83.r2.dev/aliados/309181158_457451306418703_1852824832755569514_n.jpg",
      alt: "Logo del AIECO Tacna"
    },
    assove: {
      url: "https://pub-21f4cdb8c7c84cca84d4747d00efce83.r2.dev/aliados/330843932_2510478759092348_7262364954728823285_n.jpg",
      alt: "Logo oficial de la Asociación Sira"
    }
  },
/* fotos de acerca de mi */  
  about: {
    foto_perfil_barto: {
      url: "https://pub-21f4cdb8c7c84cca84d4747d00efce83.r2.dev/about/about-bartolome1.webp", // Tu foto vertical 800x1000
      alt: "Bartolomé Sogo limpiando su teleobjetivo en su studio de fotografía en Pucallpa, Ucayali"
    }
  },
/* thumbnail */
  mapThumbnails: {
    siraAve01: {
      url: "https://tu-bucket.r2.cloudflarestorage.com/assets/thumbnails/map-sira-ave-01.webp",
      alt: "Ave registrada durante la expedición a la cordillera del Sira"
    },
  },
  blogMd: {
    objetoPipa: {
      url: "https://pub-21f4cdb8c7c84cca84d4747d00efce83.r2.dev/md/objetos/md-foto-shipibo-pipa.webp",
      alt: "Pipa ceremonial shipibo de una sesion de ayahuasca, tomada durante la expedición a la cordillera del Sira"
    },
  },
  sliderHome: {
    paisajeAmazonico: {
      url: "https://tu-bucket.r2.cloudflarestorage.com/assets/slider/slider-paisaje-amazonico-01.webp",
      alt: "Panorámica de la biodiversidad amazónica al amanecer"
    }
  }
};