'use strict';

const repositoryManager = require('./repository.manager');
const { queryBuilder, tableNames, columnBuilder } = require('../helpers');

async function insertBooking(booking) {
  const { query, values } = await queryBuilder(tableNames.BOOKING, booking);
  return await repositoryManager.executeQuery(query, values);
}

async function updateBooking(booking, id) {
  const { columnSet, values } = await columnBuilder(booking);
  const sql = `UPDATE ${tableNames.BOOKING} SET ${columnSet} WHERE id = ?`;
  return await repositoryManager.executeQuery(sql, [...values, id]);
}

async function findBookingById(id) {
  const query = `SELECT * FROM ${tableNames.BOOKING} WHERE id = ? LIMIT 1`;
  return await repositoryManager.executeQuery(query, [id]);
}

async function deleteBooking(id) {
  const query = `DELETE FROM ${tableNames.BOOKING} WHERE id = ?`;
  return await repositoryManager.executeQuery(query, [id]);
}

async function getBookingAndPublicationWithAddress(idBooking, idUser) {
  const query = `SELECT  *
  FROM ${tableNames.BOOKING} b
  LEFT JOIN ${tableNames.PUBLICATION} p ON p.id = b.id_publication
  LEFT JOIN ${tableNames.PUBLICATION_ADDRESSES} pa ON pa.id = p.id_publication_address
  WHERE b.id = ?
  AND b.id_user_payer = ?
  GROUP BY p.id;`;
  return await repositoryManager.executeQuery(query, [idBooking, idUser]);
}

async function haveTransactions(idBooking) {
  const query = `SELECT COUNT(*) as count FROM ${tableNames.TRANSACTIONS} t LEFT JOIN ${tableNames.BOOKING} b ON b.id = t.id_booking WHERE b.id = ?;`;
  return await repositoryManager.executeQuery(query, [idBooking]);
}

async function haveBooking(idUser) {
  const query = `SELECT * FROM ${tableNames.BOOKING} b WHERE b.id_user_payer = ?;`;
  return await repositoryManager.valueExists(query, [idUser]);
}

module.exports = {
  deleteBooking,
  findBookingById,
  insertBooking,
  updateBooking,
  getBookingAndPublicationWithAddress,
  haveTransactions,
  haveBooking,
};
