import React from 'react';
import '../../estilos/fondo.css'; // Asegúrate de tener este archivo CSS

function fondo() {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="text-container">
          <h1>SOFTWARE A MEDIDA</h1>
          <h2>START-UP</h2>
          <p>Empresa dedicada al desarrollo de software.</p>
          <button className="cta-button">EXPLORAR NUESTRO TRABAJO</button>
        </div>
      </div>
    </div>
  );
}

export default fondo;