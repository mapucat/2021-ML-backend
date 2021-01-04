/**
 * Modelo usado para mapear los datos del usuario.
 */
const Author = class { 

  /**
   * Constructor del modelo error-exception.
   * @param {*} param0 Objeto enviado por el api de mercado libre.
   */
  constructor({ nickname, first_name, last_name }) {
    this.nickname = nickname;
    this.name = first_name || '';
    this.lastname = last_name || '';
  } 
};

module.exports = {
  Author
};