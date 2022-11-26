require('dotenv').config();

const Server = require('./server');

const server = new Server();

server.listen();

// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const router = require('./routes');
// const {
//     logErrors,
//     errorHandler,
//     boomErrorHabdled,
// } = require('./middlewares/error.handle');

// const app = express();

// const port = process.env.PORT || '3000';

// app.use(express.json());

// app.use(morgan('tiny'));

// const whiteList = [];
// const options = {
//     origin: (origin, callback) => {
//         if (whiteList.includes(origin) || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('No permitido'));
//         }
//     },
// };
// // app.use(cors(options));
// app.use(cors());

// app.use('/api/v1', router);

// app.use(logErrors);
// app.use(boomErrorHabdled);
// app.use(errorHandler);

// app.listen(port, () => {
//     console.log('Corriendo en el puerto: ' + port);
// });
