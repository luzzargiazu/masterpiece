// ServiceCard.jsx
import React, { useContext } from 'react';
import {ReservaTurnoModal} from './ReservaTurnoModal'
import { ModalContext } from './ModalContext';
import '../../estilos/ServiceCard.css';

function ServiceCard({ name }) {
  const { handleShowModal } = useContext(ModalContext);

  const handleClick = () => {
    handleShowModal(
      <div>
        <h4>{name}</h4>
        <p>Detalles del servicio...</p>
      </div>
    );
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="card1 h-100" onClick={handleClick}>
        <img src="https://via.placeholder.com/150" className="card-img-top" alt={name} />
        <div className="card-body">
          <p className="card-text">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;