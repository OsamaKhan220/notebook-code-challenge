const express = require('express');

const users = (app) => {
  const router = express.Router();

  router.get('/', (req, res) => {

    res.send("osamakhan")

  });

  app.use('/user', router);
};

module.exports = users;
exports = module.exports;
