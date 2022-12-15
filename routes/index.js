const express = require('express');
const productsRouter = require('./product.router');
const paquetesRouter = require('./paquetes.router');
const trabajadoresRouter = require('./trabajadores.router');
const ventasRouter = require('./ventas.router');
const clientesRouter = require('./clientes.router');

function routerApi(app) {
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/products', productsRouter);
  routerV1.use('/paquetes', paquetesRouter);
  routerV1.use('/trabajadores', trabajadoresRouter);
  routerV1.use('/ventas', ventasRouter);
  routerV1.use('/clientes', clientesRouter);
}

module.exports = routerApi;
