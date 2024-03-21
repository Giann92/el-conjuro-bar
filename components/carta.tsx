import Container from "./shared/container";
import Title from "./ui/title";


const Carta = ()=>{
    return(
       <section id="menu" className="min-h-screen flex items-center justify-center text-white">
        <Container>
        <Title title="Carta" className=" text-white mb-4"/>
        <img src="img/menu-bebidas-comida-restaurante.avif" alt="carta"/>
        </Container>
       </section>
    );

}

export default Carta;