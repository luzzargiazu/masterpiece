import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import '../../estilos/estilos del programa/Btnvolver.css'; // Asegúrate de que la ruta sea correcta

function Btnvolver() {
  return (
    <div className="btn-container">
      <Link to="/" className="no-underline"> {/* Cambiado span por Link */}
        <button className="btn-volver">Volver</button>
      </Link>
    </div>
  );
}

export default Btnvolver;
