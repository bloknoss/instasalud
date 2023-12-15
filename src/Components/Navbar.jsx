import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "./Dropdown";

import InstaSaludIcon from "../assets/logo-removebg-preview.png";
import ToggleTheme from "./ToggleTheme";
import LoginModal from "./LoginModal";
import { useState } from "react";
import { Link } from "react-router-dom";

function InstaSaludNavbar() {
    const [show, setShow] = useState(false);

    const handleModalShow = () => {
        setShow(true);
    };
    const handleModalHide = () => {
        setShow(false);
    };

    return (
        <>
            <LoginModal visible={show} handleClose={handleModalHide}></LoginModal>
            <Navbar expand="lg" className="bg-body-tertiary general-background">
                <Container>
                    <Link to="/instasalud/">
                        <Navbar.Brand className="logo" href="#home">
                            <img src={InstaSaludIcon} />
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/instasalud/">
                                <button className="btn-hover color-5" href="#home">
                                    Inicio
                                </button>
                            </Link>

                            <Link to="/instasalud/especialidades">
                                <button className="btn-hover color-5" href="#home">
                                    Especialidades
                                </button>
                            </Link>

                            <Link to="/instasalud/especialistas">
                                <button className="btn-hover color-5" href="#home">
                                    Especialistas
                                </button>
                            </Link>

                            <Link to="/instasalud/gestion">
                                <button className="btn-hover color-5" href="#home">
                                    Gestión de Citas
                                </button>
                            </Link>

                            <Link to="/instasalud/citas">
                                <button className="btn-hover color-5" href="#home">
                                    Sala de Citas
                                </button>
                            </Link>
                        </Nav>
                        <ToggleTheme></ToggleTheme>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default InstaSaludNavbar;
