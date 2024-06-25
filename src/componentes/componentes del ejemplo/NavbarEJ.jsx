import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../estilos/estilos del ejemplo/NavbarEJ.css';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import Ingresar from '../../componentes/componentes del ejemplo/ingresarEJ.jsx';
import ReservaTurnoModal from '../../componentes/componentes del ejemplo/ReservaTurnoModalEJ.jsx'; // Importa el componente para el segundo modal

function NavbarEj() {
    const [showIngresarModal, setShowIngresarModal] = useState(false);
    const [showSacarTurnoModal, setShowSacarTurnoModal] = useState(false);

    const handleShowIngresarModal = () => setShowIngresarModal(true);
    const handleCloseIngresarModal = () => setShowIngresarModal(false);

    const handleShowSacarTurnoModal = () => setShowSacarTurnoModal(true);
    const handleCloseSacarTurnoModal = () => setShowSacarTurnoModal(false);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Proyectos</a>
                        <a className="nav-link" href="#">Servicios</a>
                    </div>
                    <a className="navbar-brand mx-auto" href="#">Tech Innovate</a>
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link" to="#" onClick={handleShowSacarTurnoModal}>
                            Sacar turno
                        </NavLink>
                        <a className="nav-link active" aria-disabled="true">Nosotros</a>
                        <NavLink className="nav-link" to="#" onClick={handleShowIngresarModal}>
                            Ingresar
                        </NavLink>
                    </div>
                </div>
            </div>
            <Ingresar show={showIngresarModal} handleClose={handleCloseIngresarModal} />
            <ReservaTurnoModal show={showSacarTurnoModal} handleClose={handleCloseSacarTurnoModal} /> {/* Agrega el componente para el segundo modal */}
        </nav>
    );
}

export default NavbarEj;