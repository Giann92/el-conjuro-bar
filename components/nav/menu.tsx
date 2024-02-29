import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Menubar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex flex-col lg:flex-row justify-between items-center">
        <li>
          <Link href="#" className="text-white font-bold text-xl mr-4 hover:text-lg hover:underline">Inicio</Link>
        </li>
        <li>
          <Link href="#nosotros" className="text-white hover:text-lg hover:underline mr-4">Nosotros</Link>
        </li>
        <li>
          <Link href="/menu" className="text-white hover:text-lg hover:underline mr-4">Menú</Link>
        </li>
        <li>
          <Link href="/eventos" className="text-white hover:text-lg hover:underline mr-4">Eventos</Link>
        </li>
        <li>
          <Link href="/contactanos" className="text-white hover:text-lg hover:underline mr-4">Contáctanos</Link>
        </li>
        <li>
          <a href="https://wa.me/telefono" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lg hover:underline">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menubar;



