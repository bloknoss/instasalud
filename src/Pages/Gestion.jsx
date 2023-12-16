import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Management() {
    return (
        <>
            <Container className="mt-5">
                <h2>Gestión de Citas</h2>
                <Container className=" d-flex">
                    <Container>
                        <Form>
                            <Form.Group className="mb-3">
                                <h4>Información Personal</h4>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Nombre: </Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>DNI: </Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Ultima Consulta: </Form.Label>
                            </Form.Group>
                            <Button className="btn-hover rounded">Modificar mis datos</Button>
                        </Form>
                    </Container>

                    <Container>
                        <Form>
                            <Form.Group className="mb-3">
                                <h4>Tus citas</h4>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label >Historial de Citas: </Form.Label>
                                <Form.Select  className="m5-" aria-label="Selecciona tus citas">
                                    <option>Abre tu historial de citas</option>

                                    <option></option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Especialista: </Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Especialidad: </Form.Label>
                            </Form.Group>

                                <Button className="w-50 btn-hover rounded">Modificar Cita</Button>
                                <Button className="w-50 btn-hover rounded">Cancelar Cita</Button>
                        </Form>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Management;
