import Container from "./shared/container";
import Title from "./ui/title";


const Carta = ()=>{
    return(
       <section id="menu">
        <Container>
        <Title title="Menú" className=" text-white"/>
        <img src="img/menu-bebidas-comida-restaurante.avif" alt="carta"/>
        </Container>
       </section>
    );

}

export default Carta;