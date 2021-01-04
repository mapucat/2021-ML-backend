/**
 * Modelo usado para mapear los datos del dominio.
 */
const Domain = class { 

  /**
   * Constructor del modelo domain.
   * @param {*} param0 Objeto enviado por el api de mercado libre.
   */
  constructor({ domain_id, domain_name, category_id, category_name, attributes }) {
    this.domainId = domain_id || '';
    this.domainName = domain_name || '';
    this.categoryId = category_id || '';
    this.categoryName = category_name || '';
    this.attributes = attributes || [];
  } 
};

module.exports = {
  Domain
};