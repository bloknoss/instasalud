import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "./Dropdown";
import LoginIcon from "../assets/account_icon.svg";

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
              <button className="btn-login" onClick={handleModalShow} alt="">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <path d="M69.3677,51.0059a30,30,0,1,0-42.7354,0A41.9971,41.9971,0,0,0,0,90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6A41.9971,41.9971,0,0,0,69.3677,51.0059ZM48,12A18,18,0,1,1,30,30,18.02,18.02,0,0,1,48,12ZM12.5977,84A30.0624,30.0624,0,0,1,42,60H54A30.0624,30.0624,0,0,1,83.4023,84Z" />
                </svg>
              </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default InstaSaludNavbar;
