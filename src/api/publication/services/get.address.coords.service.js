'use strict';

const { MAPBOX_TOKEN } = process.env;
const fetch = require('node-fetch');
const { ResponseError, httpStatus } = require('../../../helpers');

const getAddressCoords = async (address, zipcode) => {
  if (address && zipcode) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}%20${zipcode}%20spain.json?types=address&access_token=${MAPBOX_TOKEN}`;
    const data = await (await fetch(url)).json();
    const latitude = data.features[0].center[1];
    const longitude = data.features[0].center[0];
    return { lat: latitude, long: longitude };
  }
  throw new ResponseError(httpStatus.BAD_REQUEST, 'MALFORMED ADDRESS OR ZIPCODE');
};

module.exports = getAddressCoords;
