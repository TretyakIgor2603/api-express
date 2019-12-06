import { IS_DEV } from '../constants/global';
import { HTTP_STATUS } from '../constants/http-status';
import { errorLogger } from '../configs/loggers';


const errorHandler = (error, req, res, next) => {
    errorLogger.error(error.toString());

    if (error.name === 'ApiError') {
        return res
            .status(error.statusCode)
            .json({
                success: false,
                error: {
                    message: error.message
                },
                _stack: {
                    message: IS_DEV ? error.stack && error.stack.split('\n') : undefined
                }
            });
    }

    return res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            error: {
                message: IS_DEV ? error.message : 'Oops! Something went wrong.'
            }
        });
};

export default errorHandler;
