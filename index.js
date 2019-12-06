import 'colors';
import server from './modules/server';
import { SERVER_PORT, SERVER_HOST } from './constants/global';


server.listen(SERVER_PORT, () => {
    console.log(
        `Server is running on ${SERVER_HOST}:${SERVER_PORT}`
            .yellow.bold
    );
});
