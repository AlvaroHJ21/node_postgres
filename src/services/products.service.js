const faker = require('faker');
const { Op } = require('sequelize');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductsService {
    constructor() {
        // this.products = [];
        // this.generate();
        // this.pool = pool;
        // this.pool.on('error', (err) => console.log(err));
    }

    generate() {
        for (let index = 0; index < 100; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean(),
            });
        }
        console.log('*****Datos de prueba generados*****');
    }

    async create(data) {
        const newProduct = await models.Product.create(data);
        return newProduct;
    }

    async find(query) {
        const options = {
            include: ['category'],
            where: {},
        };
        const { offset, limit, price, price_min, price_max } = query;
        if (offset && limit) {
            options.offset = offset;
            options.limit = limit;
        }
        if (price) options.where.price = price;
        if (price_min && price_max)
            options.where.price = { [Op.gte]: price_min, [Op.lte]: price_max };

        const products = await models.Product.findAll(options);
        return products;
    }

    async findOne(id) {
        const product = await models.Product.findByPk(id);
        if (!product) throw boom.notFound('Product not found');
        // if (product.isBlock) throw boom.conflict('Product is blocked');
        return product;
    }

    async update(id, changes) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw boom.notFound('Product not found');
        }
        this.products[index] = { ...this.products[index], ...changes };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw boom.notFound('Product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = ProductsService;
