const fs = require('fs');
const path = require('path');

const initialController = {};

initialController.try = (req, res) => {
  res.send('<h1>Hello</h1>');
};

module.exports = initialController;
