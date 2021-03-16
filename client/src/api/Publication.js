const fetchImage = async (data) =>
  await (
    await fetch('/api/v1/publications/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchPublication = async (data, token) =>
  await (
    await fetch('/api/v1/publications/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchPublicationRating = async (data, token, idPublication) =>
  await (
    await fetch(`/api/v1/publications/${idPublication}/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchUpdatePublication = async (data, token) => {
  const res = await fetch('/api/v1/publications/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const resJSON = await res.json();
  return resJSON;
};

const fetchPublicationById = async (id) => await (await fetch(`/api/v1/publications/${id}`)).json();

const fetchPublicationSearchV2 = async (pageParam, value, filter) => {
  if (value !== '') {
    const data = `&search=${value}`;
    const res = await (
      await fetch(`/api/v1/publications/?limit=10&page=${pageParam * 10}${filter}${data}`)
    ).json();
    return res.data;
  }
  const res = await (
    await fetch(`/api/v1/publications/?limit=10&page=${pageParam * 10}${filter}`)
  ).json();
  return res.data;
};

const fetchPublicationFavorite = async (data, token) =>
  await (
    await fetch(`/api/v1/publications/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchPublicationFavoriteDelete = async (data, token, idPublication) =>
  await (
    await fetch(`/api/v1/publications/favorite/${idPublication}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

export {
  fetchImage,
  fetchPublication,
  fetchPublicationSearchV2,
  fetchPublicationById,
  fetchUpdatePublication,
  fetchPublicationRating,
  fetchPublicationFavorite,
  fetchPublicationFavoriteDelete,
};
