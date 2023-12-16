import Container from "react-bootstrap/Container";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css?inline";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from "@chatscope/chat-ui-kit-react";

import Form from "react-bootstrap/Form";
function SalaCitas() {
    return (
        <>
            <Container className="mt-5">
                <h2>Sala de Citas</h2>
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label></Form.Label>
                        </Form.Group>
                    </Form>
                </Container>
            </Container>
        </>
    );
}

export default SalaCitas;
