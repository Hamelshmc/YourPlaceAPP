import { meFetch } from './ApiClient';

export const fetchUserNotifications = async (token) =>
  await meFetch.request('/api/v1/notification/', 'GET', null, token);

export const fetchDeleteUserNotification = async (id, token) =>
  await meFetch.request(`/api/v1/notification/${id}`, 'DELETE', null, token);

export const fetchUserNotificationsCount = async (token) =>
  await meFetch.request('/api/v1/notification/count', 'GET', null, token);
