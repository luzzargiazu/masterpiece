import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../estilos/navbarprograma.css';

function NavbarPrograma() {
  const [showVigentesModal, setShowVigentesModal] = useState(false);
  const [showHistorialModal, setShowHistorialModal] = useState(false);
  const [turnosVigentes, setTurnosVigentes] = useState([]);
  const [turnosCompletados, setTurnosCompletados] = useState([]);

  useEffect(() => {
    fetchTurnosVigentes();
    fetchTurnosCompletados();
  }, []);

  const fetchTurnosVigentes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/turnosVigentes');
      console.log('Turnos Vigentes:', response.data);
      setTurnosVigentes(response.data);
    } catch (error) {
      console.error('Error fetching turnos vigentes:', error);
    }
  };

  const fetchTurnosCompletados = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/turnosCompletados');
      console.log('Turnos Completados:', response.data);
      setTurnosCompletados(response.data);
    } catch (error) {
      console.error('Error fetching turnos completados:', error);
    }
  };

  const handleShowVigentesModal = () => setShowVigentesModal(true);
  const handleCloseVigentesModal = () => setShowVigentesModal(false);

  const handleShowHistorialModal = () => setShowHistorialModal(true);
  const handleCloseHistorialModal = () => setShowHistorialModal(false);

  const handleMarcarCompleto = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/updateAppointment/${id}`, { status: 'completado' });
      fetchTurnosVigentes();
      fetchTurnosCompletados();
    } catch (error) {
      console.error('Error updating turno:', error);
    }
  };

  const handleMarcarCancelado = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/updateAppointment/${id}`, { status: 'cancelado' });
      fetchTurnosVigentes();
    } catch (error) {
      console.error('Error updating turno:', error);
    }
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleShowVigentesModal}>Turnos Vigentes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleShowHistorialModal}>Historial de Turnos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Modal show={showVigentesModal} onHide={handleCloseVigentesModal}>
        <Modal.Header closeButton>
          <Modal.Title>Turnos Vigentes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {turnosVigentes.map(turno => (
              <ListGroup.Item key={turno._id}>
                <div><strong>Nombre:</strong> {turno.userName}</div>
                <div><strong>Email:</strong> {turno.userEmail}</div>
                <div><strong>Teléfono:</strong> {turno.userPhone}</div>
                <div><strong>Fecha:</strong> {turno.date}</div>
                <div><strong>Hora:</strong> {turno.time}</div>
                <div><strong>Comentario:</strong> {turno.comment}</div>
                <Button variant="success" onClick={() => handleMarcarCompleto(turno._id)}>Marcar como Completo</Button>
                <Button variant="danger" onClick={() => handleMarcarCancelado(turno._id)}>Cancelar</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseVigentesModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showHistorialModal} onHide={handleCloseHistorialModal}>
        <Modal.Header closeButton>
          <Modal.Title>Historial de Turnos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {turnosCompletados.map(turno => (
              <ListGroup.Item key={turno._id}>
                <div><strong>Nombre:</strong> {turno.userName}</div>
                <div><strong>Email:</strong> {turno.userEmail}</div>
                <div><strong>Teléfono:</strong> {turno.userPhone}</div>
                <div><strong>Fecha:</strong> {turno.date}</div>
                <div><strong>Hora:</strong> {turno.time}</div>
                <div><strong>Comentario:</strong> {turno.comment}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHistorialModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarPrograma;