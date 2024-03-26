import { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
  // Opciones de configuración de Webpack
  module: {
    rules: [
      // Otras reglas de carga...
      {
        test: /\.(mp4|webm|ogg|mov)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/'
            }
          }
        ]
      }
    ]
  }
};

export default config;


