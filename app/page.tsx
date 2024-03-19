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
    
      <main>
        <Nosotros />
        <Eventos />
   
      <Instagram/>
      </main>
    </div>
  );
}
