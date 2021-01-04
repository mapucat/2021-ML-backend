const { getAuthor } = require('./author.service');
const { getPathFromRoot } = require('./category.service');
const { getDomain } = require('./domain.service');
const { getItem, getItemDescription, getItems } = require('./item.service');

module.exports.services = {
  getAuthor,
  getPathFromRoot,
  getDomain,
  getItem,
  getItemDescription,
  getItems
};
