import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styling/index.css";
import "./Styling/App.css";

import InstaSaludNavbar from "./Components/Navbar";

import Container from "react-bootstrap/Container";

import Inicio from "./Pages/Landing";
import Management from "./Pages/Management";
import Especialidades from "./Pages/Specialties";
import Especialistas from "./Pages/Specialists";
import SalaCitas from "./Pages/Appointments";

function App() {
    return (
        <Router>
            <InstaSaludNavbar />
            <Routes>
                <Route path="/" exact element={<Inicio />} />
                <Route path="/especialidades" element={<Especialidades />} />
                <Route path="/especialistas" element={<Especialistas />} />
                <Route path="/gestion" element={<Management />} />
                <Route path="/citas" element={<SalaCitas />} />
            </Routes>
        </Router>
    );
}

export default App;
