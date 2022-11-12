const productsRouter = require('./product.router');

function routerApi(app){
  app.use('/products', productsRouter)
}

module.exports = routerApi;
