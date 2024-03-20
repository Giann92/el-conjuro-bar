import React from 'react';
import Container from './container';
import Contacto from '../contacto';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <Container>
        <div className="flex justify-between mb-4">
          {/* Contenido de Contacto */}
          <div>
            <h2>CONTACTO:</h2>
            <div>
              <Contacto />
            </div>
          </div>
          {/* Contenido de Horario */}
          <div>
            <h2>HORARIO:</h2>
            <p>Lunes a sábado de 9:00 am a 4:00 am </p>
            <p>Domingos de  18:00 pm a 4:00 am </p>
          </div>
             {/* Contenido de Medio de pago */}
          <div className="flex flex-col items-center">
            <h2 className="mb-2">MEDIO DE PAGO:</h2>
            <div className="mb-2">
              <img src="/img/mpvm.png" alt="Mercado Pago" className="w-32 h-auto mr-4" />
            </div>
            <div className="mb-2">
              <img src="/img/transferencia_bancaria.png" alt="Transferencia bancaria" className="w-24 h-auto mr-4" />
            </div>
            <div>
              <img src="/img/efectivo.png" alt="Efectivo" className="w-24 h-auto mr-4" />
            </div>
          </div>
        </div>
        {/* Texto de derechos de autor */}
        <p className="mb-4">Derechos de autor © 2024 El Conjuro Bar. Todos los derechos reservados.</p>
      </Container>
    </footer>

  );
};

export default Footer;

