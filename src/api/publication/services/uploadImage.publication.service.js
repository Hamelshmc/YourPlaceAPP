'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const { cloudinary, optionsImage } = require('../helper/cloudinary.helper');
async function uploadImagePublication(files) {
  const image = {
    data: [],
  };
  const { data } = image;
  if (files.length === 0) {
    throw new ResponseError(httpStatus.NO_CONTENT, 'There is no image');
  }
  for (const file of files) {
    const uploadResponse = await cloudinary.uploader.upload(file.data, optionsImage);
    data.push(uploadResponse.url);
  }
  return data;
}

module.exports = uploadImagePublication;
