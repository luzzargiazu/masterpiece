import React from 'react';
import '../../estilos/estilos del ejemplo/CardEJ.css'; // Importar el archivo CSS del componente
import imagen1 from '../../imagenes/imagenes del ejemplo/cardej1.png'; // Importar la imagen de la card 1
import imagen2 from '../../imagenes/imagenes del ejemplo/cardej2.png'; // Importar la imagen de la card 2
import imagen3 from '../../imagenes/imagenes del ejemplo/cardej3.png'; // Importar la imagen de la card 3
import imagen4 from '../../imagenes/imagenes del ejemplo/cardej4.png'; // Importar la imagen de la card 4

function CardEJ() {
  return (
    <div className="card-box">
      <div className="box-card">
        <div className="box-content">
          <h4>Eficiencia</h4>
          <h2>Desbloquea tu potencial</h2>
          <h3>Maximiza tu productividad con nuestras herramientas.</h3>
          <a href="#">Comienza ahora</a>
        </div>
        <img src={imagen1} alt="Imagen 1" className="box-image" />
      </div>
      <div className="box-card">
        <div className="box-content">
          <h4>Seguridad</h4>
          <h2>Protege tus datos</h2>
          <h3>Protección avanzada para tu tranquilidad.</h3>
          <a href="#">Más</a>
        </div>
        <img src={imagen2} alt="Imagen 2" className="box-image" />
      </div>
      <div className="box-card">
      <div className="box-content">
          <h4>Avances</h4>
          <h2>Especialízate en las nuevas tecnologías</h2>
          <h3>Mantente a la vanguardia adoptando las herramientas más innovadoras y avanzadas.</h3>
          <a href="#">Comienza ahora</a>
        </div>
        <img src={imagen3} alt="Imagen 3" className="box-image" />
      </div>
      <div className="box-card">
        <div className="box-content">
          <h4>Ventas</h4>
          <h2>Ventajas sobre las ventas</h2>
          <h3>Mejora tus estrategias de ventas con nuestras soluciones de alto rendimiento.</h3>
          <a href="#">Más</a>
        </div>
        <img src={imagen4} alt="Imagen 4" className="box-image" />
      </div>
    </div>
  );
}

export default CardEJ;
