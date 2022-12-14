const express = require('express');
const productsRouter = require('./product.router');
const paquetesRouter = require('./paquetes.router');
const trabajadoresRouter = require('./trabajadores.router');
const ventasRouter = require('./ventas.router');
const clientesRouter = require('./clientes.router');

function routerApi1(app) {
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/products', productsRouter);
}

function routerApi2(app) {
  const routerV2 = express.Router();
  app.use('/api/v2', routerV2);
  routerV2.use('/paquetes', paquetesRouter);
}

function routerApi3(app) {
  const routerV3 = express.Router();
  app.use('/api/v3', routerV3);
  routerV3.use('/trabajadores', trabajadoresRouter);
}

function routerApi4(app) {
  const routerV4 = express.Router();
  app.use('/api/v4', routerV4);
  routerV4.use('/ventas', ventasRouter);
}

function routerApi5(app) {
  const routerV5 = express.Router();
  app.use('/api/v5', routerV5);
  routerV5.use('/clientes', clientesRouter);
}

module.exports = (routerApi1, routerApi2, routerApi3, routerApi4, routerApi5);
