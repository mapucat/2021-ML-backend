const { getAuthor } = require('./author.service');
const { getPathFromRoot } = require('./category.service');
const { getDomain } = require('./domain.service');

module.exports.services = {
  getAuthor,
  getPathFromRoot,
  getDomain
};
