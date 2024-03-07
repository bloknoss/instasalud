import PolyResena from "../assets/resenas/resena-poly-subbed.mp4";
import PabloResena from "../assets/resenas/resena-pablo-subbed.mp4";
import DiegoResena from "../assets/resenas/resena-diego-subbed.mp4";
import { Container } from "react-bootstrap";

export default function Resenas() {
  return (
    <Container className="mt-5">
      <h1>Reseñas</h1>
      <p>En InstaSalud contamos con la opinión de distintos clientes que han querido dedicar unas palabras al servicio proporcionado.</p>
      <div className=" body videos-container">
        <div>
          <h2>Reseña 1</h2>
          <video src={PolyResena} controls type="video/mp4" />
          <p>
            <b>Paciente</b>: Daniel Andrés Comino
          </p>
        </div>
        <div>
          <h2>Reseña 2</h2>
          <video src={PabloResena} controls type="video/mp4" />
          <p>
            <b>Paciente:</b> Pablo Valladares González
          </p>
        </div>
        <div>
          <h2>Reseña 3</h2>
          <video src={DiegoResena} controls type="video/mp4" />
          <p>
            <b>Paciente:</b> Diego André Cadenillas Nájar
          </p>
        </div>
      </div>
    </Container>
  );
}
