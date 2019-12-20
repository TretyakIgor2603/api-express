const mysql = require('mysql2/promise');

const createPool = async () => {
    const config = {
        connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    };

    return mysql.createPool(config);
};

const execute = async (queryString, params = null) => {
    const pool = await createPool();
    const [ResultSetHeader] = await Promise.all([pool.execute(queryString, params)]);
    const [rows] = ResultSetHeader;
    await pool.end();

    return { rows };
};

module.exports = { execute };
