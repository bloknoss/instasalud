import "photoswipe/dist/photoswipe.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-05.svg";
import CardioImagen from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-06.svg";
import MenteImagen from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-03.svg";
import ConsultaImagen from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-20.svg";

function Inicio() {
    return (
        <>
            <Container className="mt-5">
                <h1>InstaSalud</h1>
                <h1 className="typewriter">Cuidado, Velocidad, Seguridad</h1>

                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img src={MenteImagen} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={CardioImagen} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ConsultaImagen} />
                        </Carousel.Item>
                    </Carousel>
                </Container>

                <h2>Información sobre nuestros especialistas</h2>
                <Container className="disp">
                    <p>
                        Bienvenido a nuestra página de salud, donde el compromiso con tu bienestar es nuestra prioridad principal. En
                        nuestro equipo de especialistas, nos enorgullece contar con profesionales altamente capacitados y apasionados que se
                        dedican a proporcionar la mejor atención para mejorar tu calidad de vida.
                        <br /> Contamos con un selecto grupo de médicos certificados en diversas especialidades, desde medicina general
                        hasta especialidades más específicas como cardiología, dermatología, ginecología, entre otras. Nuestros médicos no
                        solo tienen una amplia experiencia, sino que también se mantienen actualizados con las últimas investigaciones y
                        avances médicos para brindarte el mejor cuidado posible.
                        <br />
                        El bienestar mental es tan importante como el físico. Nuestros psicólogos y terapeutas están comprometidos en
                        brindar apoyo emocional, tratamiento y estrategias para manejar el estrés, la ansiedad y otros desafíos emocionales.
                        Trabajamos para fortalecer tu salud mental y emocional.
                    </p>

                    <img className="img-disp" src={Image} alt="" />
                </Container>
            </Container>
        </>
    );
}

export default Inicio;
