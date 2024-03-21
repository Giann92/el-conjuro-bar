import Container from "./shared/container";
import Title from "./ui/title";

const Nosotros = () => {
    return (
        <section id="nosotros" className="min-h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 text-white">
            <Container>
                <Title title="Nosotros" className=" text-white mb-4" />
                <p className="text-lg leading-relaxed font-medium">

                    ¡Bienvenidos a nuestro Resto Bar, donde los sabores se mezclan con la diversión y los recuerdos se crean para durar toda la vida! Aquí,
                    cada plato está impregnado de pasión y cada bebida está hecha para deleitar tus sentidos.
                    Pero nuestra experiencia va más allá de la comida y la bebida; también ofrecemos entretenimiento emocionante con nuestros inolvidables shows de karaoke.
                    En nuestro escenario, los talentos ocultos brillan y las risas son contagiosas. Además, el ambiente acogedor y familiar hace que cada visita se sienta como en casa.
                    ¡Únete a nosotros para celebrar la vida, compartir momentos especiales y fortalecer lazos de amistad y familia!
                    ¡Gracias por ser parte de nuestra comunidad, donde la comida es deliciosa, la diversión es contagiosa y el amor es infinito!
                    ¡Salud y felicidad para todos! 🎉🍹🎤
                </p>
            </Container>
        </section>
    );
}

export default Nosotros;

