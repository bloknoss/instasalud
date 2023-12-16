import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./Styles/Login.css"

export default function LoginForm() {
    return (
        <Container className="login-container mt-5 w-50">
            <h1>Inicio de Sesión</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Introduzca su e-mail" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" required00 />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" className="btn-hover w-75 rounded-3">Iniciar Sesión</Button>
                </Form.Group>
            <Container className="mt-3">

            <span>
                ¿Aún no tienes una cuenta? ¡Registrate <a href="">aquí</a>!
            </span>
            </Container>
            </Form>
        </Container>
    );
}
