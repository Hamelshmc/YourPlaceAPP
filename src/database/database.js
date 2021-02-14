const mysql = require('mysql2/promise');

const { MYSQL_HOST, MYSQL_DBNAME, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD } = process.env;

let pool;

async function getPool() {
  try {
    if (!pool) {
      pool = await mysql.createPool({
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DBNAME,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
      });
    }
    return pool;
  } catch (error) {
    console.log(`[Error] ${error}`);
    const err = new Error();
    err.status = 500;
    throw err;
  }
}

module.exports = { getPool };
