const httpErrorMessage = require('../constants/http-error-message');

/**
 * Modelo usado para estandarizar la respuesta de error del servicio.
 */
const ErrorResponse = class { 

  /**
   * Constructor del modelo error-response.
   * @param {*} status Código de estado de respuesta HTTP.
   * @param {*} url Url a la cuál se hizo la petición.
   * @param {*} data Datos adicionales.
   */
  constructor(status, url, data) {
    this.ok = false;
    this.status = status;
    if (!!status) {
      this.message = httpErrorMessage[status].message;
    }
    this.url = url;
    this.data = data;
  } 
};

module.exports = {
  ErrorResponse
};