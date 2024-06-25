import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../estilos/teamdetalle.css'; // Asegúrate de crear este archivo para estilos

function Detalles({ show, handleClose, persona }) { 
  // Verifica si persona es null antes de intentar acceder a sus propiedades
  if (!persona) {
    return null;
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalles</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={persona.imgSrc} alt={persona.alt} className="team-member-image" />
        <div className="team-member-details">
          <h2>{persona.name}</h2>
          <p>{persona.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
}

export default Detalles;
