const express = require('express');
const router = express.Router();
const PaqueteService = require('./../services/paquetes.service');
const service = new PaqueteService();

router.get('/', (req, res) => {
  const paquetes = service.find();
  res.status(200).json(paquetes);
});

router.get('/filter', (req, res) => {
  res.json({
    message: '/paquetes/filter',
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const paquete = service.finOne(id);
  if (paquete === undefined) {
    res.status(404).json({
      message: 'paquete no encontrado',
      id,
    });
  }
  res.status(200).json(paquete);
});

router.post('/', (req, res) => {
  const body = req.body;
  const nuevoPaquete = service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoPaquete,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const paquete = service.update(id, body);
  res.status(200).json({
    message: 'actualizado',
    paquete,
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
