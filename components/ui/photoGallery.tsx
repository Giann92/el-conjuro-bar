import React from 'react';

// Definir el tipo para require.context
declare var require: {
  context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// Obtener todas las imágenes de la carpeta 'images'
const importAll = (r: any) => {
  return r.keys().map((filename: string) => ({
    type: 'image',
    src: r(filename).default,
    filename: filename.replace('./', '')
  }));
};

const media = importAll(require.context('../../public/images/', false, /\.(png|jpe?g|svg)$/));

const ImageGallery: React.FC = () => {
  // console.log('Media:', media);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2 md:gap-4 lg:gap-1">
      {media.map((item: { type: string, src: string, filename: string }, index: number) => (
        <div key={index} className="relative aspect-w-1 aspect-h-1">
          <img src={`/images/${item.filename}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;






