const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'localhost',
//     port: 5432,
//     user: 'root',
//     password: 'root',
//     database: 'my_store',
// });

const pool = new Pool({ connectionString: process.env.URI });

module.exports = pool;
