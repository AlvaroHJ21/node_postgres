const { database, config } = require('../config/config');
const URI = `postgres://${database.pgUser}:${database.pgPassword}@${database.pgHost}:${database.pgPort}/${database.pgDatabase}`;

module.exports = {
    development: {
        url: config.dbUrl,
        username: database.pgUser,
        password: database.pgPassword,
        database: database.pgDatabase,
        host: database.pgHost,
        port: database.pgPort,
        dialect: 'postgres',
    },
    production: {
        url: config.dbUrl,
        dialect: 'postgres',
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
