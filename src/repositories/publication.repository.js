'use strict';

const repositoryManager = require('./repository.manager');
const { queryBuilder, tableNames, columnBuilder, columnWhereBuilder } = require('../helpers');

async function createPublicationAddress(address) {
  const { query, values } = await queryBuilder(tableNames.PUBLICATION_ADDRESSES, address);
  return await repositoryManager.executeQuery(query, values);
}

async function createPublication(publication) {
  const { query, values } = await queryBuilder(tableNames.PUBLICATION, publication);
  return await repositoryManager.executeQuery(query, values);
}

async function findPublicationAddressById(id) {
  const query = `SELECT * FROM ${tableNames.PUBLICATION_ADDRESSES} WHERE id_publication_address = ? LIMIT 1`;
  return await repositoryManager.executeQuery(query, [id]);
}

async function insertPicture(pictures) {
  const { query, values } = await queryBuilder(tableNames.PUBLICATION_PICTURES, pictures);
  return await repositoryManager.executeQuery(query, values);
}

async function updatePublication(publication, id) {
  const { columnSet, values } = await columnBuilder(publication);
  const sql = `UPDATE ${tableNames.PUBLICATION} SET ${columnSet} WHERE id = ?`;
  return await repositoryManager.executeQuery(sql, [...values, id]);
}

async function updatePublicationAddress(address, id) {
  const { columnSet, values } = await columnBuilder(address);
  const sql = `UPDATE ${tableNames.PUBLICATION_ADDRESSES} SET ${columnSet} WHERE id = ?`;
  return await repositoryManager.executeQuery(sql, [...values, id]);
}

async function findAllRatingByPublicationId(idPublication) {
  const query = `SELECT rating,DATE_FORMAT( timestamp, '%d-%c-%Y') as timestamp,comment,fullname,email ,id  FROM ${tableNames.PUBLICATION_RATINGS} pr LEFT JOIN users u ON  u.id = pr.id_user_voter WHERE id_publication = ? LIMIT 10`;
  return await repositoryManager.executeQuery(query, [idPublication]);
}

async function findAllPicturesByPublicationId(idPublication) {
  const query = `SELECT url FROM ${tableNames.PUBLICATION_PICTURES} WHERE id_publication = ? LIMIT 10`;
  return await repositoryManager.executeQuery(query, [idPublication]);
}

async function findPublicationById(idPublication) {
  const query = `SELECT p.id,p.area,p.rooms,p.bathrooms,p.garage,p.elevator,p.furnished,p.publication_type,p.deposit,p.price,DATE_FORMAT( p.availability_date, '%d-%c-%Y') as availability_date,p.disabled,p.id_user, p.parking, p.pets, p.garden, p.pool, p.terrace, p.storage_room, p.heating,p.id_publication_address,pa.street,pa.city,pa.country,pa.zipcode,pa.latitude,pa.longitude,pa.door,pa.floor, p.id_user,u.telephone, u.email, u.fullname,u.picture,AVG(ur.rating) as userRating,AVG(pr.rating) as publicationRating, t.success
  FROM ${tableNames.PUBLICATION} p
  LEFT JOIN ${tableNames.PUBLICATION_ADDRESSES} pa ON p.id_publication_address = pa.id
  LEFT JOIN ${tableNames.USER} u ON p.id_user = u.id
  LEFT JOIN ${tableNames.USER_RATING} ur ON ur.id_user_voted = p.id_user
  LEFT JOIN ${tableNames.PUBLICATION_RATINGS} pr ON pr.id_publication = p.id
  LEFT JOIN ${tableNames.BOOKING} b ON b.id_publication = p.id
  LEFT JOIN ${tableNames.TRANSACTIONS} t ON b.id = t.id_booking
  WHERE p.id = ?
  GROUP BY p.id
  LIMIT 1`;
  return await repositoryManager.executeQuery(query, [idPublication]);
}

async function insertRating(rating) {
  const { query, values } = await queryBuilder(tableNames.PUBLICATION_RATINGS, rating);
  return await repositoryManager.executeQuery(query, values);
}

async function existsPublication(id) {
  const query = `SELECT * FROM ${tableNames.PUBLICATION} WHERE id = ? LIMIT 1`;
  return await repositoryManager.valueExists(query, [id]);
}

async function getPublicationSearch(parametros) {
  const { search, page, limit, ...filtro } = parametros;
  const valueSearch = `%${search}%`;
  const { result, values } = await columnWhereBuilder(filtro);
  const query = `
  SELECT  p.id, area, rooms, bathrooms, garage, elevator, furnished, parking, pets, garden, pool, terrace, storage_room, heating,
  publication_type, deposit,price,DATE_FORMAT( availability_date, '%d-%c-%Y') as availability_date , street, floor ,city, country, zipcode,p.id_user,u.telephone,u.email,u.fullname,u.picture,AVG(ur.rating) as userRating,AVG(pr.rating) as publicationRating
  FROM ${tableNames.PUBLICATION} p
  LEFT JOIN ${tableNames.PUBLICATION_ADDRESSES} pa ON p.id_publication_address = pa.id
  LEFT JOIN ${tableNames.USER} u ON p.id_user = u.id
  LEFT JOIN ${tableNames.USER_RATING} ur ON ur.id_user_voted = p.id_user
  LEFT JOIN ${tableNames.PUBLICATION_RATINGS} pr ON pr.id_publication = p.id
  WHERE p.disabled = 0 AND Concat(city, '', country, '', zipcode,'',street) LIKE ? ${result} GROUP BY p.id ORDER BY p.timestamp DESC LIMIT ?,? `;
  return await repositoryManager.executeQuery(query, [
    valueSearch,
    ...values,
    `${page}`,
    `${limit}`,
  ]);
}

async function existPublicationEnabled(idPublication) {
  const query = `SELECT * FROM ${tableNames.PUBLICATION} WHERE id = ? AND disabled = FALSE`;
  return await repositoryManager.executeQuery(query, [idPublication]);
}

async function findPublicationOwner(idPublication) {
  const query = `SELECT u.email FROM ${tableNames.PUBLICATION} p LEFT JOIN ${tableNames.USER} u ON p.id_user = u.id WHERE p.id = ?`;
  return await repositoryManager.executeQuery(query, [idPublication]);
}

module.exports = {
  createPublication,
  createPublicationAddress,
  existsPublication,
  findAllPicturesByPublicationId,
  findPublicationAddressById,
  findPublicationById,
  findPublicationOwner,
  getPublicationSearch,
  insertPicture,
  insertRating,
  updatePublication,
  updatePublicationAddress,
  existPublicationEnabled,
  findAllRatingByPublicationId,
};
