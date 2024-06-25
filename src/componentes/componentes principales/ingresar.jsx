import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../estilos/ingresar.css'; // Importa el archivo CSS
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';

function Ingresar({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const clientID = "267258751022-dj5vfdh1ag217ohj1e1o7oe22hrn5lln.apps.googleusercontent.com";
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Inicio de sesión exitoso');
        // Aquí puedes manejar el almacenamiento del token JWT en el localStorage o contexto
        handleClose();
        navigate('/ingresar');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
    }
  };

  const handleRegisterClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registro exitoso');
        // Puedes iniciar sesión automáticamente después del registro si lo deseas
        handleLoginClick();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al registrar usuario');
    }
  };

  const onSuccess = (response) => {
    setUser(response.profileObj);
    setLoggedIn(true);
    navigate('/ingresar'); // Redirigir automáticamente al perfil después del inicio de sesión exitoso
  };

  const onFailure = (response) => {
    console.log("Algo salió mal con Google Login");
  };

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  

  const handleLogout = () => {
    setUser({});
    setLoggedIn(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleLoginClick}>
            Iniciar Sesión
          </Button>
          <Button variant="outline-primary" type="button" onClick={handleRegisterClick} className="btn-register">
            Registrate
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>O iniciá sesión con</p>
        {!loggedIn && (
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            render={renderProps => (
              <Button variant="light" type="button" onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn-google">
                <i className="fab fa-google"></i> Google
              </Button>
            )}
          />
        )}
        {loggedIn && (
          <div>
            <img src={user.imageUrl} alt="profile" />
            <h3>{user.name}</h3>
            <Button variant="light" onClick={handleLogout}>Logout</Button>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Ingresar;
