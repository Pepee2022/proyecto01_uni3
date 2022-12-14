const crypto = require('crypto');

class TrabajadoresService {
  constructor() {
    this.trabajadores = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.trabajadores.push({
        id: crypto.randomUUID(),
        nombre: 'trabajador' + index,
      });
    }
  }

  create(data) {
    const nuevoTrabajador = {
      id: crypto.randomUUID(),
      ...data,
    };
    this.trabajadores.push(nuevoTrabajador);
    return nuevoTrabajador;
  }

  find() {
    return this.trabajadores;
  }

  finOne(id) {
    return this.trabajadores.find((trabajador) => {
      return trabajador.id === id;
    });
  }

  update(id, changes) {
    const index = this.trabajadores.findIndex((trabajador) => {
      return trabajador.id === id;
    });
    if (index === -1) {
      throw new Error('trabajador no encontrado');
    }
    const trabajador = this.trabajadores[index];
    this.trabajadores[index] = {
      ...trabajador,
      ...changes,
    };
    return this.trabajadores[index];
  }

  delete(id) {
    const index = this.trabajadores.findIndex((trabajador) => {
      return trabajador.id === id;
    });
    if (index === -1) {
      throw new Error('trabajador no encontrado');
    }
    this.trabajadores.splice(index, 1);
    return { id };
  }
}
module.exports = TrabajadoresService;
