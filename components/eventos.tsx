'use client'


import React, { useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client'; // Importar gql y useQuery desde @apollo/client
import Container from "./shared/container";
import Title from "./ui/title";
import ImageGallery from "./ui/photoGallery";




const Eventos: React.FC = () => {


  return (
    <section id="fotos" className="min-h-screen flex items-center justify-center  text-white">
      <Container>
      <Title title="Fotos" className="text-white mb-4" />

        <ImageGallery/>
      </Container>
    </section>
  );
}

export default Eventos;

