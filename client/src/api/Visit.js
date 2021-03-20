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

const fetchAceptVisit = async (data, token) =>
  await (
    await fetch(`/api/v1/visits/acept/${data.idVisit}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const fetchDenyVisit = async (data, token) =>
  await (
    await fetch(`/api/v1/visits/deny/${data.idVisit}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

export { fetchUpdateVisit, fetchAddVisit, fetchAceptVisit, fetchDenyVisit };
