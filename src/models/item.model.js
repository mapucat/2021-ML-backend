/**
 * Modelo usado para mapear los datos del item.
 */
const Item = class { 

  /**
   * Constructor del modelo item.
   * @param {*} param0 Objeto enviado por el api de mercado libre.
   */
  constructor(
    {
      id, 
      title, 
      price, 
      currency_id, 
      thumbnail,
      sold_quantity,
      shipping: { free_shipping },
      condition,
      address: { city_name },
      category_id }, hasDetails) {
    this.id = id;
    this.title = title;
    this.price = {
      currency: currency_id,
      amount: price,
    };
    this.picture = thumbnail;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.city_name = city_name;
    this.category_id = hasDetails ? category_id : undefined; 
  } 

  setDescription(description) {
    this.description = description;
  }
};

module.exports = {
  Item
};