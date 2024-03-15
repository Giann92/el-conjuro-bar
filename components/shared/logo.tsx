import React from "react";

const Logo = () => {
    return (
        <a href="/">
            <img
                src="/img/logo_el_conjuro.webp"
                alt="Logo"
                style={{
                    width: "70px", // ajusta el tamaño según sea necesario
                    height: "70px", // ajusta el tamaño según sea necesario
                    borderRadius: "110%", // hace que la imagen sea redonda
                }}
            />
        </a>
    );
};

export default Logo;

