const { Author } = require('./author.model');
const { Domain } = require('./domain.model');
const { ErrorException } = require('./error-exception.model');
const { ErrorResponse } = require('./error-response.model');

module.exports.models = {
  Author,
  Domain,
  ErrorException,
  ErrorResponse
};
