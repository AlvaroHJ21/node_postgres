const CustomerService = require('../services/customers.service');
const service = new CustomerService();

const getCustomersController = async (req, res, next) => {
    try {
        res.json(await service.find());
    } catch (error) {
        next(error);
    }
};

const getCustomerController = async (req, res, next) => {
    try {
        res.json(await service.find());
    } catch (error) {
        next(error);
    }
};

const createCustomerController = async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        res.status(201).json(await service.create(body));
    } catch (error) {
        next(error);
    }
};

const updateCustomerController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        res.status(201).json(await service.update(id, body));
    } catch (error) {
        next(error);
    }
};

const deleteCustomerController = async (req, res, next) => {
    try {
        const { id } = req.params;
        res.status(200).json(await service.delete(id));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCustomersController,
    getCustomerController,
    createCustomerController,
    updateCustomerController,
    deleteCustomerController,
};
