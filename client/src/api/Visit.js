const fetchAddVisit = async (data, token) =>
  await (
    await fetch('/api/v1/visits/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchUpdateVisit = async (data, token) =>
  await (
    await fetch('/api/v1/visits/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

export { fetchUpdateVisit, fetchAddVisit };
