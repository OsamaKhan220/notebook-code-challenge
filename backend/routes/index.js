const users = require('./users');

const routes = (app) => {
  users(app);
};

module.exports = routes;
exports = module.exports;
