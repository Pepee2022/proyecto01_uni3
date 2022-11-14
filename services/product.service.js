const crypto = require('crypto');

class ProductService {

  constructor(){
    this.products = [];
    this.generate(10);

  }

  generate(limite){
    for (let index = 0; index < limite; index++){
      this.products.push({
        id: crypto.randomUUID(),
        nombre: 'producto' + index,
        precio: 10 + Math.floor(Math.random()*190)
      });
    }
  }


  create(data){
    const nuevoProducto = {
      id: crypto.randomUUID (),
      ...data
    };
    this.products.push(nuevoProducto);
    return nuevoProducto;
  }


  find(){
    return this.products;

  }

  finOne(id){
    return this.products.find(product => {
      return product.id === id;
    });

  }

  update( id, changes){
    const index = this.products.findIndex(product => {
      return product.id === id;
    });
    if (index === -1 ){
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }


  delete(id){
    const index = this.products.findIndex(product => {
    return product.id === id;
    });
    if (index === -1){
      throw new Error('product not found');
    }
    this.products.splice(index, 1);
    return {id};
}
}
module.exports = ProductService;
