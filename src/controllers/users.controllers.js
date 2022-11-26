const { request, response } = require('express');
const UserService = require('./../services/users.service');

const service = new UserService();

const getUsersController = async (req = request, res = response, next) => {
    try {
        const user = await service.find();
        res.json(user);
    } catch (error) {
        next(error);
    }
};

const getUserController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        const user = await service.findOne(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

const createUserController = async (req = request, res = response, next) => {
    try {
        const body = req.body;
        const newUser = await service.create(body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

const updateUserController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const user = await service.update(id, body);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

const deleteUserController = async (req = request, res = response, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.status(201).json({ id });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUsersController,
    getUserController,
    createUserController,
    updateUserController,
    deleteUserController,
};
