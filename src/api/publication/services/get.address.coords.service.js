'use strict';

const { MAPBOX_TOKEN } = process.env;
const { ResponseError, httpStatus } = require('../../../helpers');
const fetch = require('node-fetch');

const getAddressCoords = async (address, zipcode) => {
  console.log('getAddressCoords');
  if (address && zipcode) {
    console.log('getAddressCoords en el IF');
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}%20${zipcode}%20spain.json?types=address&access_token=${MAPBOX_TOKEN}`;
    const data = await (await fetch(url)).json();
    const latitude = data.features[0].center[1];
    const longitude = data.features[0].center[0];
    return { lat: latitude, long: longitude };
  } else {
    throw new ResponseError(httpStatus.BAD_REQUEST, 'MALFORMED ADDRESS OR ZIPCODE');
  }
};

module.exports = getAddressCoords;
