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

const fetchPublicationSearch = async (pageParam, value, filter) =>
  await (
    await fetch(`/api/v1/publications/?limit=10&page=${pageParam * 10}&search=${value}${filter}`)
  ).json();

export { fetchImage, fetchPublication, fetchPublicationSearch };
