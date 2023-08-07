import { meFetch } from './ApiClient';

export const fetchContract = async (id, token) =>
  await meFetch.request(`/api/v1/contracts/${id}`, 'POST', null, token);
