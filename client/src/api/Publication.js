import { meFetch } from './ApiClient';

export const fetchImage = async (data) =>
  await meFetch.request('/api/v1/publications/image', 'POST', data, null);

export const fetchPublication = async (data, token) =>
  await meFetch.request('/api/v1/publications/', 'POST', data, token);

export const fetchPublicationRating = async (data, token, idPublication) =>
  await meFetch.request(`/api/v1/publications/${idPublication}/ratings`, 'POST', data, token);

export const fetchUpdatePublication = async (data, token) =>
  await meFetch.request('/api/v1/publications/', 'PUT', data, token);

export const fetchPublicationById = async (id) =>
  await meFetch.request(`/api/v1/publications/${id}`, 'GET', null, null);

export const fetchPublicationSearchV2 = async (pageParam, value, filter) => {
  if (value !== '') {
    const data = `&search=${value}`;
    const res = await meFetch.request(
      `/api/v1/publications/?limit=10&page=${pageParam * 10}${filter}${data}`,
      'GET',
      null,
      null
    );
    return res.data;
  }
  const res = await meFetch.request(
    `/api/v1/publications/?limit=10&page=${pageParam * 10}${filter}`,
    'GET',
    null,
    null
  );
  return res.data;
};

export const fetchPublicationFavorite = async (data, token) =>
  await meFetch.request(`/api/v1/publications/favorite`, 'POST', data, token);

export const fetchPublicationFavoriteDelete = async (idPublication, token) =>
  await meFetch.request(
    `/api/v1/publications/favorite/${idPublication.id_publication}`,
    'DELETE',
    null,
    token
  );
