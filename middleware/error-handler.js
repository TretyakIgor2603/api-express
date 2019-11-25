const { IS_DEV } = require('../constants/environments');
const HTTP_STATUS = require('../constants/http-status');
const { errorLogger } = require('../configs/loggers');

const errorHandler = (error, req, res, next) => {
    errorLogger.error(error.toString());

    if (error.name === 'ApiError') {
        return res
            .status(error.statusCode)
            .json({
                success: false,
                error: {
                    message: error.message,
                },
                _stack: {
                    message: IS_DEV ? error.stack && error.stack.split('\n') : undefined,
                },
            });
    }

    return res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            error: {
                message: IS_DEV ? error.message : 'Oops! Something went wrong.',
            },
        });
};

module.exports = errorHandler;
