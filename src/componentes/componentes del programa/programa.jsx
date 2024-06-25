// Programa.jsx
import React from 'react';
import Header from './Header';
import ServiceCard from './ServiceCard';
import NextAppointment from './NextAppointment';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../estilos/programa.css';
import NavbarPrograma from './navbarprograma';
import { ModalProvider } from './ModalContext';
import ReservaTurnoModal from './ReservaTurnoModal';
import Chatbot from './Chatbot'; // Importar el componente del chatbot
import Btnvolver from './Btnvolver';

function Programa() {
  return (
   
    <ModalProvider>
      <div className="container-fluid app-container">
        <NavbarPrograma />
        <Header />
        <Btnvolver />
        <Chatbot />
        <div className="row mb-4 justify-content-center">
          <p>Servicios disponibles</p>
        </div>
        <Carousel>
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <ServiceCard name="Nombre del servicio largo máximo 45 caracteres" />
              </div>
              <div className="col-md-4">
                <ServiceCard name="Nombre del servicio corto" />
              </div>
              <div className="col-md-4">
                <ServiceCard name="Servicio 3" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <ServiceCard name="Servicio 4" />
              </div>
              <div className="col-md-4">
                <ServiceCard name="Servicio 5" />
              </div>
              <div className="col-md-4">
                <ServiceCard name="Servicio 6" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <NextAppointment />
        <ReservaTurnoModal />
      </div>
    </ModalProvider>
    
  );
}

export default Programa;
