const { request, response } = require('express');
const CategoryService = require('./../services/categories.service');

const service = new CategoryService();

const getCategoriesController = async (req = request, res = response, next) => {
    try {
        const categories = await service.find();
        res.json(categories);
    } catch (error) {
        next(error);
    }
};

const getCategoryController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        const category = await service.findOne(id);
        res.json(category);
    } catch (error) {
        next(error);
    }
};

const createCategoryController = async (req = request, res = response, next) => {
    try {
        const body = req.body;
        const newCategory = await service.create(body);
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
};

const updateCategoryController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const category = await service.update(id, body);
        res.json(category);
    } catch (error) {
        next(error);
    }
};

const deleteCategoryController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.status(201).json({ id });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCategoriesController,
    getCategoryController,
    createCategoryController,
    updateCategoryController,
    deleteCategoryController,
};
