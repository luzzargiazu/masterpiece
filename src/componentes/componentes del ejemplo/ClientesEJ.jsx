import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link si estás usando React Router
import '../../estilos/estilos del ejemplo/ClientesEJ.css'; // Importar el archivo CSS del componente
import imagen1 from '../../imagenes/imagenes del ejemplo/ClienteEJ1.png'; // Importar la imagen de la card 1
import imagen2 from '../../imagenes/imagenes del ejemplo/ClienteEJ2.png'; // Importar la imagen de la card 2
import imagen3 from '../../imagenes/imagenes del ejemplo/ClienteEJ3.png'; // Importar la imagen de la card 3
import imagen4 from '../../imagenes/imagenes del ejemplo/ClienteEJ4.png'; // Importar la imagen de la card 4

function ClientesEJ() {
  const clientes = [
    { img: imagen1, name: 'SnacPhone', link: 'https://snacphone.ar/' },
    { img: imagen2, name: 'MacStation', link: 'https://www.macstation.com.ar/' },
    { img: imagen3, name: 'MaxPro', link: 'https://maxpro.com.ar/' },
    { img: imagen4, name: 'TodoApplecaba', link: 'https://todoapplecaba.com.ar/' },
  ];

  return (
    <div className="clientes-section">
      <h2>Conoce a nuestros clientes certificados</h2>
      <div className="clientes-container">
        {clientes.map((cliente, index) => (
          <div className="cliente-card" key={index}>
            <Link to={cliente.link}> {/* Enlace con React Router */}
              <img src={cliente.img} alt={`Imagen ${index + 1}`} className="cliente-img" />
              <p>{cliente.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientesEJ;
