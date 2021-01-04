const errorExceptionType = require('../constants/error-exception-type');
const { models } = require('../models');
const { services } = require('../services');

const { ErrorResponse } = models;

const { getPathFromRoot, getDomain, getItem, getItems } = services;

/**
 * Función para obtener la lista de items o productos
 * @param {*} req la solicitud enviada al servicio
 * @param {*} res la respuesta que se enviará por parte del servicio
 */
const getItemsList = async (req, res) => {
  const q = req.query.q;
  try {
    const domain = await getDomain(q);
    const categories = await getPathFromRoot(domain.categoryId);
    const items = await getItems(q, 4);
    res.send({
      categories,
      items
    });
  } catch(e) {
    if (e.type === errorExceptionType.MISSING_PARAMETER) {
      res.status(400).send(new ErrorResponse(400, req.url, e.message));
    } else {
      res.status(500).send(new ErrorResponse(500, req.url, e.error));
    }    
  }
};

/**
 * Función para un item
 * @param {*} req la solicitud enviada al servicio
 * @param {*} res la respuesta que se enviará por parte del servicio
 */
const getItemDetails = async (req, res) => {
  const id = req.params.uid;
  try {
    const item = await getItem(id);
    res.send(item);
  } catch(e) {
    if (e.type === errorExceptionType.MISSING_PARAMETER) {
      res.status(400).send(new ErrorResponse(400, req.url, e.message));
    } else {
      res.status(500).send(new ErrorResponse(500, req.url, e.error));
    }    
  }
};

module.exports = {
  getItemDetails,
  getItemsList
};
