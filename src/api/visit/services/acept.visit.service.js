'use strict';

const visitRepository = require('../../../repositories/visit.repository');
const userRepository = require('../../../repositories/user.repository');
const userServices = require('../../user/services');
const { httpStatus, ResponseError } = require('../../../helpers');

const { HTTP_CLIENT_NAME } = process.env;

async function aceptVisit(idVisit, idUser) {
  const [visit] = await visitRepository.findById(idVisit);
  await visitRepository.aceptVisit(idUser, idVisit);
  const [user] = await userRepository.findById(visit.id_user_visitant);
  await userServices.sendConfirmationEmail(
    user.email,
    'YourPlace your booking has been acepted!',
    '¡Now you can continue the payment process!',
    '¡Please anwser him as soon as posible!',
    `${HTTP_CLIENT_NAME}/profile`,
    '¡Go to my profile!'
  );
}

module.exports = aceptVisit;
