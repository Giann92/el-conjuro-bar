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
          <Link href="#inicio" passHref>
            <div className="text-white font-bold text-xl mr-4 hover:text-lg hover:underline cursor-pointer" onClick={handleLinkClick}>
              Inicio
            </div>
          </Link>
        </li>
        <li>
          <Link href="#nosotros" passHref>
            <div className="text-white  hover:text-lg hover:underline mr-4 cursor-pointer" onClick={handleLinkClick}>
              Nosotros
            </div>
          </Link>
        </li>
        <li>
          <Link href="#menu" passHref>
            <div className="text-white  hover:text-lg hover:underline mr-4 cursor-pointer" onClick={handleLinkClick}>
              Menú
            </div>
          </Link>
        </li>
        <li>
          <Link href="#fotos" passHref>
            <div className="text-white  hover:text-lg hover:underline mr-4 cursor-pointer" onClick={handleLinkClick}>
              Fotos
            </div>
          </Link>
        </li>
        <li>
          <Link href="#contactanos" passHref>
            <div className="text-white  hover:text-lg hover:underline mr-4 cursor-pointer" onClick={handleLinkClick}>
              Contáctanos
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menubar;






