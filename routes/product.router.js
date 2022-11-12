const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.json([
    {
      id: 001,
      nombre:'producto 1',
      precio: 12132,
    },
    {
      id: 002,
      nombre:'producto 2',
      precio: 132332,
    },
    {
      id: 001,
      nombre:'producto1',
      precio: 12132,
    },
    {
      id: 003,
      nombre:'producto 3',
      precio: 33333,
    },
    {
      id: 004,
      nombre:'producto 4',
      precio: 3344444,
    },
  ]);
});


router.get('/filter', (req, res) => {
    res.json({
    message: '/products/filter'
  });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
    res.json({
    message: 'soy un id',
    id
  });
});

module.exports = router;
