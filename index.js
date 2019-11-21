require('colors');

const app = require('./modules/app');

const APP_PORT = process.env.SERVER_PORT | 3000;

app.listen(APP_PORT, () => {
    console.log(`App is running on http://localhost:${APP_PORT}`.yellow.bold);
});
