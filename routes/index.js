const express = require('express');
const productsRouter = require('./product.router');

function routerApi(app){
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/products', productsRouter);
}

module.exports = routerApi;
