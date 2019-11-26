require('colors');

const app = require('./modules/app');

const APP_PORT = parseInt(process.env.SERVER_PORT || 8080, 10);
const APP_HOST = process.env.SERVER_HOST || '0.0.0.0';

app.listen(APP_PORT, () => {
    console.log(`App is running on ${APP_HOST}:${APP_PORT}`.yellow.bold);
});

// TODO
// Add database to Docker
