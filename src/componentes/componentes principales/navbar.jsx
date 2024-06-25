import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import '../../estilos/navbar.css';
import Ingresar from './ingresar'; 


function NavigationBar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  const handleNavigateHome = () => {
    navigate('/');
  };
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={ScrollLink} to="inicio" smooth={true} duration={100}>
            Nosotros
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ScrollLink className="nav-link" to="inicio" smooth={true} duration={100} onClick={handleNavigateHome}>
                Inicio
              </ScrollLink>
              <ScrollLink className="nav-link" to="servicios" smooth={true} duration={100}>
                Servicios
              </ScrollLink>
              <ScrollLink className="nav-link" to="productos" smooth={true} duration={100}>
                Productos
              </ScrollLink>
              <ScrollLink className="nav-link" to="equipo" smooth={true} duration={100}>
                Equipo
              </ScrollLink>
              <ScrollLink className="nav-link" to="contacto" smooth={true} duration={100}>
                Contacto
              </ScrollLink>
              <NavLink className="nav-link" to="#" onClick={handleShowModal}>
                Ingresar
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Ingresar show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default NavigationBar;
