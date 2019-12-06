import 'babel-polyfill';
import express from 'express';
import dotEnv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import { IS_DEV } from '../constants/global';
import { HTTP_STATUS } from '../constants/http-status';
import ApiError from '../utils/api-error';
import router from './router';

import errorHandler from '../middleware/error-handler';


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

export default server;
