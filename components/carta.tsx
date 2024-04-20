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
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-2 gap-2 md:gap-4 lg:gap-1">
                    {media.map((item: { type: string, src: string, filename: string }, index: number) => (
                        <div key={index} className="relative aspect-w-1 aspect-h-1">
                            <img src={`/carta/${item.filename}`} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
                <div className='bg-black  mt-2 mb-2'>
                    <div className="inline-block">
                        <p className="dark-green text-1.5xl mt-4 font-bold p-4 rounded-lg" style={{ textShadow: '3px 3px 5px rgba(0, 0, 2, 1.9)' }}>
                            Contamos con variedades de Gin tonic: <br />
                            Gin tonic de frutos rojos <br />
                            Gin tonic con menta y pepino <br />
                            Gin tonic con pomelo y menta<br />
                        </p>
                    </div><br />
                    <div className="inline-block">
                        <p className="dark-green text-1.5xl mt-4 mb-2 font-bold p-4 rounded-lg" style={{ textShadow: '3px 3px 5px rgba(0, 0, 2, 1.9)' }}>
                            PROMO: 2x1 en tragos (fernet, gintonic tradicional, gancia, Destornillador y campari)
                        </p>
                    </div>
                </div>
                <div className="inline-block mb-5 bg-gray-800 bg-opacity-50">
                    <div style={{ border: '3px solid black', padding: '1px', borderRadius: '10px' }}>
                        <p className="text-red-600 text-2xl font-bold p-4 rounded-lg" style={{ textShadow: '3px 3px 5px rgba(0, 0, 2, 1.9)' }}>
                            Se realiza delivery por la zona, solo se recibe pedidos por mensaje a través de WhatsApp,
                            a demás pueden consultar por nuestro menu del dia
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default Carta;


