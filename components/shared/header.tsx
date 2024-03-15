'use client'
import React, { useState, useEffect } from "react";
import Container from "./container";
import Menubar from "../nav/menu";
import { TiThMenu } from "react-icons/ti";
import MenuMobile from "../nav/menu-mobile";
import Logo from "./logo";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="bg-black p-4 flex justify-between items-center border border-black rounded-lg shadow-lg fixed top-0 left-0 right-0 z-10">
        <Container className="flex items-center justify-between">
          <section>
            <Logo/>
          </section>
          <section className="hidden lg:block">
            <Menubar onClose={handleCloseMenu} />
          </section>
          <section className="lg:hidden">
            <button type="button" onClick={handleMenuToggle}>
              <TiThMenu color='white'size={24} />
            </button>
          </section>
        </Container>
      </header>
      {showMenu && <MenuMobile isOpen={showMenu} onClose={handleCloseMenu} />}
    </>
  );
};

export default Header;


