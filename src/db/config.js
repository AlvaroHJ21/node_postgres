const { database } = require('../config/config');
const URI = `postgres://${database.pgUser}:${database.pgPassword}@${database.pgHost}:${database.pgPort}/${database.pgDatabase}`;

module.exports = {
    development: {
        // url: URI,
        username: database.pgUser,
        password: database.pgPassword,
        database: database.pgDatabase,
        host: database.pgHost,
        port: database.pgPort,
        dialect: 'postgres',
    },
    production: {
        url: URI,
        dialect: 'postgres',
    },
};
