'use client'
import React from "react";
import { FaCircle } from "react-icons/fa";

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <img
        src="/img/logo_el_conjuro.webp"
        alt="Logo"
        style={{
          width: "70px", // ajusta el tamaño según sea necesario
          height: "70px", // ajusta el tamaño según sea necesario
          borderRadius: "110%", // hace que la imagen sea redonda
        }}
      />
      {/* Texto "Cargando..." */}
      <p className="text-gray-600 mt-4">Cargando...</p>
      {/* Animación de puntos */}
      <div className="flex mt-2">
        <FaCircle className="text-gray-600 animate-bounce mr-1" />
        <FaCircle className="text-gray-600 animate-bounce mr-1" />
        <FaCircle className="text-gray-600 animate-bounce mr-1" />
      </div>
    </div>
  );
};

export default Loading;

