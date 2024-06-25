import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ModalContext } from './ModalContextEJ';

function ReservaTurnoModal({ show, handleClose }) {
  const {
    showUserModal,
    handleCloseUserModal,
    handleShowUserModal,
    modalContent,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    comment,
    setComment,
    userData,
    setUserData,
    handleSubmit,
  } = useContext(ModalContext);

  const reloadPage = () => {
    window.location.reload();
  };

  const isHourDisabled = (hour) => {
    const selectedDateTime = new Date(selectedDate);
    const currentDateTime = new Date();
    const [selectedHour] = hour.split(':');
    const selectedDateWithHour = new Date(selectedDateTime.setHours(selectedHour, 0, 0, 0));
    
    return selectedDateWithHour < currentDateTime;
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservar un Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
          />
          <div className="mt-3">
            <h5>Selecciona una hora:</h5>
            <div className="d-flex flex-wrap">
              {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((hour) => (
              <Button
                key={hour}
                variant={selectedTime === hour ? 'primary' : 'outline-primary'}
                className="m-1"
                onClick={() => setSelectedTime(hour)}
                disabled={isHourDisabled(hour)}
              >
                {hour}
              </Button>
            ))}
            </div>
          </div>
          <div className="mt-3">
            <h5>Comentario:</h5>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Agrega un comentario..."
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={handleShowUserModal}
            disabled={!selectedDate || !selectedTime}
          >
            Solicitar turno
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUserModal} onHide={handleCloseUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                placeholder="Ingresa tu nombre y apellido"
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                placeholder="Ingresa tu correo"
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Número celular</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                placeholder="Ingresa tu número celular"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUserModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => { handleSubmit('turnosEJ'); reloadPage(); }}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReservaTurnoModal;
