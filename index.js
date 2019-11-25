require('colors');

const app = require('./modules/app');

const APP_PORT = process.env.SERVER_PORT | 3000;

app.listen(APP_PORT, () => {
    console.log(`App is running on http://localhost:${APP_PORT}`.yellow.bold);
});

// TODO
// JsonRenderer return {  data: some data, error: some error, _stack: some error stack }
// Add database to Docker
