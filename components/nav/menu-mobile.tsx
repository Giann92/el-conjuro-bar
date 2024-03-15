import { cn } from "@/libs/utils";
import Menubar from "./menu";
import { FC, useState } from "react";

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: FC<MenuMobileProps> = ({ isOpen, onClose }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    onClose();
  };

  return (
    <>
      {/* Este div contiene el fondo semi-transparente */}
      <div
        onClick={handleCloseMenu}
        className={cn(
          "fixed left-0 top-0 w-full h-full bg-black/30 z-40",
          !isOpen ? "hidden" : "block"
        )}
      />
      {/* Este div contiene el menú móvil */}
      <div
        className={cn(
          "fixed left-0 right-0 w-full sn:w-[45%] h-auto z-50 bg-black transition-all duration-300 ease-in-out",
          !isOpen ? "top-0 -translate-y-full" : "top-[80px]"
        )}
      >
    
        {/* Agrega el menú aquí */}
        <Menubar onClose={handleCloseMenu} />
      </div>
    </>
  );
};

export default MenuMobile;





