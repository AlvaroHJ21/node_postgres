const faker = require('faker');
const boom = require('@hapi/boom');
// const pool = require('../libs/postgres-pool');
const sequelize = require('../libs/sequelize');

class ProductsService {
    constructor() {
        this.products = [];
        this.generate();
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
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        const query = 'SELECT * FROM PRODUCTS;';
        const [data] = await sequelize.query(query);
        return data;
    }

    async findOne(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) throw boom.notFound('Product not found');
        if (product.isBlock) throw boom.conflict('Product is blocked');
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
