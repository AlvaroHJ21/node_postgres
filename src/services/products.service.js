const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {
    constructor() {
        this.products = [];
        this.generate();
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
        return this.products;
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
