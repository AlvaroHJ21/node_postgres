const boom = require('@hapi/boom');
// const getConection = require('../libs/postgres');
const { models } = require('../libs/sequelize');

class UserService {
    constructor() {}

    async create(data) {
        const resp = await models.User.create(data);
        return resp;
    }

    async find() {
        const resp = await models.User.findAll({
            include: ['customer'],
        });
        return resp;
    }

    async findOne(id) {
        const resp = await models.User.findByPk(id);
        if (!resp) throw boom.notFound('User not found');
        return resp;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const resp = await user.update(changes);
        return resp;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;
