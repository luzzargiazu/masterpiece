import React, { useState } from 'react';
import '../../estilos/contacto.css'; // Importamos el archivo CSS adaptado

function Contacto() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contacto/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData(initialFormData);
        alert('Mensaje Enviado. ¡Gracias por contactarnos!');
      } else {
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className="contact-section">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-left">
          <h2>CONTACTO</h2>
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="contact-right">
          <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Número de teléfono"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Contacto;
 