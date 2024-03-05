import "photoswipe/dist/photoswipe.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import EspecialistaImage from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-05.svg";
import EspecialidadesImage from "../assets/Drawkit-Vector-Illustration-Medical/SVG/Drawkit-Vector-Illustration-Medical-04.svg";
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
                <p>
                    ¡Bienvenido a nuestra plataforma de consultas médicas online, donde tu salud es nuestra prioridad! En nuestra página,
                    ofrecemos un acceso rápido y eficiente a atención médica de calidad con médicos licenciados. <br /><br /> Valoramos tu tiempo y
                    entendemos la importancia de una respuesta ágil, por lo que hemos diseñado esta plataforma para proporcionarte consultas
                    médicas de manera rápida y conveniente. <br /><br /> Nuestro equipo de médicos altamente calificados está aquí para abordar tus
                    inquietudes de manera profesional y compasiva. Ya sea que necesites asesoramiento sobre síntomas, recetas médicas o
                    simplemente desees una segunda opinión, estamos comprometidos en brindarte el servicio que mereces. Con la comodidad de
                    acceder a nuestros servicios desde la comodidad de tu hogar, te ofrecemos una experiencia de consulta médica online que
                    se adapta a tu estilo de vida ocupado. Sabemos que tu salud no espera, y nuestro equipo está listo para proporcionarte
                    respuestas rápidas y soluciones efectivas. Confía en nosotros para tu bienestar. ¡Estamos aquí para cuidarte!
                </p>
                <h2 className="mt-5">Información sobre nuestros especialistas</h2>
                <Container className="disp">
                    <p>
                        En nuestra plataforma, nos enorgullece contar con un equipo excepcional de especialistas comprometidos con tu
                        bienestar integral. Nuestros médicos licenciados son expertos en diversas disciplinas, desde Psicología y
                        Psiquiatría hasta Pediatría, Traumatología y más. Cada uno de nuestros especialistas está cuidadosamente
                        seleccionado por su experiencia y dedicación para ofrecer atención médica de calidad. Nuestros psicólogos y
                        psiquiatras están aquí para brindarte apoyo emocional, mientras que nuestros pediatras se centran en la salud de los
                        más pequeños, garantizando un crecimiento saludable. <br /><br /> En el ámbito de la Traumatología, nuestros especialistas
                        trabajan para restaurar la movilidad y mejorar la calidad de vida de aquellos que han sufrido lesiones
                        musculoesqueléticas. Además, nuestros expertos en Dermatología, Endocrinología y Cardiología ofrecen soluciones
                        personalizadas para abordar diversas necesidades de salud. <br /><br /> En cada consulta, puedes confiar en la experiencia y
                        dedicación de nuestro equipo para recibir la atención médica que mereces. <br /><br /> Nuestros especialistas están comprometidos
                        en proporcionar respuestas precisas, tratamientos efectivos y un enfoque compasivo para tu salud. Estamos aquí para
                        cuidarte, guiarte y velar por tu bienestar en cada paso del camino.
                    </p>

                    <img className="img-disp" src={EspecialistaImage} alt="" />
                </Container>
                <h2 className="mt-5">¿Cuales son nuestras especialidades?</h2>
                <Container className="disp">
                    <img className="img-disp" src={EspecialidadesImage} alt="" />
                    <p>
                        Disponemos de un equipo diversificado de especialistas comprometidos con tu salud integral. En nuestra clínica,
                        contamos con expertos en Psicología, quienes brindan apoyo emocional y estrategias para mejorar tu bienestar mental.
                        <br />
                        <br />
                        Además, nuestra área de Psiquiatría está dedicada al diagnóstico y tratamiento de trastornos mentales, ofreciendo
                        soluciones efectivas para tu salud mental. Para los más pequeños, contamos con especialistas en Pediatría (z),
                        quienes se centran en el cuidado integral de la salud de tus hijos, desde exámenes de rutina hasta el manejo de
                        enfermedades infantiles. <br />
                        <br /> En cada etapa de la vida, nuestra clínica se compromete a proporcionar atención de calidad, incluyendo
                        especialidades como Traumatología y Ginecología/Obstetricia, abordando desde lesiones musculoesqueléticas hasta la
                        salud reproductiva con un enfoque personalizado para cada paciente. Tu bienestar es nuestra prioridad.
                    </p>
                </Container>
            </Container>
        </>
    );
}

export default Inicio;
