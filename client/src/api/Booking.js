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

export default fetchAddBooking;
