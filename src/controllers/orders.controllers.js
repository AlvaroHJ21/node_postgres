const { request, response } = require('express');

const getOrdersController = (req = request, res = response, next) => {
    try {
        res.json([]);
    } catch (error) {
        next(error);
    }
};

module.exports = { getOrdersController };
