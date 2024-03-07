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
                        <Form className="gestion">
                            <Form.Group className=" mb-3">
                                <h4>Información Personal</h4>
                            </Form.Group>
                            <div className="info-texts">
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <b>DNI:</b> 49499494X
                                    </Form.Label>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <b>Nombre:</b> <span>Pablo Valladares</span>
                                    </Form.Label>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <b>Ultima Consulta:</b>
                                        <span> 07-03-2024</span>
                                    </Form.Label>
                                </Form.Group>
                            </div>
                            <Form.Group>
                                <Button className="btn-hover rounded">Modificar mis datos</Button>
                            </Form.Group>
                        </Form>
                    </Container>

                    <Container>
                        <Form>
                            <Form.Group className="mb-3">
                                <h4>Tus citas</h4>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Historial de Citas: </Form.Label>
                                <Form.Select className="m5-" aria-label="Selecciona tus citas">
                                    <option>Abre tu historial de citas</option>
                                    <option></option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <b>Especialista:</b> Pepe Palomo Pachon{" "}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <b>Especialidad:</b> Ginecologo{" "}
                                </Form.Label>
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
