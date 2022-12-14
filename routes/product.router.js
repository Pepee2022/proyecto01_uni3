const express = require('express');
const router = express.Router();
const ProductService = require('./../services/product.service');
const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.json({
    message: '/products/filter',
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.finOne(id);
  if (product === undefined) {
    res.status(404).json({
      message: 'product no found',
      id,
    });
  }
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;

  const nuevoProducto = service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoProducto,
  });
});
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.status(200).json({
    message: 'actualziado',
    product,
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
