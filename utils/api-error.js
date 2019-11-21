const HTTP_STATUS = require('../constants/http-status');

class ApiError extends Error {
    constructor(message, statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        super();
        this.name = 'ApiError';
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ApiError;
