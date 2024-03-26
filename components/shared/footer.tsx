import React from 'react';
import Container from './container';
import Contacto from '../contacto';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4">
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:items-center md:mb-4">
          {/* Contenido de Contacto */}
          <div className="mb-4 md:mb-0">
            <h2 className="mb-2">CONTACTO:</h2>
            <div>
              <Contacto />
            </div>
          </div>
          {/* Contenido de Horario */}
          <div className="mb-4 md:mb-0">
            <h2 className="mb-2">HORARIO:</h2>
            <p>Lunes a sábado de 9:00 am a 4:00 am </p>
            <p>Domingos de 18:00 pm a 4:00 am </p>
          </div>
        </div>
        {/* Contenido de Medio de pago */}
        <div className="mb-4 md:mb-0">
          <h2 className="mb-3">MEDIO DE PAGO: </h2>
          <div className="flex justify-center">
            <div className="mb-3 mr-5">
              <img src="/img/mpvm.png" alt="Mercado Pago" className="w-20 md:w-24 h-auto" />
            </div>
            <div className="mb-2 mr-4">
              <img src="/img/transferencia_bancaria.png" alt="Transferencia bancaria" className="w-14 md:w-18 h-auto" />
            </div>
            <div className="mb-2">
              <img src="/img/efectivo.png" alt="Efectivo" className="w-14 md:w-18 h-auto" />
            </div>
          </div>
        </div>
        {/* Texto de derechos de autor */}
        <p> © 2024 El Conjuro Bar. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;


