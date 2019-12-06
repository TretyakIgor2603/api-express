export const IS_DEV = process.env.NODE_ENV === 'development';

export const SERVER_PORT = parseInt(process.env.SERVER_PORT || 8080, 10);
export const SERVER_HOST = process.env.SERVER_HOST || '127.0.0.1';
