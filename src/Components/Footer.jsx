import { Facebook, Twitter, Google, Instagram, Linkedin, Github } from "react-bootstrap-icons";

function Footer() {
    return (
        <footer className="mt-5 position-relative text-center text-lg-start text-black "  style={{fontWeight: "600", backgroundColor: "#23CE6B" }}>
            <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#006e1b" }}>
                <div className="me-5">
                    <span>Encuentranos en las redes sociales:</span>
                </div>

                <div>
                    <a href="" target="_blank" className="text-white me-4">
                        <Facebook></Facebook>
                    </a>
                    <a href="" className="text-white me-4">
                        <Twitter></Twitter>
                    </a>
                    <a href="" className="text-white me-4">
                        <Google></Google>
                    </a>
                    <a href="" className="text-white me-4">
                        <Instagram></Instagram>
                    </a>
                    <a href="" className="text-white me-4">
                        <Linkedin></Linkedin>
                    </a>
                    <a href="" className="text-white me-4">
                        <Github></Github>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">InstaSalud</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                Bienvenido a nuestra página de salud, donde el compromiso con tu bienestar es nuestra prioridad principal.
                                En nuestro equipo de especialistas, nos enorgullece contar con profesionales altamente capacitados y
                                apasionados que se dedican a proporcionar la mejor atención para mejorar tu calidad de vida.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Servicios</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#249856", height: "2px" }}
                            />
                            <p>
                                <a href="#!" className="">
                                    Traumatologia
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="">
                                    Psicología
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="">
                                    Psiquiatría
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="">
                                    Ginecología
                                </a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Enlaces</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                <a href="#!" className="">
                                    Tu Cuenta
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="">
                                    Gestion de Citas
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="">
                                    Sala de Citas
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="">
                                    Terminos de Servicio
                                </a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contacto</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                <i className="fas fa-print mr-3"></i> Alvaro Carabante Rodríguez
                            </p>
                            <p>
                                <i className="fas fa-home mr-3"></i> C/ Poeta Rafael Alberti
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> acarrod0209@g.educaand.es
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> +34 665 06 06 92
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-3" style={{fontWeight:"200",  backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <a className="text-black" target="_blank" href="https://github.com/bloknoss/">
                © 2023 Copyright Álvaro Carabante Rodríguez
                </a>
            </div>
        </footer>
    );
}

export default Footer;
