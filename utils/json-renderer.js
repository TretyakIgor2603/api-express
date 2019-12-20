const { HTTP_STATUS } = require('../constants/http-status');

class JsonRenderer {
    success(res, data = {}) {
        res
            .status(HTTP_STATUS.OK)
            .json({
                data,
                success: true
            });
    }

    created(res, data = {}) {
        res
            .status(HTTP_STATUS.CREATED)
            .json({
                data,
                success: true
            });
    }
}

module.exports = JsonRenderer;
