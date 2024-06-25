import React, { useState } from 'react';
import '../../estilos/Work.css';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

import img1 from '../../imagenes/Aplicaciones Celular.jpeg';
import img2 from '../../imagenes/Chatbot.png'
import img3 from '../../imagenes/Soft a medida.jpg'

const projects = [
  { imgSrc: img1, alt: 'Project 1' },
  { imgSrc: img2, alt: 'Project 2' },
  { imgSrc: img3, alt: 'Project 3' },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="work-section">
      <h1 className="work-title">NUESTRO TRABAJO</h1>
     
      <p className='espacio'> Lo invitamos a crearse una cuenta haciendo click en el boton&nbsp;
            <a href="#inicio">ingresar</a>&nbsp;
          para poder visualizar un modelo de nuestros servicios desde el POV de un Administrador
      </p>
      <p className='espacio'>¡Al crearse su cuenta va a recibir semanalmente nuestras novedades y promociones!</p>
      <div className="work-categories">
      <Link to="/Tech Innovate" className="no-underline"> {/* Cambiado span por Link */}
          <span>Ver Ejemplo</span>
        </Link>
      </div>
      <div className="work-gallery">
        {projects.map((project, index) => (
          <div className="work-item" key={index} onClick={() => openImage(index)}>
            <img src={project.imgSrc} alt={project.alt} className="work-image" />
            <div className="work-overlay"></div>
          </div>
        ))}
      </div>
      
      {currentIndex !== null && (
        <div className="carousel-wrapper" onClick={closeImage}>
          <div className="carousel-image-container">
            <img src={projects[currentIndex].imgSrc} alt="Enlarged" className="carousel-image" />
          </div>
          {/* <button className="close-button" onClick={closeImage}>Close</button> */} {/* boton horrible */}
          <button className="prev-button" onClick={showPrevImage}>‹</button>
          <button className="next-button" onClick={showNextImage}>›</button>
        </div>
      )}
    </div>
  );
};

export default Work;
