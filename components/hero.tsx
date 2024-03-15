'use client'
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <img src='/img/Monica_Monica_2024-03-03_21_00_35.webp' className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">Bienvenido a El Conjuro Bar</h1>
        <p className="hero-description">¡Disfruta de nuestras deliciosas comidas y bebidas!</p>
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
          font-size: 3rem;
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
