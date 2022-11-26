const express = require('express');

const validationHandler = require('../middlewares/validator.handler');
const {
    createCustomerSchema,
    getCustomerSchema,
    updateCustomerSchema,
} = require('../schemas/customer.schema');
const {
    getCustomersController,
    updateCustomerController,
    deleteCustomerController,
    createCustomerController,
} = require('../controllers/customers.controllers');

const router = express.Router();

router.get('/', getCustomersController);

router.post(
    '/',
    validationHandler(createCustomerSchema, 'body'),
    createCustomerController
);

router.patch(
    '/:id',
    validationHandler(getCustomerSchema, 'params'),
    validationHandler(updateCustomerSchema, 'body'),
    updateCustomerController
);

router.delete(
    '/:id',
    validationHandler(getCustomerSchema, 'params'),
    deleteCustomerController
);

module.exports = router;
