const express = require('express');
const { ErrorResponse } = require('./models/error-response.model');
const app = express();
const routes = require('./routes/routes');

app.use('/api', routes);

app.all('**', (req, res) => {
  'use strict';
  res.status(404).send(new ErrorResponse(404, req.url));
});

app.listen(3001);


module.exports = {
  app
};
