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
    default: r(filename).default,
    filename: filename.replace('./', '') 
  }));
};
const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

const ImageGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image: { default: string, filename: string }, index: number) => (
         <img key={index} src={`images/${image.filename}`} alt={`Image ${index + 1}`} className="w-full h-auto" /> 
      ))}
    </div>
  );
};

export default ImageGallery;