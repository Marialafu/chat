const express = require('express');
const initialController = require('../controllers/initial.controller');
const initialRoutes = express.Router();

initialRoutes.get('/', initialController.try);

module.exports = initialRoutes;
