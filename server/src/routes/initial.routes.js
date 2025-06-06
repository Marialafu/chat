const express = require('express');
const initialController = require('../controllers/initial.controller');
const initialRoutes = express.Router();

initialRoutes.get('/');

module.exports = initialRoutes;
