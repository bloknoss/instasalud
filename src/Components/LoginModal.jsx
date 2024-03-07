import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function LoginModal({ visible, handleClose }) {
  return (
    <>
      <Modal show={visible} onHide={handleClose}>
        <Modal.Header className="modal-title general-background" closeButton>
          <Modal.Title>
            <Link onClick={handleClose} to="/instasalud/login">Iniciar Sesión</Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Introduzca su e-mail" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" required00 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Acepto los terminos de servicio." required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <button className="btn-hover color-5" variant="primary" onClick={handleClose}>
            Registrarse
          </button>
          <button className="btn-hover btn-cancel" variant="danger" onClick={handleClose}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
