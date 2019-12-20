const IS_DEV = process.env.NODE_ENV === 'development';

const SERVER_PORT = parseInt(process.env.SERVER_PORT || 8080, 10);
const SERVER_HOST = process.env.SERVER_HOST || '127.0.0.1';

module.exports = { IS_DEV, SERVER_PORT, SERVER_HOST };
