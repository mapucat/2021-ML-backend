const axios = require('axios');
const errorExceptionType = require('../constants/error-exception-type');
const routes = require('../constants/routes');
const { models } = require('../models');
const { getAuthor } = require('./author.service');

const { ErrorException, Item } = models;

/**
 * Función para obtener productos según una búsqueda determinada
 * @param {*} q string de búsqueda
 * @returns Lista de productos
 */
const getItems = async (q, limit) => {
  'use strict';
  if (q === null || q === undefined || q.length === 0) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'No se ha enviado búsqueda alguna.');
  }
  let items = [];
  await axios.get(`${routes.ML_API}/sites/${routes.SITE_ID}/search`, {
    params: {
      q,
      limit
    }
  })
    .then((response) => {
      const promises = response.data.results.map(async(item) => {
        return { 
          author: await getAuthor(item.seller.id), 
          item: new Item(item) };
      });
      items = Promise.all(promises);
    })
    .catch((error) => {
      throw new ErrorException(errorExceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error.response.data);
    });
  
  return items;
};

module.exports = {
  getItems
};