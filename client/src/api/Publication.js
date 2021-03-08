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

const fetchPublication = async (data, user) => {
  const res = await (
    await fetch('/api/v1/publications/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();
  return res;
};

export { fetchImage, fetchPublication };
