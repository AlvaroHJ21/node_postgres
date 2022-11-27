const { request, response } = require('express');
const ProductsService = require('../services/products.service');

const service = new ProductsService();

const getProductsController = async (req = request, res = response, next) => {
    try {
        const query = req.query;
        const products = await service.find(query);
        res.json({
            ok: true,
            products,
        });
    } catch (error) {
        next(error);
    }
};

const getProductController = async (req = request, res = response, next) => {
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
};

const createProductController = async (req = request, res = response, next) => {
    try {
        const body = req.body;
        const newProduct = await service.create(body);
        res.status(201).json({
            ok: true,
            msg: 'create',
            product: newProduct,
        });
    } catch (error) {
        next(error);
    }
};

const updateProductController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json({
            ok: true,
            msg: 'update',
            product,
        });
    } catch (error) {
        next(error);
    }
};

const deleteProductController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        const rpta = await service.delete(id);
        res.json({
            ok: true,
            rpta,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProductsController,
    getProductController,
    createProductController,
    updateProductController,
    deleteProductController,
};
