// routes/contacto.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // Necesitarás instalar nodemailer en tu proyecto

// Definir una ruta para manejar el envío de correos electrónicos
router.post('/send-email', async (req, res) => {
  const { firstName, lastName, phoneNumber, email, message } = req.body;

  // Configurar el transporte de correo
  const transporter = nodemailer.createTransport({
    // Configuración del servicio de correo (por ejemplo, Gmail)
    service: 'gmail',
    auth: {
      user: 'beelbonacossa@gmail.com',
      pass: 'msho ryvb ltbb ytma'
    }
  });

  // Configurar el mensaje de correo electrónico
  const mailOptions = {
    from: 'beelbonacossa@gmail.com',
    to: 'beelbonacossa@gmail.com', // Este es el correo que recibe el email
    subject: 'Mensaje de contacto',
    text: `
      Nombre: ${firstName} ${lastName}
      Teléfono: ${phoneNumber}
      Correo electrónico: ${email}
      Mensaje: ${message}
    `
  };

  try {
    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo electrónico enviado correctamente.');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).send('Hubo un problema al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.');
  }
});

module.exports = router;
