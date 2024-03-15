import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

interface WhatsappLinkProps {
  phoneNumber: string;
  className?: string;
  style?: React.CSSProperties; // Proporciona la interfaz para el prop style
}

const WhatsappLink: React.FC<WhatsappLinkProps> = ({ phoneNumber, className, style }) =>  {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href={{
          pathname: `https://wa.me/${phoneNumber}`
        }}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-md ${className}`}
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default WhatsappLink;


