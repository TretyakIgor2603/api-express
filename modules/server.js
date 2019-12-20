const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const { IS_DEV } = require('../constants/global');
const { HTTP_STATUS } = require('../constants/http-status');
const ApiError = require('../utils/api-error');
const router = require('./router');

const errorHandler = require('../middleware/error-handler');

dotEnv.config();

const server = express();
server.use(express.json());

if (IS_DEV) {
    server.use(morgan('dev'));
}
/* Enable CORS */
server.use(cors());

/* Enable router */
server.use('/api/v1', router);

/* Handle 404 */
server.use((req, res, next) => {
    throw new ApiError('Resource not found.', HTTP_STATUS.NOT_FOUND);
});

server.use(errorHandler);

module.exports = server;
