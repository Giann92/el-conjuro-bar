// pages/api/getImages.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imageFolder = path.join(process.cwd(), '../public/images'); // Ruta a la carpeta de imágenes

  // Verificar si la carpeta de imágenes existe
  if (!fs.existsSync(imageFolder)) {
    res.status(404).json({ error: 'La carpeta de imágenes no existe' });
    return;
  }

  // Leer los nombres de archivo en la carpeta de imágenes
  fs.readdir(imageFolder, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer la carpeta de imágenes' });
      return;
    }

    // Filtrar solo los archivos con extensiones de imagen
    const imageFiles = files.filter((fileName) => /\.(jpg|jpeg|png|gif|mp4)$/i.test(fileName));

    // Construir la ruta completa de cada archivo de imagen
    const imagePaths = imageFiles.map((fileName) => path.join('/images', fileName));

    // Enviar el array de rutas de imágenes como respuesta en formato JSON
    res.status(200).json(imagePaths);
  });
}

