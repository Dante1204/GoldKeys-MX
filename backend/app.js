const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar rutas
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de GoldKeysMX funcionando');
});

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));