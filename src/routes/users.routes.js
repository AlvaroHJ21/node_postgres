const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');
const {
    getUsersController,
    getUserController,
    createUserController,
    updateUserController,
    deleteUserController,
} = require('../controllers/users.controllers');

const router = express.Router();

router.get('/', getUsersController);

router.get('/:id', validatorHandler(getUserSchema, 'params'), getUserController);

router.post('/', validatorHandler(createUserSchema, 'body'), createUserController);

router.patch(
    '/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    updateUserController
);

router.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUserController);

module.exports = router;
