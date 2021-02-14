'use strict';

async function queryBuilder(table, entity) {
  if (typeof entity !== 'object') {
    throw new Error('Invalid input query builder');
  }
  const values = Object.values(entity);
  const keys = Object.keys(entity);
  const keys2 = keys.join(',');
  const init = `INSERT INTO ${table} (${keys2}) `;
  let chars = ``;
  for (const key of keys) {
    chars += `?,`;
  }
  const charsSliced = chars.slice(0, chars.length - 1);
  const finish = `VALUES (${charsSliced})`;
  const query = init + finish;
  console.log(query);
  return {
    query,
    values,
  };
}

async function columnBuilder(object) {
  if (typeof object !== 'object') {
    throw new Error('Invalid input column builder');
  }
  const keys = Object.keys(object);
  const values = Object.values(object);
  let columnSet = '';
  columnSet = keys.map((key) => `${key} = ?`).join(', ');
  return {
    columnSet,
    values,
  };
}

async function columnWhereBuilder(object) {
  if (typeof object !== 'object') {
    throw new Error('Invalid input column builder');
  }
  if (Object.entries(object).length === 0) {
    return {
      result: '',
      values: '',
    };
  }
  const keys = Object.keys(object);
  const values = Object.values(object);
  let columnSet = '';
  columnSet = keys.map((key) => `${key} = ?`).join(' AND ');
  const result = `AND ${columnSet}`;
  return {
    result,
    values,
  };
}

module.exports = { queryBuilder, columnBuilder, columnWhereBuilder };
