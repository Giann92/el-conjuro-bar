import Carta from '@/components/carta';
import Eventos from '@/components/eventos';
import GaleryInstagram from '@/components/galeryInstagram';
import Nosotros from '@/components/nosotros';
import Head from 'next/head';

export const metadata = {
  title: 'El conjuro resto-bar',
  description: 'El conjuro bar',
}

export default function Home() {
  return (
    <div>
    
      <main>
        <Nosotros />
        <Eventos />
        <Carta />
        <GaleryInstagram/>
      </main>
    </div>
  );
}
