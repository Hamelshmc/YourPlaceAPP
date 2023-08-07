import { meFetch } from './ApiClient';

export const fetchAddVisit = async (data, token) =>
  await meFetch.request('/api/v1/visits/', 'POST', data, token);

export const fetchUpdateVisit = async (data, token) =>
  await meFetch.request('/api/v1/visits/', 'PUT', data, token);

export const fetchAceptVisit = async (data, token) =>
  await meFetch.request(`/api/v1/visits/acept/${data.idVisit}`, 'POST', null, token);

export const fetchDenyVisit = async (data, token) =>
  await meFetch.request(`/api/v1/visits/deny/${data.idVisit}`, 'POST', null, token);
