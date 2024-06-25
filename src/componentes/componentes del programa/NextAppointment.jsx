// NextAppointment.jsx
import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function NextAppointment() {
  const { handleShowModal } = useContext(ModalContext);

  const handleClick = () => {
    handleShowModal();
  };

  return (
    <div className="next-appointment mt-4 text-center">
      <h2>Próximo turno</h2>
      <p>No tenés ningún turno reservado hasta ahora.</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Reservá tu turno
      </button>
    </div>
  );
}

export default NextAppointment;
