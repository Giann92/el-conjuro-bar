import React from 'react';
import Container from "./shared/container";
import Title from "./ui/title";

// Definir el tipo para require.context
declare var require: {
    context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): {
        keys(): string[];
        <T>(id: string): T;
    };
};

// Obtener todas las imágenes de la carpeta 'carta'
const importAll = (r: any) => {
    return r.keys().map((filename: string) => ({
        type: 'image',
        src: r(filename).default,
        filename: filename.replace('./', '')
    }));
};

const media = importAll(require.context('../public/carta/', false, /\.(png|jpe?g|svg)$/));

const Carta = () => {

    return (
        <section id="menu" className="min-h-screen flex items-center justify-center text-white">
            <Container>
                <Title title="Carta" className="text-white mb-4" style={{ textShadow: '3px 3px 5px rgba(0, 0, 2, 1.9)' }} />
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-2 md:gap-4 lg:gap-1">
                    {media.map((item: { type: string, src: string, filename: string }, index: number) => (
                        <div key={index} className="relative aspect-w-1 aspect-h-1">
                            <img src={`/carta/${item.filename}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Carta;


