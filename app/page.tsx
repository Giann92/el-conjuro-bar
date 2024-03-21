'use client'
import React, { useEffect, useState } from 'react';
import Carta from '@/components/carta';
import Eventos from '@/components/eventos';
import GaleryInstagram from '@/components/galeryInstagram';
import Nosotros from '@/components/nosotros';
import Head from 'next/head';
import Instagram from './blog/instagram';

// 'use string'
// export const metadata = {
//   title: 'El conjuro resto-bar',
//   description: 'El conjuro bar',
// }

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Al montar el componente, guardamos la posición de desplazamiento actual
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Al cambiar la orientación del dispositivo, restauramos la posición de desplazamiento
    const handleOrientationChange = () => {
      window.scrollTo(0, scrollPosition);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [scrollPosition]);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html {
            scroll-behavior: smooth;
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