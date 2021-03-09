const fetchImage = async (data) => {
  const res = await (
    await fetch('/api/v1/publications/image', {
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
  return res;
};

const fetchPublication = async (data, token) => {
  console.log(token);
  const res = await (
    await fetch('/api/v1/publications/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();
  return res;
};

const fetchPublicationSearch = async () => {
  const res = await (await fetch('/api/v1/publications/')).json();
  return res;
};

export { fetchImage, fetchPublication, fetchPublicationSearch };
