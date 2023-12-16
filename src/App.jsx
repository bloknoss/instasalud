import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

import InstaSaludNavbar from "./Components/Navbar";

import Container from "react-bootstrap/Container";

import Inicio from "./Pages/Inicio";
import Management from "./Pages/Gestion";
import Especialidades from "./Pages/Especialidades";
import Especialistas from "./Pages/Especialistas";
import SalaCitas from "./Pages/Appointments";
import LoginForm from "./Pages/Login";
import Footer from "./Components/Footer";
import ToS from "./Pages/ToS";

function App() {
    return (
        <Router>
            <InstaSaludNavbar />
            <Container className="body">
                <Routes>
                    <Route path="/instasalud/" exact element={<Inicio />} />
                    <Route path="/instasalud/especialidades" element={<Especialidades />} />
                    <Route path="/instasalud/especialistas" element={<Especialistas />} />
                    <Route path="/instasalud/gestion" element={<Management />} />
                    <Route path="/instasalud/citas" element={<SalaCitas />} />
                    <Route path="/instasalud/tos" element={<ToS />} />
                    <Route path="/instasalud/login" element={<LoginForm />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
