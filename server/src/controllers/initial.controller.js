const fs = require('fs');
const {join} = require('node:path')

const initialController = {};

initialController.try = (req, res) => {
  res.send('Servidor activo')
};

module.exports = initialController;
