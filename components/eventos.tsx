import React from "react";
import Container from "./shared/container";
import Title from "./ui/title";
import ImageGallery from "./ui/photoGallery";
import GalleryPage from "@/app/galeria/page";

const Eventos: React.FC = () => {
  return (
    <section id="fotos" className="min-h-screen flex items-center justify-center text-white">
      <Container>
        <Title title="Fotos" className="text-white mb-4" style={{ textShadow: '3px 3px 5px rgba(0, 0, 2.1, 0.9)' }} />
        <GalleryPage />
        {/* <ImageGallery/> */}
      </Container>
    </section>
  );
}

export default Eventos;


