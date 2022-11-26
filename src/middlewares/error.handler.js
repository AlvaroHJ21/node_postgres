const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next) {
    // console.error(err);
    next(err);
}

function ormErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(409).json({
            message: err.message,
            errors: err.errors,
        });
    }
    next(err);
}

function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

function errorHandler(err, req, res, next) {
    console.log('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
    next();
}

module.exports = { logErrors, ormErrorHandler, errorHandler, boomErrorHandler };
