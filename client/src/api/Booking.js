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

export { fetchUpdateBooking, fetchAddBooking };
