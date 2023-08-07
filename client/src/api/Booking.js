import { meFetch } from './ApiClient';

export const fetchAddBooking = async (data, token) =>
  await meFetch.request('/api/v1/bookings/', 'POST', data, token);

export const fetchUpdateBooking = async (data, token) =>
  await meFetch.request('/api/v1/bookings/', 'PUT', data, token);

export const fetchAceptBooking = async (data, token) =>
  await meFetch.request(`/api/v1/bookings/accept/${data.idBooking}`, 'POST', null, token);

export const fetchDenyBooking = async (data, token) =>
  await meFetch.request(`/api/v1/bookings/deny/${data.idBooking}`, 'POST', null, token);
