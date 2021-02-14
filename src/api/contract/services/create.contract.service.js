'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const bookingRepository = require('../../../repositories/booking.repository');
const userRepository = require('../../../repositories/user.repository');
const generateContractText = require('./generate.contract.text.service');
const generateContractPDF = require('./generate.contract.pdf.service');

async function createContract(idBooking, idUser) {
  if (idBooking && idUser) {
    const [booking] = await bookingRepository.getBookingAndPublicationWithAddress(
      idBooking,
      idUser
    );
    if (booking.id_user_payer === idUser) {
      const [tenant] = await userRepository.getUserWithAddress(idUser);
      const [landlord] = await userRepository.getUserWithAddress(booking.id_user);
      const text = await generateContractText(booking, tenant, landlord);
      if (text) {
        return await generateContractPDF(text);
      }
      throw new ResponseError(httpStatus.INTERNAL_SERVER_ERROR, 'NO SE HA PODIDO GENERAR EL PDF');
    }
    throw new ResponseError(httpStatus.FORBIDDEN, 'NO TIENES PERMISOS PARA ACCEDER AQUÍ');
  }
  throw new ResponseError(httpStatus.BAD_REQUEST, 'RESERVA O USUARIO INCORRECTOS');
}

module.exports = createContract;
