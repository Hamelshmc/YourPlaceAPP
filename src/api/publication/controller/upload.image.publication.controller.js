'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const publicationServices = require('../services');

async function uploadImagePublication(request, response) {
  const { data } = request.body;
  try {
    const images = await publicationServices.uploadImagePublication(data);
    response.status(httpStatus.OK).send(images);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = uploadImagePublication;
