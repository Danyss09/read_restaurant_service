require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./services/db_config');
const restaurantRoutes = require('./routes/restaurantRoutes');

// Inicializar la aplicación
const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/restaurants', restaurantRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
