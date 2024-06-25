import React, { useState } from 'react';
import '../../estilos/team.css'; // Asegúrate de crear este archivo para estilos
import person1 from '../../imagenes/persona1.jpg';
import person2 from '../../imagenes/persona2.jpg';
import person3 from '../../imagenes/persona3.jpg';
import Detalles from './teamdetalle.jsx'; // Importa el componente Detalles

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null); // Estado para manejar el miembro del equipo seleccionado
  const [showModal, setShowModal] = useState(false); // Estado para mostrar u ocultar el modal

  const teamMembers = [
    { imgSrc: person1, alt: 'Person 1', name: 'Luz Argiro', description: 'Diseñadora, encargada del Frontend.' },
    { imgSrc: person2, alt: 'Person 2', name: 'Pietro Bonacossa', description: 'Maquetador, encargado del diseño y funciones.' },
    { imgSrc: person3, alt: 'Person 3', name: 'Nicolas Alurralde', description: 'QA, encargado de pruebas y test.' },
  ];

  // Manejador de eventos para mostrar información detallada de un miembro del equipo
  const handleMemberClick = (index) => {
    setSelectedMember(teamMembers[index]);
    setShowModal(true); // Mostrar el modal al hacer clic en una imagen
  };

  // Manejador de eventos para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="team-section">
      <h1 className="team-title">QUIENES SOMOS</h1>
      <h2 className="team-subtitle">EQUIPO DE TRABAJO</h2>
      <div className="team-gallery">
        {teamMembers.map((member, index) => (
          <div className="team-item" key={index} onClick={() => handleMemberClick(index)}>
            <img src={member.imgSrc} alt={member.alt} className="team-image" />
          </div>
        ))}
      </div>
      {/* Mostrar el modal de detalles */}
      <Detalles show={showModal} handleClose={handleCloseModal} persona={selectedMember} />
    </div>
  );
};

export default Team;
