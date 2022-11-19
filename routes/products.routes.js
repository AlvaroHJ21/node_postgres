const express = require('express');
const validatorHandler = require('../middlewares/validator.handle');
const {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
} = require('../schemas/product.schema');
const ProductsService = require('../services/products.services');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json({
    ok: true,
    products,
  });
});

// router.get('/filter', async (req, res) => {
//   res.json({
//     msg: 'Soy un filter',
//   });
// });

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json({
        ok: true,
        product,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
      ok: true,
      msg: 'create',
      product: newProduct,
    });
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const product = await service.update(id, body);
      res.json({
        ok: true,
        msg: 'update',
        product,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rpta = await service.delete(id);
  res.json({
    ok: true,
    rpta,
  });
});

module.exports = router;
