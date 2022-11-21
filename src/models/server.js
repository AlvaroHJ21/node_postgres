const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {
    logErrors,
    boomErrorHandler,
    errorHandler,
} = require('../middlewares/error.handler');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.path = '/api/v1';

        this.middlewares();
        this.routes();
        this.middlewaresError();
    }

    routes() {
        this.app.use(this.path, require('../routes'));
    }

    middlewares() {
        this.app.use(express.json());
        const whiteList = [];
        const options = {
            origin: (origin, callback) => {
                if (whiteList.includes(origin) || !origin) {
                    callback(null, true);
                } else {
                    callback(new Error('No permitido'));
                }
            },
        };
        this.app.use(cors(options));
        this.app.use(morgan());
    }
    middlewaresError() {
        this.app.use(logErrors, boomErrorHandler, errorHandler);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto ', this.port);
        });
    }
}

module.exports = Server;
