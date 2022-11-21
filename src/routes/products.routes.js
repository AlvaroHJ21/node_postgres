const express = require('express');
const {
    getProductsController,
    getProductController,
    createProductController,
    updateProductController,
    deleteProductController,
} = require('../controllers/products.controllers');
const validatorHandler = require('../middlewares/validator.handler');
const {
    getProductSchema,
    createProductSchema,
    updateProductSchema,
} = require('../schemas/product.schema');

const router = express.Router();

router.get('/', getProductsController);

router.get(
    '/:id',
    validatorHandler(getProductSchema, 'params'),
    getProductController
);

router.post(
    '/',
    validatorHandler(createProductSchema, 'body'),
    createProductController
);

router.patch(
    '/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    updateProductController
);

router.delete('/:id', deleteProductController);

module.exports = router;
