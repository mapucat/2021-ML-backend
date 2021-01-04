const axios = require('axios');
const errorExceptionType = require('../constants/error-exception-type');
const routes = require('../constants/routes');
const { models } = require('../models');

const { ErrorException } = models;

/**
 * Función para obtener el path de grupos superiores de categorías dada 
 * la id de la categoría
 * @param {*} id la id de la categoría
 * @returns un arreglo de strings con los grupos superiores de categorías superiores
 */
const getPathFromRoot = async (id) => {
  'use strict';
  if (id === null || id === undefined) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'El parametro id de la categoría no ha sido enviado.');
  }
  let path = [];
  await axios.get(`${routes.ML_API}/categories/${id}`)
    .then((response) => path = response.data.path_from_root.map(element => element.name))
    .catch((error) => {
      throw new ErrorException(errorExceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error);
    });
  return path;
};

module.exports = {
  getPathFromRoot
};