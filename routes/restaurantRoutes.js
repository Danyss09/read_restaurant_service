const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Obtener un restaurante por ID (Read)
router.get('/:id', restaurantController.getRestaurantById);

// Obtener todos los restaurantes (Read)
router.get('/', restaurantController.getAllRestaurants);

module.exports = router;