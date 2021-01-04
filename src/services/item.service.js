const axios = require('axios');
const errorExceptionType = require('../constants/error-exception-type');
const routes = require('../constants/routes');
const { models } = require('../models');

const { getAuthor } = require('./author.service');
const { getPathFromRoot } = require('./category.service');
const { getCurrency } = require('./currency.service');

const { ErrorException, Item } = models;

/**
 * Función para obtener items según una búsqueda determinada
 * @param {*} q string de búsqueda
 * @returns Lista de items
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

/**
 * Función para obtener un item según su id
 * @param {*} id id del item
 * @returns item encontrado
 */
const getItem = async (id) => {
  'use strict';
  if (id === null || id === undefined || id.length === 0) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'El parametro id del item no ha sido enviado.');
  }
  let item = null;
  await axios.get(`${routes.ML_API}/items/${id}`)
    .then(async(response) => {
      item = {
        author: await getAuthor(response.data.seller_id),
        categories: await getPathFromRoot(response.data.category_id),
        item: new Item(response.data, true)
      };
      const currency = await getCurrency(response.data.currency_id);
      item.item.price.decimals = currency.decimals;
      item.item.description = await getItemDescription(id);
    })
    .catch((error) => {
      throw new ErrorException(errorExceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error.response.data);
    });
  
  return item;
};

/**
 * Función para obtener la descripción de un item según su id
 * @param {*} id id del item
 * @returns descripción del item
 */
const getItemDescription = async (id) => {
  'use strict';
  if (id === null || id === undefined || id.length === 0) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'El parametro id del item no ha sido enviado.');
  }
  let description = '';
  await axios.get(`${routes.ML_API}/items/${id}/description`)
    .then(async(response) => description = response.data.plain_text)
    .catch((error) => {
      throw new ErrorException(errorExceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error.response.data);
    });
  return description;
};

module.exports = {
  getItem,
  getItemDescription,
  getItems
};