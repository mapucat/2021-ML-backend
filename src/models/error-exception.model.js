/**
 * Modelo gestionar las excepciones en el código.
 */
const ErrorException = class { 

  /**
   * Constructor del modelo error-exception.
   * @param {*} type Tipo de excepción, gestionados dentro de 
   *                 la constante error-exception-type.
   * @param {*} message Mensaje adicional al error.
   */
  constructor(type, message) {
    this.type = type;
    this.message = message;
  } 
};

module.exports = {
  ErrorException
};