import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../estilos/estilos del ejemplo/IngresarEJ.css'; // Importa el archivo CSS

function Ingresar({ show, handleClose }) {
  const navigate = useNavigate();

  const handleGoogleLoginClick = () => {
    alert("Iniciar sesión con Google aún no está implementado");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modal-headerEJ d-flex justify-content-between align-items-center"> {/* Clase CSS modificada y flexbox utilities */}
        <h4 className="modal-titleEJ m-0">Iniciar Sesión</h4> {/* Clase CSS modificada y margen cero */}
        <button type="button" className="btn-close" onClick={handleClose}></button>
      </div>
      <div className="modal-bodyEJ"> {/* Clase CSS modificada */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-labelEJ">Email</Form.Label> {/* Clase CSS modificada */}
            <Form.Control type="email" placeholder="Enter email" className="form-controlEJ" /> {/* Clase CSS modificada */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-labelEJ">Contraseña</Form.Label> {/* Clase CSS modificada */}
            <Form.Control type="password" placeholder="Password" className="form-controlEJ" /> {/* Clase CSS modificada */}
          </Form.Group>
          <Button variant="primary" type="button" className="btn-primaryEJ"> {/* Clase CSS modificada */}
            Iniciar Sesión
          </Button>
          <Button variant="outline-primary" type="button" className="btn-registerEJ"> {/* Clase CSS modificada */}
            Regístrate
          </Button>
        </Form>
      </div>
      <div className="modal-footer">
        <p>O inicia sesión con</p>
        <Button variant="light" type="button" onClick={handleGoogleLoginClick} className="btn-googleEJ"> {/* Clase CSS modificada */}
          <i className="fab fa-google"></i> Google
        </Button>
      </div>
    </Modal>
  );
}

export default Ingresar;
