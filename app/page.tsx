import Carta from '@/components/carta';
import Eventos from '@/components/eventos';
import GaleryInstagram from '@/components/galeryInstagram';
import Nosotros from '@/components/nosotros';
import Head from 'next/head';
import Instagram from './blog/instagram';

export const metadata = {
  title: 'El conjuro resto-bar',
  description: 'El conjuro bar',
}

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          /* Media Queries para dispositivos móviles */
          @media screen and (max-width: 768px) {
            /* Estilos específicos para dispositivos móviles */
          }
        `}</style>
      </Head>
      <main>
        <Nosotros />
        <Eventos />
        <Carta/>
        <Instagram/>
      </main>
    </div>
  );
}


