require('colors');
const server = require('./modules/server');
const { SERVER_PORT, SERVER_HOST } = require('./constants/global');

server.listen(SERVER_PORT, () => {
    console.log(
        `Server is running on ${SERVER_HOST}:${SERVER_PORT}`
            .yellow.bold
    );
});
