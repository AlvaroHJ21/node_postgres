const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class CategoryService {
    constructor() {}

    async create(data) {
        const newCategory = await models.Category.create(data);
        return newCategory;
    }

    async find() {
        return await models.Category.findAll();
    }

    async findOne(id) {
        return await models.Category.findByPk(id, {
            include: ['products'],
        });
    }

    async update(id, changes) {
        return {
            id,
            changes,
        };
    }

    async delete(id) {
        return { id };
    }
}

module.exports = CategoryService;
