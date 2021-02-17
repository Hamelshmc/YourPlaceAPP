'use strict';

const database = require('../database/database');

const HttpStatusCodes = Object.freeze({
  ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
  ER_DUP_ENTRY: 409,
  ER_MIX_OF_GROUP_FUNC_AND_FIELDS: 420,
  ER_TRUNCATED_WRONG_VALUE: 500,
  ER_ACCESS_DENIED_ERROR: 280,
});

async function executeQuery(sql, values) {
  const pool = await database.getPool();
  return new Promise((resolve, reject) => {
    const query = pool.execute(sql, values);
    console.log('--->', { sql }, { values });
    query.then((data) => resolve(data[0])).catch((error) => reject(error));
  }).catch((error) => {
    console.error(error);
    const mysqlErrorList = Object.keys(HttpStatusCodes);
    error.status = mysqlErrorList.includes(error.code) ? HttpStatusCodes[error.code] : error.status;
    throw error;
  });
}

async function valueExists(sql, values) {
  const pool = await database.getPool();
  return new Promise((resolve, reject) => {
    const query = pool.execute(sql, values);
    console.log('--->', { sql }, { values });
    query
      .then((data) => {
        resolve(data[0].length > 0);
        reject(new Error('value not exits'));
      })
      .catch((error) => {
        reject(error);
      });
  }).catch((error) => {
    console.error(error);
    const mysqlErrorList = Object.keys(HttpStatusCodes);
    error.status = mysqlErrorList.includes(error.code) ? HttpStatusCodes[error.code] : error.status;
    throw error;
  });
}

module.exports = { executeQuery, valueExists };
