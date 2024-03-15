import React from 'react';
import Container from './container';
import Contacto from '../contacto';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <Container>
        {/* Contacto */}
        <div className="mb-4">
          <Contacto />
          <h2>HORARIO:</h2>
          <p>Lunes a sabado de 9:00 am a 4:00 am </p>
          <p>Domingos de  18:00 pm a 4:00 am </p>
        </div>
      
        {/* Texto de derechos de autor */}
        <p className="mb-4">Derechos de autor © 2024 El Conjuro Bar. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;

