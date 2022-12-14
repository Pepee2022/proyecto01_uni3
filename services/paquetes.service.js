const crypto = require('crypto');

class PaqueteService {
  constructor() {
    this.paquetes = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.paquetes.push({
        id: crypto.randomUUID(),
        nombre: 'paquete' + index,
        precio: 100 + Math.floor(Math.random() * 1990),
      });
    }
  }

  create(data) {
    const nuevoPaquete = {
      id: crypto.randomUUID(),
      ...data,
    };
    this.paquetes.push(nuevoPaquete);
    return nuevoPaquete;
  }

  find() {
    return this.paquetes;
  }

  finOne(id) {
    return this.paquetes.find((paquete) => {
      return paquete.id === id;
    });
  }

  update(id, changes) {
    const index = this.paquetes.findIndex((paquete) => {
      return paquete.id === id;
    });
    if (index === -1) {
      throw new Error('paquete no encontrado');
    }
    const paquete = this.paquetes[index];
    this.paquetes[index] = {
      ...paquete,
      ...changes,
    };
    return this.paquetes[index];
  }

  delete(id) {
    const index = this.paquetes.findIndex((paquete) => {
      return paquete.id === id;
    });
    if (index === -1) {
      throw new Error('paquete no encontrado');
    }
    this.paquetes.splice(index, 1);
    return { id };
  }
}
module.exports = PaqueteService;
