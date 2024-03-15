'use client'
import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import Container from './shared/container';

const Contacto: React.FC = () => {
    const phoneNumber = '+5491124537882'; // Número de teléfono de WhatsApp
    const address = 'Bartolome Mitre 838, CABA, Argentina'; // Dirección

    return (
        <>
            <Container>
                <section id="contactanos">
                    <div className="flex flex-col items-start">
                        {/* Número de WhatsApp */}
                        <div className="flex items-center mb-2">
                            <FaWhatsapp className="mr-2" />
                            <span>{phoneNumber}</span>
                        </div>

                        {/* Dirección */}
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="text-gray-600 mr-2" />
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">{address}</a>
                        </div>


                        {/* Icono de Instagram con enlace */}
                        <div className="flex items-center">
                            <FaInstagram className="text-gray-600 mr-2" />
                            <a href="https://www.instagram.com/elconjuro_pizzabar" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Contacto;

