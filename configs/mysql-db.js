const mysql = require('mysql');

const connectToMysqlDatabase = () => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        batabase: process.env.MYSQL_DATABASE
    });

    connection.connect(
        (error) => {
            if (error) {
                console.error(`Error connection to MySQL database: ${error.message}`.red.bold);
            } else {
                console.log('Connected to MySQL database'.green.bold);
            }

        }
    );
    return connection;
};

module.exports = connectToMysqlDatabase;

