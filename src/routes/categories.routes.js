const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');
const {
    createCategorySchema,
    updateCategorySchema,
    getCategorySchema,
} = require('./../schemas/category.schema');

const {
    getCategoriesController,
    getCategoryController,
    createCategoryController,
    updateCategoryController,
    deleteCategoryController,
} = require('../controllers/categories.controllers');

const router = express.Router();

router.get('/', getCategoriesController);

router.get('/:id', validatorHandler(getCategorySchema, 'params'), getCategoryController);

router.post('/', validatorHandler(createCategorySchema, 'body'), createCategoryController);

router.patch(
    '/:id',
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    updateCategoryController
);

router.delete('/:id', validatorHandler(getCategorySchema, 'params'), deleteCategoryController);

module.exports = router;
