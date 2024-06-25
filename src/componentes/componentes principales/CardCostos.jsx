import React, { useState, useEffect } from 'react';
import '../../estilos/Cardcostos.css';

const CardCostos = () => {
  const [showModal, setShowModal] = useState({ standard: false, premium: false, medida: false, informacion: false });

  const initialFormData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
    serviceType: '', // Añadir campo para el tipo de servicio
    serviceMessage: '' // Añadir campo para el mensaje del servicio
  };

  const [formData, setFormData] = useState(initialFormData);

   // Mensajes específicos para cada tipo de servicio
   const serviceMessages = {
    standard: "¡Gracias por confiar en nuestro Servicio Estándar! Para nosotros es un privilegio acompañarte en este proyecto. Nos comprometemos a brindarte resultados excepcionales y una experiencia fluida. Pronto nos pondremos en contacto contigo para conocer más detalles y comenzar a trabajar juntos en alcanzar tus metas.",
    premium: "¡Felicitaciones por optar por nuestro Servicio Premium! Tu decisión nos inspira a superar tus expectativas. Estamos comprometidos a proporcionarte un servicio de primera clase, centrado en la excelencia y la personalización. Nos emociona iniciar este viaje contigo y estamos ansiosos por explorar todas las posibilidades para hacer realidad tu visión. Pronto nos comunicaremos para dar los primeros pasos hacia el éxito conjunto.",
    medida: "¡Enhorabuena por elegir nuestro Servicio a Medida! Valoramos tu confianza en nosotros para crear una solución totalmente adaptada a tus necesidades únicas. Nos dedicamos a diseñar cada detalle con precisión y cuidado, asegurándonos de que cada aspecto refleje tus objetivos y visión. Estamos emocionados de colaborar contigo en este emocionante proyecto. Nos comunicaremos pronto para discutir los próximos pasos y comenzar a convertir tus ideas en realidad."
};

  const handleOpenModal = (type) => {
    setFormData({ ...formData, serviceType: type, serviceMessage: serviceMessages[type] }); // Establecer tipo y mensaje de servicio
    setShowModal({ standard: false, premium: false, medida: false, informacion: false });
    setShowModal((prev) => ({ ...prev, [type]: true }));
  };

  const handleCloseModal = (type) => {
    setShowModal({ ...showModal, [type]: false });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event, modalType) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/servicios/send-service-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Mensaje enviado correctamente');
      } else {
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
    }

    handleCloseModal(modalType);
    handleOpenModal('informacion');
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleCloseModal('standard');
        handleCloseModal('premium');
        handleCloseModal('medida');
        handleCloseModal('informacion');
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="card-costos">
      <h1 className="title">Costos de servicios</h1>
      <div className="cartas-container">
        <div className="carta">
          <h2>Servicio Estándar</h2>
          <p>Este servicio incluye:</p>
          <ul>
            <li>Atención al cliente 24/7</li>
            <p>Se solucionan los problemas y dudas del cliente a la brevedad.</p>
            <li>Soporte técnico para caídas del servidor</li>
            <p>Se soluciona rápido todo.</p>
          </ul>
          <h5 className="costo, h5">Costo: $300</h5>
          <button className="contratar-btn" onClick={() => handleOpenModal('standard')}>Contratar</button>
        </div>
        <div className="carta">
          <h2>Servicio Premium</h2>
          <p>Este servicio incluye:</p>
          <ul>
            <li>Atención al cliente 24/7 con prioridad alta</li>
            <p>Se solucionan los problemas y dudas del cliente de manera inmediata.</p>
            <li>Soporte técnico dedicado</li>
            <p>Soporte exclusivo y rápido para cualquier incidencia.</p>
            <li>Mantenimiento preventivo del servidor</li>
            <p>Revisiones y optimizaciones periódicas para evitar problemas.</p>
            <li>Consultoría personalizada</li>
            <p>Asesoría especializada para mejorar tu infraestructura tecnológica.</p>
          </ul>
          <h5 className="costo, h5">Costo: $450</h5>
          <button className="contratar-btn" onClick={() => handleOpenModal('premium')}>Contratar</button>
        </div>
        <div className="carta">
          <h2>Servicio a medida</h2>
          <p>Este servicio incluye:</p>
          <ul>
            <li>Desarrollo personalizado según requerimientos específicos</li>
            <p>Creación de soluciones únicas adaptadas a las necesidades del cliente.</p>
            <li>Integración con sistemas existentes</li>
            <p>Compatibilidad y conexión efectiva con plataformas y software preexistentes.</p>
            <li>Optimización de rendimiento y escalabilidad</li>
            <p>Implementación de medidas robustas para garantizar la confidencialidad y integridad de la información.</p>
            <li>Interfaz de usuario intuitiva y experiencia de usuario mejorada</li>
            <p>Diseño centrado en el usuario para una navegación fácil y agradable.</p>
          </ul>
          <h5 className="costo, h5">Costo: A tratar</h5>
          <button className="contratar-btn" onClick={() => handleOpenModal('medida')}>Contratar</button>
        </div>
      </div>

      {showModal.standard && (
        <div className="modal-container" onClick={() => handleCloseModal('standard')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('standard')}>&times;</span>
            <h3 className='h3'>Contratar Servicio Estándar</h3>
            <form className="modal-form">
              <label>Nombre:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              <label>Apellido:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              <label>Correo:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              <label>Número:</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              <button onClick={(event) => handleSubmit(event, 'standard')}>Enviar</button>
            </form>
          </div>
        </div>
      )}

      {showModal.premium && (
        <div className="modal-container" onClick={() => handleCloseModal('premium')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('premium')}>&times;</span>
            <h3 className='h3'>Contratar Servicio Premium</h3>
            <form className="modal-form">
              <label>Nombre:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              <label>Apellido:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              <label>Correo:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              <label>Número:</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              <button onClick={(event) => handleSubmit(event, 'premium')}>Enviar</button>
            </form>
          </div>
        </div>
      )}

      {showModal.medida && (
        <div className="modal-container" onClick={() => handleCloseModal('medida')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('medida')}>&times;</span>
            <h3 className='h3'>Contratar Servicio a Medida</h3>
            <form className="modal-form">
              <label>Nombre:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              <label>Apellido:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              <label>Correo:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              <label>Número:</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              <button onClick={(event) => handleSubmit(event, 'medida')}>Enviar</button>
            </form>
          </div>
        </div>
      )}

      {showModal.informacion && (
        <div className="modal-container" onClick={() => handleCloseModal('informacion')}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => handleCloseModal('informacion')}>&times;</span>
            <h3 className='h3'>Muchas gracias!</h3>
            <form className="modal-form">
              <p>A la brevedad se le enviara toda la informacion a su correo.</p>
              <p>Estamos muy contentos de que usted este a punto de ser parte de nuestra familia.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCostos;
