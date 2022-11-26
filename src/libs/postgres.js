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
    return client;
}

module.exports = getConection;

// const client = new Client();

// client.connect((err) => {
//     if (err) console.log(err.stack);
//     console.log('Base de datos online');
// });

// const query = {
//     name: 'get time',
//     text: 'SELECT NOW()',
// };

// client.query(query, (err, res) => {
//     if (err) throw err;
//     console.log(res.rows);
// });

// module.exports = client;
