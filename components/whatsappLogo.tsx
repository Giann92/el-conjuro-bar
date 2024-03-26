    'use client'

    import React from "react";
    import WhatsappLink from "./whatsappLink";
    import Container from "./shared/container";
    
    const WhatsappLogo: React.FC = () => {
        const phoneNumber = '+5491124537882';
        
        return (
            <>
                {/* El botón de WhatsApp fijo en la esquina inferior derecha */}
                <Container className="fixed bottom-4 right-4 z-50">
                    <WhatsappLink
                        phoneNumber={phoneNumber}
                        className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-green-600"
                        style={{ width: '170px', height: '170px' }} // Ajusta el tamaño del contenedor
                    />
                </Container>
            </>
        );
    };
    
    export default WhatsappLogo;
    
