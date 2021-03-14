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

const fetchPublicationSearch = async (pageParam, value, filter) => {
  console.log(`/api/v1/publications/?limit=10&page=${pageParam * 10}&search=${value}${filter}`);
  const res = await (
    await fetch(`/api/v1/publications/?limit=10&page=${pageParam * 10}&search=${value}${filter}`)
  ).json();
  console.log(res);
  return res.data;
};

export {
  fetchImage,
  fetchPublication,
  fetchPublicationSearch,
  fetchPublicationById,
  fetchUpdatePublication,
};
