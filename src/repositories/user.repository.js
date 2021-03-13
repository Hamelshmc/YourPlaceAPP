'use strict';

const repositoryManager = require('./repository.manager');
const { tableNames, columnBuilder } = require('../helpers');

async function findByEmail(email) {
  const selectUserEmail = `SELECT * FROM  ${tableNames.USER} WHERE email = ? LIMIT 1`;
  const values = [email];
  return await repositoryManager.executeQuery(selectUserEmail, values);
}
async function findById(id) {
  const selectUserId = `
  SELECT
  u.id, u.fullname, u.dni,DATE_FORMAT(u.borndate, "%d/%m/%Y") as borndate, u.email, u.verified, u.picture, u.background, u.bio,
  ud.street , ud.city,ud.country, ud.zipcode,AVG(ur.rating) as userRating
  FROM  ${tableNames.USER} u
  LEFT JOIN user_addresses ud ON u.id = ud.id_user
  LEFT JOIN user_rating ur ON u.id = ur.id_user_voted
  WHERE u.id = ? GROUP BY u.id`;
  const values = [id];
  return await repositoryManager.executeQuery(selectUserId, values);
}

async function findPublicationUser(id) {
  const query = `
  SELECT  p.id, area, rooms, bathrooms, garage, elevator, furnished, parking, pets, garden, pool, terrace, storage_room, heating,
  publication_type, deposit,price,DATE_FORMAT( availability_date, '%d-%c-%Y') as availability_date , street, floor ,city, country, zipcode,p.id_user,u.telephone,u.email,u.fullname,u.picture,AVG(ur.rating) as userRating,AVG(pr.rating) as publicationRating
  FROM ${tableNames.PUBLICATION} p
  LEFT JOIN ${tableNames.PUBLICATION_ADDRESSES} pa ON p.id_publication_address = pa.id
  LEFT JOIN ${tableNames.USER} u ON p.id_user = u.id
  LEFT JOIN ${tableNames.USER_RATING} ur ON ur.id_user_voted = p.id_user
  LEFT JOIN ${tableNames.PUBLICATION_RATINGS} pr ON pr.id_publication = p.id
  WHERE p.id_user = ? GROUP BY p.id ORDER BY p.timestamp`;

  const values = [id];
  return await repositoryManager.executeQuery(query, values);
}

async function findPublicationFavoriteUser(id) {
  const selectUserId = `
  SELECT
  p.id, p.area,p.rooms,p.bathrooms,p.garage,p.elevator,p.furnished,p.publication_type,p.deposit,p.price,p.availability_date,p.disabled,
  AVG(pr.rating) as publicationRating
  FROM ${tableNames.USER} u
  LEFT JOIN ${tableNames.USER_PUBLICATIONS_FAVORITES} upf ON u.id = upf.id_user
  LEFT JOIN ${tableNames.PUBLICATION} p ON  upf.id_publication = p.id
  LEFT JOIN ${tableNames.PUBLICATION_RATINGS} pr ON pr.id_publication = p.id where u.id = ? GROUP BY p.id ORDER BY p.timestamp`;
  const values = [id];
  return await repositoryManager.executeQuery(selectUserId, values);
}

async function findHistoryPublicationUser(id) {
  const sql = `SELECT
  p.id, p.area, p.rooms, p.bathrooms, p.garage, p.elevator, p.furnished, p.parking, p.pets, p.garden, p.pool, p.terrace, p.storage_room, p.heating, p.publication_type
  FROM ${tableNames.PUBLICATION} p
  LEFT JOIN ${tableNames.BOOKING} b ON b.id_publication = p.id
  LEFT JOIN ${tableNames.TRANSACTIONS} t ON b.id = t.id_booking
  WHERE t.success = true AND b.id_user_payer = ? ORDER BY p.timestamp`;
  const value = [id];
  return await repositoryManager.executeQuery(sql, value);
}

async function findUserWithAddress(idUser) {
  const query = `SELECT *
  FROM ${tableNames.USER} u
  LEFT JOIN ${tableNames.USER_ADDRESSES} ua ON ua.id_user = u.id
  WHERE u.id = ?;`;
  return await repositoryManager.executeQuery(query, [idUser]);
}

async function registerUser(user) {
  const insertUserRergister = `INSERT INTO ${tableNames.USER} (id, email, password) VALUES (?,?,?)`;
  const values = [user.id, user.email, user.password];
  return await repositoryManager.executeQuery(insertUserRergister, values);
}

async function updateUser(user, id) {
  const { columnSet, values } = await columnBuilder(user);
  const sql = `UPDATE ${tableNames.USER} SET ${columnSet} WHERE id = ?`;
  return await repositoryManager.executeQuery(sql, [...values, id]);
}

async function valueExists(value, tableValue) {
  const selectUserEmail = `SELECT ${tableValue} FROM  ${tableNames.USER} WHERE ${tableValue} = ? LIMIT 1`;
  const values = [value];
  return await repositoryManager.valueExists(selectUserEmail, values);
}

async function addVerificationCode(id, code) {
  const query = `INSERT INTO ${tableNames.USER_VERIFICATION} (id_user,verification_code) VALUES (?,?)`;
  const values = [id, code];
  return await repositoryManager.executeQuery(query, values);
}

async function validateVerificationCode(date, code) {
  const query = `UPDATE ${tableNames.USER_VERIFICATION}
    SET verified_at = ?
    WHERE verification_code = ?
    AND verified_at IS NULL`;
  const values = [date, code];
  const validation = await repositoryManager.executeQuery(query, values);
  return validation.affectedRows === 1;
}

async function verifyUser(id) {
  const query = `UPDATE ${tableNames.USER} SET verified = 1 WHERE id = ?`;
  const values = [id];
  return await repositoryManager.executeQuery(query, values);
}

async function findUserBookings(id) {
  const query = `SELECT * FROM ${tableNames.BOOKING} WHERE id_user_payer = ? LIMIT 1`;
  const values = [id];
  return await repositoryManager.executeQuery(query, values);
}

module.exports = {
  addVerificationCode,
  findByEmail,
  findById,
  findHistoryPublicationUser,
  findPublicationFavoriteUser,
  findPublicationUser,
  findUserBookings,
  findUserWithAddress,
  registerUser,
  updateUser,
  validateVerificationCode,
  valueExists,
  verifyUser,
};
