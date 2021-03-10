const fetchImage = async (data) => {
  return await (
    await fetch('http://localhost:8080/api/v1/publications/image', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
  ).json();
};

const fetchPublication = async (data, token) => {
  return await (
    await fetch('http://localhost:8080/api/v1/publications/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();
};

const fetchPublicationSearch = async (pageParam, value, filter) => {
  const res = await (
    await fetch(
      `http://localhost:8080/api/v1/publications/?limit=10&page=${
        pageParam * 10
      }&search=${value}${filter}`
    )
  ).json();
  return res.data;
};

export { fetchImage, fetchPublication, fetchPublicationSearch };
