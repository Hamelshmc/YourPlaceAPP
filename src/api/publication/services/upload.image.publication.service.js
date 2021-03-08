'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const { cloudinary, optionsImage } = require('../helper/cloudinary.helper');

async function uploadImagePublication(files) {
  if (files.length === 0) {
    throw new ResponseError(httpStatus.NO_CONTENT, 'There is no image');
  }
  const promises = files.map(async (file) => {
    const uploadResponse = await cloudinary.uploader.upload(file.base64, optionsImage);
    return { url: uploadResponse.url };
  });
  const data = await Promise.all(promises).then((completed) => completed);

  return data;
}

module.exports = uploadImagePublication;
