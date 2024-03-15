import Container from "./shared/container";
import Title from "./ui/title";

const Nosotros = () => {
    return (
        <section id="nosotros" className="min-h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 text-white">
            <Container>
            <Title title="Nosotros" className=" text-white"/>
                <p className="text-lg leading-relaxed font-medium">
                    Aquí, en nuestro Resto Bar, no solo disfrutamos de deliciosas comidas y bebidas,
                    sino que también compartimos momentos inolvidables y creamos vínculos que perdurarán para siempre.
                    Desde los sabores más auténticos hasta las creaciones más innovadoras, nuestro equipo de cocina trabaja incansablemente para satisfacer los paladares más exigentes. Cada bocado es una experiencia única,
                    preparada con amor y dedicación para deleitar sus sentidos.
                    Pero nuestro Resto Bar no sería lo mismo sin el entretenimiento que ofrece. ¡Y qué mejor manera de divertirse que con un emocionante show de karaoke! Aquí, en nuestro escenario, se desatan talentos ocultos y se crean recuerdos que atesoraremos por siempre. La música nos une, las risas nos contagian y el karaoke nos hace sentir como estrellas.

                    Y ¿cómo no mencionar el ambiente acogedor y familiar que se respira en nuestro Resto Bar? Cada rincón está impregnado de calidez y hospitalidad, gracias al esfuerzo de nuestro equipo y a la presencia de personas maravillosas como ustedes. Aquí, todos son bienvenidos, y cada sonrisa es un tesoro que valoramos profundamente.

                    En resumen, nuestro Resto Bar es mucho más que un lugar para disfrutar de buena comida y entretenimiento. Es un refugio donde nos reunimos para celebrar la vida, compartir momentos especiales y fortalecer los lazos de amistad y familia. Les invito a seguir siendo parte de esta hermosa comunidad que juntos hemos construido.

                    ¡Gracias por formar parte de nuestro Resto Bar, donde la comida es deliciosa, la diversión es contagiosa y el amor es infinito!

                    ¡Salud y felicidad para todos!
                </p>
            </Container>
        </section>
    );
}

export default Nosotros;

