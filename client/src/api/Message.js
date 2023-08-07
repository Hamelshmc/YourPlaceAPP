import { meFetch } from './ApiClient';

export const fetchConversations = async (token) =>
  await meFetch.request('/api/v1/messages/', 'GET', null, token);

export const fetchMessages = async (id, token) =>
  await meFetch.request(`/api/v1/messages/${id}`, 'GET', null, token);

export const fetchPostMessage = async (data, token) =>
  await meFetch.request('/api/v1/messages/', 'POST', data, token);
