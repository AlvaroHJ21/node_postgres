require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
};

const database = {
    pgUser: process.env.PGUSER,
    pgPassword: process.env.PGPASSWORD,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPort: process.env.PGPORT,
};

module.exports = { config, database };
