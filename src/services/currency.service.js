const axios = require('axios');
const errorExceptionType = require('../constants/error-exception-type');
const routes = require('../constants/routes');
const { models } = require('../models');

const { Currency, ErrorException } = models;

/**
 * Función para obtener la información de la moneda dada la id de la misma
 * @param {*} id la id de la moneda
 * @returns un modelo de la moneda a partir de la respuesta de la api
 */
const getCurrency = async (id) => {
  'use strict';
  if (id === null || id === undefined || id.length === 0) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'El parametro id de la moneda no ha sido enviado.');
  }
  let currency = null;
  await axios.get(`${routes.ML_API}/currencies/${id}`)
    .then((response) => currency = new Currency(response.data))
    .catch((error) => {
      throw new ErrorException(errorExceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error.response.data);
    });
  return currency;
};

module.exports = {
  getCurrency
};