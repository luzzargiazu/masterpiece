const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const appointmentsRouter = require('./routes/appointments'); // Importar el router de appointments
const contactoRouter = require('./routes/contacto');
const serviciosRouter = require('./routes/servicios'); // Importar el nuevo router de servicios

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para parsear JSON en las solicitudes

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/prueba1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir un esquema y modelo para los usuarios
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Definir un modelo basado en el esquema
const User = mongoose.model('User', userSchema, 'usuarios');

// Endpoint para registrar usuarios
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear una nueva instancia del modelo User
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Guardar en la base de datos
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Endpoint para iniciar sesión
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// Usar el router de appointments
app.use('/api', appointmentsRouter);
app.use('/contacto', contactoRouter); // Aquí asumo que tu ruta es '/contacto/send-email'
app.use('/servicios', serviciosRouter); // Añadir la nueva ruta de servicios

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});