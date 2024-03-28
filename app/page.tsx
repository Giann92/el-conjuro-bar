import Carta from '@/components/carta';
import Eventos from '@/components/eventos';
import Nosotros from '@/components/nosotros';
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
        <Carta/>
      <Instagram/>
      </main>
    </div>
  );
}
