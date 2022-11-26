const express = require('express');

const productsRouter = require('./products.routes');
const categoriesRouter = require('./categories.routes');
const usersRouter = require('./users.routes');
const ordersRouter = require('./orders.routes');
const customersRouter = require('./customers.routes');

// const path = '/api';
const router = express.Router();

// app.use('/api/v1', router);

router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);
router.use('/customers', customersRouter);

// function routerApi(app) {
//   const path = '/api';
//   const router = express.Router();

//   app.use('/api/v1', router);

//   router.use('/products', productsRouter);
//   router.use('/categories', categoriesRouter);
//   router.use('/users', usersRouter);
// }

module.exports = router;
