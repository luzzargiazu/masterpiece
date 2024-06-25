import React from 'react';
import '../../estilos/estilos del ejemplo/FondoEJ.css'; // Asegúrate de tener este archivo CSS
import MisionEj from './MisionEJ';

function fondoEJ() {
  return (
    <div className="fondoej">
      <div className="overlayej">
        <div className="text-container">
          <MisionEj/>
        </div>
      </div>
    </div>
  );
}

export default fondoEJ;