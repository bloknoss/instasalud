import "../Pages/Styles/Specialists.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CartaEspecialista({ nombre, especialidad, descripcion, imagen, url }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" className="card-specialist cardImg mt-3" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Title>{especialidad}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Button className="specialist-info btn-hover">Consultar Horario</Button>
            </Card.Body>
        </Card>
    );
}
