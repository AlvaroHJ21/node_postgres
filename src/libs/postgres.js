const { Client } = require('pg');

async function getConection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'root',
        password: 'root',
        database: 'my_store',
    });

    await client.connect();
}
