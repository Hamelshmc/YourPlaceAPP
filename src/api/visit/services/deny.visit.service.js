'use strict';

const userRepository = require('../../../repositories/user.repository');
const userServices = require('../../user/services');
const visitRepository = require('../../../repositories/visit.repository');
const { httpStatus, ResponseError } = require('../../../helpers');

const { HTTP_CLIENT_NAME } = process.env;

async function denyVisit(idVisit, idUser) {
  const [visit] = await visitRepository.findById(idVisit);
  await visitRepository.denyVisit(idUser, idVisit);
  const [user] = await userRepository.findById(visit.id_user_visitant);
  await userServices.sendConfirmationEmail(
    user.email,
    'YourPlace your booking has been denied!',
    '¡Continue looking for yourplace!',
    '¡Try contacting other lessors!',
    `${HTTP_CLIENT_NAME}/profile`,
    '¡Go to my profile!'
  );
}

module.exports = denyVisit;
