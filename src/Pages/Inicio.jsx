import "photoswipe/dist/photoswipe.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import EspecialistaImage from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-05.svg";
import EspecialidadesImage from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-04.svg";
import CardioImagen from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-06.svg";
import "../player";
import MenteImagen from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-03.svg";
import ConsultaImagen from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-20.svg";
import Audio from "../assets/CarabanteProffessional.mp3";
import { Link } from "react-router-dom";
import { useState } from "react";

function Inicio() {
    const [AudioPlay, setAudioPlay] = useState(false);

    const playAudio = () => {
        const audio = document.querySelector("audio");
        const image = document.querySelector(".player-image");
        if (AudioPlay) {
            audio.pause();
            image.style.animationPlayState = "paused";
        } else {
            audio.play();

            image.style.animationPlayState = "running";
        }
        setAudioPlay(!AudioPlay);
    };
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
                <Container className="disp">
                    <div className="textos">
                        <p>
                            Contamos con un <b>equipo diversificado de especialistas</b> dedicados a tu <b>salud integral</b>. Nuestros
                            expertos en <b>Psicología</b> te ofrecen apoyo emocional y estrategias para mejorar tu bienestar mental.
                        </p>

                        <p>
                            La <b>Psiquiatría</b> se enfoca en el diagnóstico y tratamiento de trastornos mentales, asegurando soluciones
                            efectivas. En <b>Pediatría</b>, nos dedicamos al cuidado integral de los más pequeños, desde exámenes de rutina
                            hasta el manejo de enfermedades infantiles.
                        </p>

                        <p>
                            Nuestra clínica ofrece atención de calidad en todas las etapas de la vida, con especialidades como{" "}
                            <b>Traumatología</b> y <b>Ginecología/Obstetricia</b>, abordando desde lesiones musculoesqueléticas hasta la
                            salud reproductiva. <b>Tu bienestar es nuestra prioridad</b>.
                        </p>
                    </div>
                </Container>
                <h2 className="mt-5">Información sobre nuestros especialistas</h2>
                <Container className="disp">
                    <div className="textos" style={{ display: "flex", flexDirection: "column" }}>
                        <p>
                            En nuestra plataforma, nos enorgullece contar con un <b>equipo excepcional de especialistas</b> en áreas como{" "}
                            <b>Psicología, Psiquiatría, Pediatría y Traumatología</b>, entre otras. Cada especialista está seleccionado por
                            su <b>experiencia y dedicación</b> para ofrecer <b>atención médica de calidad</b>.
                        </p>

                        <p>
                            Nuestros profesionales están aquí para brindarte <b>apoyo emocional</b>, cuidar la{" "}
                            <b>salud de los más pequeños</b>, y mejorar tu <b>calidad de vida</b> ante lesiones musculoesqueléticas. Además,
                            ofrecemos <b>soluciones personalizadas</b> en Dermatología, Endocrinología y Cardiología.
                        </p>

                        <p>
                            Confía en la <b>experiencia y dedicación</b> de nuestro equipo para recibir la atención que mereces, con un
                            enfoque en <b>respuestas precisas, tratamientos efectivos</b> y un <b>trato compasivo</b>.
                        </p>
                    </div>

                    <img className="img-disp" src={EspecialistaImage} alt="" />
                </Container>

                <Link style={{ color: "black", textDecoration: "none" }} to="/instasalud/resenas">
                    <button style={{ borderRadius: "10px", width: "70vw", letterSpacing: "2px" }} className="btn-hover">
                        VER RESEÑAS
                    </button>
                </Link>
                <h2 className="mt-5">¿Cuales son nuestras especialidades?</h2>
                <Container className="disp">
                    <img className="img-disp" src={EspecialidadesImage} alt="" />
                    <div className="textos">
                        <p>
                            Nuestra clínica ofrece un <b>equipo diversificado de especialistas</b> comprometidos con tu{" "}
                            <b>salud integral</b>. En <b>Psicología</b>, brindamos apoyo emocional y estrategias para el bienestar mental.
                        </p>

                        <p>
                            La <b>Psiquiatría</b> se centra en el diagnóstico y tratamiento de trastornos mentales, con soluciones efectivas
                            para tu salud mental. Nuestros <b>pediatras</b> cuidan de la salud integral de los niños, desde exámenes
                            rutinarios hasta el manejo de enfermedades infantiles.
                        </p>

                        <p>
                            Comprometidos con la atención de calidad a lo largo de todas las etapas de la vida, ofrecemos servicios en{" "}
                            <b>Traumatología</b> y <b>Ginecología/Obstetricia</b>, desde lesiones musculoesqueléticas hasta la salud
                            reproductiva. <b>Tu bienestar</b> es nuestra principal prioridad.
                        </p>
                    </div>
                </Container>
                <div id="player" className="player elements">
                    <button onClick={playAudio} id="player-button">
                        <img
                            style={{animationPlayState: "paused"}}
                            className="player-image play"
                            src="https://images.vexels.com/media/users/3/158737/isolated/preview/3353b3a06bc810221952cccbbb189b47-record-rarity-vinyl-illustration.png"
                            alt="Vinyl"
                        />
                    </button>
                    <audio loop className="audio" src={Audio}></audio>
                </div>

                <source src={Audio} />
            </Container>
        </>
    );
}

export default Inicio;
