'use client'
import React, { useState, useEffect } from "react";
import Container from "./container";
import Logo from "./logo";
import Menubar from "../nav/menu";
import { TiThMenu } from "react-icons/ti";
import MenuMobile from "../nav/menu-mobile";

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
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <Container className="flex items-center justify-between">
          <section>
            <Logo />
          </section>
          <section className="hidden lg:block">
            <Menubar />
          </section>
          <section className="lg:hidden">
            <button type="button" onClick={handleMenuToggle}>
              <TiThMenu size={24} />
            </button>
          </section>
        </Container>
      </header>
      {showMenu && <MenuMobile isOpen={showMenu} onClose={handleCloseMenu} />}
    </>
  );
};

export default Header;
