const express = require('express');
const { ErrorResponse } = require('./models/error-response.model');
const app = express();
const routes = require('./routes/routes');

// Agrega los headers
app.use((req, res, next) => {

  // Adiciona la url del frontend
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Específica los métodos que se van a permitir
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Especifica los headers que se van apermitir
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

app.use('/api', routes);

app.all('**', (req, res) => {
  'use strict';
  res.status(404).send(new ErrorResponse(404, req.url));
});

app.listen(3001);


module.exports = {
  app
};
