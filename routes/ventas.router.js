const express = require('express');
const router = express.Router();
const VentaService = require('./../services/ventas.service');
const service = new VentaService();

router.get('/', (req, res) => {
  const ventas = service.find();
  res.status(200).json(ventas);
});

router.get('/filter', (req, res) => {
  res.json({
    message: '/ventas/filter',
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const venta = service.finOne(id);
  if (venta === undefined) {
    res.status(404).json({
      message: 'trabajador no encontrado',
      id,
    });
  }
  res.status(200).json(venta);
});

router.post('/', (req, res) => {
  const body = req.body;
  const nuevaVenta = service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevaVenta,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const venta = service.update(id, body);
  res.status(200).json({
    message: 'actualizado',
    venta,
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
