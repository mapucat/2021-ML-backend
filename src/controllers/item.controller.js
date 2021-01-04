const errorExceptionType = require('../constants/error-exception-type');
const { models } = require('../models');
const { services } = require('../services');

const { ErrorResponse } = models;

const { getAuthor, getPathFromRoot, getDomain } = services;

/**
 * Función para obtener un item o producto
 * @param {*} req la solicitud enviada al servicio
 * @param {*} res la respuesta que se enviará por parte del servicio
 */
const getItem = async (req, res) => {
  const q = req.query.q;
  try {
    const domain = await getDomain(q);
    res.send(domain);
  } catch(e) {
    if (e.type === errorExceptionType.MISSING_PARAMETER) {
      res.status(400).send(new ErrorResponse(400, req.url, e.message));
    } else {
      res.status(500).send(new ErrorResponse(500, req.url, e.error));
    }    
  }
};

module.exports = {
  getItem
};
