'use client'
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <img src='/img/fondo2-elconjuro.jpg' className="hero-image" />
      <div className="hero-content" style={{ boxShadow: '0 0 0 4px #7FDDCF, 0 0 0 8px #7FDDCF' }}>
        <h1 className="hero-title text-5xl font-bold">Bienvenidos <br /> a</h1>
        <h1 className="hero-title font-lilita text-7xl font-bold">El Conjuro Bar</h1>
        <p className="hero-description text-3xl font-bold">¡Disfruta de nuestras deliciosas comidas y bebidas!</p>
      </div>

      <style jsx>{`
          .hero {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
          }

          .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: fixed; /* Cambiado de absolute a fixed */
            top: 0;
            left: 0;
            z-index: -1;
          }

          .hero-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 1;
          }

          .hero-title {
            font-size: 3em;
            margin-bottom: 1rem;
          }

          .hero-description {
            font-size: 1.5rem;
          }
        `}</style>
    </div>
  );
};

export default Hero;
