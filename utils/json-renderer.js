const HTTP_STATUS = require('../constants/http-status');

class JsonRenderer {
    success(res, data = {}) {
        res
            .status(HTTP_STATUS.OK)
            .json({
                success: true,
                ...data
            });
    }

    created(res, data = {}) {
        res
            .status(HTTP_STATUS.CREATED)
            .json({
                success: true,
                ...data
            });
    }
}

module.exports = JsonRenderer;
