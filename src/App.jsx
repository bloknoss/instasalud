import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

import InstaSaludNavbar from "./Components/Navbar";

import Container from "react-bootstrap/Container";

import Inicio from "./Pages/Landing";
import Management from "./Pages/Management";
import Especialidades from "./Pages/Specialties";
import Especialistas from "./Pages/Specialists";
import SalaCitas from "./Pages/Appointments";
import Footer from "./Components/Footer";

function App() {
    return (
        <Router>
            <InstaSaludNavbar />
            <Routes>
                <Route path="/instasalud/" exact element={<Inicio />} />
                <Route path="/instasalud/especialidades" element={<Especialidades />} />
                <Route path="/instasalud/especialistas" element={<Especialistas />} />
                <Route path="/instasalud/gestion" element={<Management />} />
                <Route path="/instasalud/citas" element={<SalaCitas />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
