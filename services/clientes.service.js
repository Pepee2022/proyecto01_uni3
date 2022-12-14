const crypto = require('crypto');

class ClienteService {
  constructor() {
    this.clientes = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.clientes.push({
        id: crypto.randomUUID(),
        nombre: 'cliente' + index,
      });
    }
  }

  create(data) {
    const nuevoCliente = {
      id: crypto.randomUUID(),
      ...data,
    };
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  find() {
    return this.clientes;
  }

  finOne(id) {
    return this.clientes.find((cliente) => {
      return cliente.id === id;
    });
  }

  update(id, changes) {
    const index = this.clientes.findIndex((cliente) => {
      return cliente.id === id;
    });
    if (index === -1) {
      throw new Error('cliente no encontrado');
    }
    const cliente = this.clientes[index];
    this.clientes[index] = {
      ...cliente,
      ...changes,
    };
    return this.clientes[index];
  }

  delete(id) {
    const index = this.clientes.findIndex((cliente) => {
      return cliente.id === id;
    });
    if (index === -1) {
      throw new Error('cliente no encontrado');
    }
    this.clientes.splice(index, 1);
    return { id };
  }
}
module.exports = ClienteService;
