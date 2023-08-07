import { meFetch } from './ApiClient';

export const fetchCreateTransaction = async (id, data, token) =>
  await meFetch.request(`/api/v1/transactions/${id}`, 'POST', data, token);
