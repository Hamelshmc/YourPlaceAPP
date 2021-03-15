const fetchAddBooking = async (data, token) =>
  await (
    await fetch('/api/v1/bookings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchUpdateBooking = async (data, token) =>
  await (
    await fetch('/api/v1/bookings/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchAceptBooking = async (data, token) =>
  await (
    await fetch(`/api/v1/bookings/acept/${data.idBooking}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const fetchDenyBooking = async (data, token) =>
  await (
    await fetch(`/api/v1/bookings/deny/${data.idBooking}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

export { fetchUpdateBooking, fetchAddBooking, fetchAceptBooking, fetchDenyBooking };
