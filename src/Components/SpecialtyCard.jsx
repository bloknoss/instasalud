import "../Pages/Styles/Specialties.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CartaEspecialidad({ nombre, descripcion, imagen, url }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="cardImg mt-3" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Button className="specialist-info btn-hover">Más Información</Button>
            </Card.Body>
        </Card>
    );
}
