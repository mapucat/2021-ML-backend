const axios = require('axios');
const errorExceptionType = require('../constants/error-exception-type');
const routes = require('../constants/routes');
const { models } = require('../models');

const { Author, ErrorException } = models;

/**
 * Función para obtener el autor dada la id del usuario
 * @param {*} userId la id del autor
 * @returns un modelo del author a partir de la respuesta de la api
 */
const getAuthor = async (userId) => {
  'use strict';
  console.log({userId});
  if (userId === null || userId === undefined) {
    throw new ErrorException(errorExceptionType.MISSING_PARAMETER, 'El parametro userId no ha sido enviado.');
  }
  let author = null;
  await axios.get(`${routes.ML_API}/users/${userId}`)
    .then((response) => author = new Author(response.data))
    .catch((error) => {
      throw new ErrorException(errorExceptionType.UNKNOWN_ERROR, 'Ha ocurrido un error desconocido.', error);
    });
  return author;
};

module.exports = {
  getAuthor
};