const { getAuthor } = require('./author.service');
const { getPathFromRoot } = require('./category.service');

module.exports.services = {
  getAuthor,
  getPathFromRoot
};
