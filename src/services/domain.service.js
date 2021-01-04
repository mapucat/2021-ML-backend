const axios = require('axios');
const errorExceptionType = require('../constants/error-exception-type');
const routes = require('../constants/routes');
const { models } = require('../models');

const { Domain, ErrorException } = models;

/**
 * Función para obtener la posible categoría a la que pertenece una búsqueda determinada
 * @param {*} q string de búsqueda
 * @returns Retorna el primer resultado encontrado
 */
const getDomain = async (q) => {
  'use strict';
  if (q === null || q === undefined || q.length === 0) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'No se ha enviado búsqueda alguna.');
  }
  let domain = null;
  await axios.get(`${routes.ML_API}/sites/${routes.SITE_ID}/domain_discovery/search`, {
    params: {
      q
    }
  })
    .then((response) => domain = new Domain(response.data[0]))
    .catch((error) => {
      throw new ErrorException(errorExceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error.response.data);
    });
  return domain;
};

module.exports = {
  getDomain
};