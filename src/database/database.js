const { Pool } = require('pg');

const {
  PGHOST,
  PGDATABASE,
  PGPORT,
  PGUSER,
  PGPASSWORD,
} = process.env;

let pool;

async function getPool() {
  try {
    if (!pool) {
      pool = new Pool({
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE,
        max: 1, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
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
