import { FC } from "react";
import Link from "next/link";

interface MenubarProps {
  onClose: () => void;
}

const Menubar: FC<MenubarProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose(); // Llama a la función onClose cuando se hace clic en un enlace
  };

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row justify-between items-center">
        <li>
          <Link href="#" className="text-white font-bold text-xl mr-4 hover:text-lg hover:underline" onClick={handleLinkClick}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="#nosotros" className="text-white  hover:text-lg hover:underline mr-4" onClick={handleLinkClick}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="#menu" className="text-white  hover:text-lg hover:underline mr-4" onClick={handleLinkClick}>
            Menú
          </Link>
        </li>
        <li>
          <Link href="#fotos" className="text-white  hover:text-lg hover:underline mr-4" onClick={handleLinkClick}>
            Fotos
          </Link>
        </li>
        <li>
          <Link href="#contactanos" className="text-white  hover:text-lg hover:underline mr-4" onClick={handleLinkClick}>
            Contáctanos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menubar;




