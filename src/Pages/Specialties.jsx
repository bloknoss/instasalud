
import "./Styles/Specialties.css";
import "./Styles/SResponsive.css";

import Container from "react-bootstrap/Container";
import CartaEspecialidad from "../Components/SpecialtyCard";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function Especialidades() {
    const Especialidades = [
        {
            especialidad: "Traumatología",
            descripcion:
                "La Traumatología es una rama de la Medicina que se dedica al estudio y tratamiento de las lesiones traumáticas que afectan al sistema músculo-esquelético, que incluye los huesos, las articulaciones, los ligamentos, los tendones y los músculos.",
            imagen: "https://cdn-icons-png.flaticon.com/512/88/88112.png",
            url: "/especialidades/traumatologia",
        },
        {
            especialidad: "Cardiología",
            descripcion:
                "La cardiología es la rama de la medicina que se encarga del estudio, prevención, diagnóstico y tratamiento de las enfermedades del corazón y del sistema circulatorio. Es médica, pero no quirúrgica; los especialistas en el abordaje quirúrgico del corazón son",
            imagen: "https://cdn-icons-png.flaticon.com/512/1068/1068840.png",
            url: "/especialidades/cardiologia",
        },
        {
            especialidad: "Psicología",
            descripcion:
                "La Psicología es la ciencia que estudia el comportamiento y los procesos mentales. Los psicólogos aplican sus conocimientos para ayudar a las personas a comprender, explicar y cambiar su comportamiento.",
            imagen: "https://svgsilh.com/svg_v2/2146164.svg",
            url: "/especialidades/psicologia",
        },
        {
            especialidad: "Psiquiatría",
            descripcion:
                "La Psiquiatría es la rama de la Medicina que se especializa en el estudio y tratamiento de los trastornos mentales, emocionales y del comportamiento.",
            imagen: "https://cdn-icons-png.flaticon.com/512/946/946323.png",
            url: "/especialidades/psiquiatria",
        },
        {
            especialidad: "Pediatría",
            descripcion:
                "La Pediatría se centra en la salud y el bienestar de los niños, desde el nacimiento hasta la adolescencia. Los pediatras tratan una amplia variedad de afecciones pediátricas.",
            imagen: "https://cdn-icons-png.flaticon.com/512/6577/6577707.png",
            url: "/especialidades/pediatria",
        },
        {
            especialidad: "Ginecología",
            descripcion:
                "La Ginecología es la rama de la Medicina que se ocupa de la salud del sistema reproductivo femenino, que incluye el útero, la vagina y los ovarios.",
            imagen: "https://cdn-icons-png.flaticon.com/512/2885/2885178.png",
            url: "/especialidades/ginecologia",
        },
    ];

    return (
        <>
            <Container className="mt-5">
                <h3>Especialidades</h3>
                <p className="font-weight-lighter">Aquí podrás observar las distintas especialidades que disponemos. <br /> Garantizamos un servicio excelente en cualquiera de las ramas de la medicina que usted desee.</p>
                <Container className="specialists-container mt-5 d-flex gap-4 flex-wrap">
                    {Especialidades.map((especialidad, i) => {
                        return (
                            <CartaEspecialidad
                                key={i}
                                nombre={especialidad["especialidad"]}
                                imagen={especialidad["imagen"]}
                                descripcion={especialidad["descripcion"]}
                                url={especialidad["url"]}
                            ></CartaEspecialidad>
                        );
                    })}
                </Container>

                <p className="mt-5">Si no encuentras la rama que buscas, puedes hacer click <a href="">aquí</a> para solicitar una consulta personalizada.</p>
            </Container>
        </>
    );
}

export default Especialidades;