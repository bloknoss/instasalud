import Container from "react-bootstrap/Container";
import CartaEspecialista from "../Components/SpecialistsCard";

function Especialistas() {
    const Especialistas = [
        {
            nombre: "Dr. Francisco Gonzalez Muñoz",
            especialidad: "Traumatólogo",
            descripcion: "Medico especialista de Traumatologia y Ortopedia, vía MIR ciudad sanitaria Virgen de las Nieves de Granada",
            imagen: "https://s3-eu-west-1.amazonaws.com/doctoralia.es/doctor/6f1856/6f185687d979317b549cdec0283d389f_large.jpg",
            url: "/instasalud/especialistas/",
        },
        {
            nombre: "Marisa Fernández Martos",
            especialidad: "Psicóloga",
            descripcion:
                "Graduada en psicología por la UNED. En los años 2014 y 2018 formé parte de un equipo que realizó diversas formaciones en el Centro Penitenciario.",
            imagen: "https://s3-eu-west-1.amazonaws.com/doctoralia.es/doctor/4ec4bc/4ec4bce98f172ecce29c624d81016e77_large.jpg",
            url: "/instasalud/especialistas",
        },
        {
            nombre: "Cristina García Toledo",
            especialidad: "Psicología",
            descripcion:
                "Mi trabajo en la aplicación de la psicología y la psicoterapia a las personas que lo necesitan lo realizo desde la comprensión de que cada persona es ...",
            imagen: "https://s3-eu-west-1.amazonaws.com/doctoralia.es/doctor/4930f5/4930f55056ea7d33ce0526d97f1c5828_large.jpg",
            url: "/instasalud/especialistas",
        },
        {
            nombre: "Dr. Ignacio Romero Meynet",
            especialidad: "Ginecología",
            descripcion:
                "Experiencia profesional de más de 20 años tanto en la sanidad pública como privada. Actualmente desarrollo mi labor profesional como ginecólogo...",
            imagen: "https://s3-eu-west-1.amazonaws.com/doctoralia.es/doctor/d6bfcf/d6bfcf979b88c3119e79f804999fb67d_large.jpg",
            url: "/instasalud/especialistas",
        },
        {
            nombre: "Dra. Irene Valencia Tellez",
            especialidad: "Ginecología",
            descripcion: "Soy Ginecóloga y Obstetra especialista en el seguimiento ecográfico del embarazo y en patología ginecológica.",
            imagen: "https://s3-eu-west-1.amazonaws.com/doctoralia.es/doctor/6fee87/6fee87e76157a13263a54326113af485_large.jpg",
            url: "/instasalud/especialistas",
        },
        {
            nombre: "Dr. Fernando Ruiz Ortega ",
            especialidad: "Médico General",
            descripcion:
                "Me gusta considerarme Médico Generalista (Omnipracticien) porque considero que una parte de mi labor es orientar a los pacientes. No sólo para mejorar...",
            imagen: "https://s3-eu-west-1.amazonaws.com/doctoralia.es/doctor/ab2c04/ab2c0412392d09b8ca0ba9b132734a4e_large.jpg",
            url: "/instasalud/especialistas",
        },
    ];

    return (
        <>
            <Container className="mt-5">
                <h3>Especialistas</h3>
                <p className="font-weight-lighter">
                    Aquí podrás observar los distintos especialistas que disponemos actualmente. <br /> Garantizamos un servicio excelente
                    en cualquiera de las ramas de la medicina que usted desee.
                </p>
                <Container className="specialists-container mt-5 d-flex gap-4 flex-wrap">
                    {Especialistas.map((especialista, i) => {
                        return (
                            <CartaEspecialista
                                key={i}
                                nombre={especialista["nombre"]}
                                especialidad={especialista["especialidad"]}
                                imagen={especialista["imagen"]}
                                descripcion={especialista["descripcion"]}
                                url={especialista["url"]}
                            ></CartaEspecialista>
                        );
                    })}
                </Container>

                <p className="mt-5">
                    Si no encuentras la rama que buscas, puedes hacer click <a href="">aquí</a> para solicitar una consulta personalizada.
                </p>
            </Container>
        </>
    );
}

export default Especialistas;
