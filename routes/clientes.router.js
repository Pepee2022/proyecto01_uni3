const express = require('express');
const router = express.Router();
const ClienteService = require('./../services/clientes.service');
const service = new ClienteService();

router.get('/', (req, res) => {
  const clientes = service.find();
  res.status(200).json(clientes);
});

router.get('/filter', (req, res) => {
  res.json({
    message: '/clientes/filter',
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const cliente = service.finOne(id);
  if (cliente === undefined) {
    res.status(404).json({
      message: 'cliente no encontrado',
      id,
    });
  }
  res.status(200).json(cliente);
});

router.post('/', (req, res) => {
  const body = req.body;
  const nuevoCliente = service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoCliente,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const cliente = service.update(id, body);
  res.status(200).json({
    message: 'actualizado',
    cliente,
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
