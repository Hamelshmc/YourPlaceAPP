const fetchCreateTransaction = async (id, data, token) =>
  await (
    await fetch(`/api/v1/transactions/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

export default fetchCreateTransaction;
