import React from 'react';
import '../../estilos/pagejemplo.css';
import NavbarEj from '../componentes del ejemplo/NavbarEJ';
import FondoEJ from '../componentes del ejemplo/FondoEJ';
import MisionEj from '../componentes del ejemplo/MisionEJ';
import CardEJ from '../componentes del ejemplo/CardEJ';
import TextoEJ from '../componentes del ejemplo/TextoEJ';
import TextoEJ2 from '../componentes del ejemplo/TextoEJ2';
import ClientesEJ from '../componentes del ejemplo/ClientesEJ';
import TestimoniosEJ from '../componentes del ejemplo/TestimoniosEJ';
import ContactanosEJ from '../componentes del ejemplo/ContactanosEJ';
import FooterEJ from '../componentes del ejemplo/FooterEJ';
import Chatbot from './Chatbot';
import Btnvolver from './Btnvolver';
import { ModalProvider } from '../../componentes/componentes del ejemplo/ModalContextEJ'; // Importar el ModalProvider

function PaginaEjemplo() {
  return (
    <ModalProvider>
      <NavbarEj />
      <FondoEJ />
      <Chatbot />
      <Btnvolver />
      <TextoEJ />
      <CardEJ />
      <TextoEJ2 />
      <ClientesEJ />
      <TestimoniosEJ />
      <ContactanosEJ />
      <FooterEJ />
    </ModalProvider>
  );
}

export default PaginaEjemplo;
