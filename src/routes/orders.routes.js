const express = require('express');
const { getOrdersController } = require('../controllers/orders.controllers');

const router = express.Router();

router.get('/', getOrdersController);

module.exports = router;
