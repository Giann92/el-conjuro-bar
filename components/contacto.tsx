'use client'
import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaTiktok } from 'react-icons/fa';
import Container from './shared/container';
import Link from 'next/link';

const Contacto: React.FC = () => {
    const phoneNumber = '+5491153279907'; // Número de teléfono de WhatsApp
    const address = 'El Conjuro Pizza Bar'; // Dirección

    return (
        <>
            <Container>
                <section id="contactanos">
                    <div className="flex flex-col items-start">
                        {/* Número de WhatsApp */}
                        <div className="flex items-center mb-2">
                            <FaWhatsapp className="mr-2" />
                            <Link
                                href={{
                                    pathname: `https://wa.me/${phoneNumber}`
                                }}
                            >
                                {phoneNumber}
                            </Link>
                        </div>

                        {/* Dirección */}
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="text-gray-600 mr-2" />
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">Bartolome Mitre 838, CABA, Argentina</a>
                        </div>


                        {/* Icono de Instagram con enlace */}
                        <div className="flex items-center">
                            <FaInstagram className="text-gray-600 mr-2" />
                            <a href="https://www.instagram.com/elconjuro_pizzabar" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>

                        {/* Icono de Tiktok con enlace */}
                        <div className="flex items-center mt-2">
                            <FaTiktok className="text-gray-600 mr-2" />
                            <a href="https://www.tiktok.com/@elconjuro_pizzaba?_t=8lOoOHnaJGA&_r=1" target="_blank" rel="noopener noreferrer">TikTok</a>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Contacto;

