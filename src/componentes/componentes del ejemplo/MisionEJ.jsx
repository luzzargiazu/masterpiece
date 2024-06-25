import React from 'react';
import '../../estilos/estilos del ejemplo/MisionEJ.css'; // Importar el archivo CSS del componente

function MisionEj() {
  return (
    <div className="mision-container">
      <div className="mision-content">
        <h2>Nuestra misión...</h2>
        <p>
          Impulsamos el cambio a través de tecnología revolucionaria y soluciones innovadoras.
          Nuestro compromiso es transformar la forma en que enfrentamos los desafíos modernos,
          ofreciendo herramientas y estrategias de vanguardia que empoderan a las personas y
          las organizaciones para alcanzar nuevos niveles de éxito y eficiencia.
        </p>
        <a href="https://api.whatsapp.com/send?phone=543816618632&text=¡Hola!%0AQuisiera%20saber%20más%20acerca%20de%20su%20servicio" target="_blank" rel="noopener noreferrer" className="saber-mas-btn">Saber más</a>
      </div>
    </div>
  );
}

export default MisionEj;