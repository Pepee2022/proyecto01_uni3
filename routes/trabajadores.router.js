const express = require('express');
const router = express.Router();
const TrabajadoresService = require('./../services/trabajadores.service');
const service = new TrabajadoresService();

router.get('/', (req, res) => {
  const trabajadores = service.find();
  res.status(200).json(trabajadores);
});

router.get('/filter', (req, res) => {
  res.json({
    message: '/trabajadores/filter',
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const trabajador = service.finOne(id);
  if (trabajador === undefined) {
    res.status(404).json({
      message: 'trabajador no encontrado',
      id,
    });
  }
  res.status(200).json(trabajador);
});

router.post('/', (req, res) => {
  const body = req.body;
  const nuevoTrabajador = service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoTrabajador,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const trabajador = service.update(id, body);
  res.status(200).json({
    message: 'actualizado',
    trabajador,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const eliminar = service.delete(id);
  res.status(200).json({
    message: 'eliminado',
    eliminar,
  });
});

module.exports = router;
