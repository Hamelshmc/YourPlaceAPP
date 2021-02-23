'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const publicationServices = require('../services');

async function uploadImagePublication(request, response) {
  const { data } = request.body;
  try {
    const images = await publicationServices.uploadImagePublication(data);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, images));
  } catch (error) {
    return response
      .status(error.status || httpStatus.BAD_REQUEST)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = uploadImagePublication;
