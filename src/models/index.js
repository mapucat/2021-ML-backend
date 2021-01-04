const { Author } = require('./author.model');
const { Currency } = require('./currency.model');
const { Domain } = require('./domain.model');
const { ErrorException } = require('./error-exception.model');
const { ErrorResponse } = require('./error-response.model');
const { Item } = require('./item.model');

module.exports.models = {
  Author,
  Currency,
  Domain,
  ErrorException,
  ErrorResponse,
  Item
};
