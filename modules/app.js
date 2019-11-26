const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const { IS_DEV } = require('../constants/environments.js');
const HTTP_STATUS = require('../constants/http-status');
const router = require('./router');
const ApiError = require('../utils/api-error');

const errorHandler = require('../middleware/error-handler');

dotEnv.config();

const app = express();

app.use(express.json());

if (IS_DEV) {
    app.use(morgan('dev'));
}
// Enable CORS
app.use(cors());

app.use('/api/v1', router);

// Handle 404
app.use((req, res, next) => {
    throw new ApiError('Resource not found.', HTTP_STATUS.NOT_FOUND);
});

app.use(errorHandler);

module.exports = app;
