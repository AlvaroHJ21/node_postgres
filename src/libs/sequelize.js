const { Sequelize } = require('sequelize');
const { database } = require('../config/config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(
    `postgres://${database.pgUser}:${database.pgPassword}@${database.pgHost}:${database.pgPort}/${database.pgDatabase}`,
    {
        dialect: 'postgres',
        logging: console.log,
    }
);

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
