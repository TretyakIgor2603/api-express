const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;

/**
 * Authorization logger
 */
const today = new Date();
const fileName = today.toDateString().split(' ').join('-');

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [ ${label} ] ${level}: ${message}`;
});

const authorizationLogger = winston.createLogger({
    format: combine(
        label({ label: 'AUTHORIZATION.CONTROLLER' }),
        timestamp(),
        winston.format.json(),
        winston.format.colorize(),
    ),
    transports: [
        new winston.transports.Console({ format: logFormat }),
        new winston.transports.File({ filename: `logs/authorization/${fileName}.log` }),
    ],
});

/**
 * Error logger
 */
const errorLogger = winston.createLogger({
    format: combine(
        timestamp(),
        winston.format.json(),
    ),
    transports: [
        new winston.transports.File({ filename: `logs/app-error/error.log` }),
    ],
});

module.exports = {
    authorizationLogger,
    errorLogger,
};
