const express = require('express');

module.exports = (server) => {
  //BASE URL to all routes
  const router = express.Router();
  server.use('/api', router);

  //User routes
  const User = require('../api/userService');
  User.register(router,'/user');

  //Product routes
  const Product = require('../api/productService');
  User.register(router,'/product');

}
