/**
 * Modelo usado para mapear los datos de la moneda
 */
const Currency = class { 

  /**
   * Constructor del modelo currency.
   * @param {*} param0 Objeto enviado por el api de mercado libre.
   */
  constructor({ id, symbol, decimal_places }) {
    this.id = id;
    this.symbol = symbol || '';
    this.decimals = decimal_places || 0;
  } 
};

module.exports = {
  Currency
};