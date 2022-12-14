const crypto = require('crypto');

class VentaService {
  constructor() {
    this.ventas = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.ventas.push({
        id: crypto.randomUUID(),
        nombre: 'venta' + index,
        precio: 100 + Math.floor(Math.random() * 1990),
      });
    }
  }

  create(data) {
    const nuevaVenta = {
      id: crypto.randomUUID(),
      ...data,
    };
    this.ventas.push(nuevaVenta);
    return nuevaVenta;
  }

  find() {
    return this.ventas;
  }

  finOne(id) {
    return this.ventas.find((venta) => {
      return venta.id === id;
    });
  }

  update(id, changes) {
    const index = this.ventas.findIndex((venta) => {
      return venta.id === id;
    });
    if (index === -1) {
      throw new Error('venta no encontrada');
    }
    const venta = this.ventas[index];
    this.ventas[index] = {
      ...venta,
      ...changes,
    };
    return this.ventas[index];
  }

  delete(id) {
    const index = this.ventas.findIndex((venta) => {
      return venta.id === id;
    });
    if (index === -1) {
      throw new Error('venta no encontrada');
    }
    this.ventas.splice(index, 1);
    return { id };
  }
}
module.exports = VentaService;
