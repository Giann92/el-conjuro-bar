import Container from "./shared/container";
import Title from "./ui/title";

const Carta = () => {
    return (
        <section id="menu" className="min-h-screen flex items-center justify-center text-white">
            <Container>
                <Title title="Carta" className="text-white mb-4" style={{ textShadow: '3px 3px 5px rgba(0, 0, 2, 1.9)' }} />
                <img src="img/menu-bebidas-comida-restaurante.avif" alt="carta" />
            </Container>
        </section>
    );
}

export default Carta;
