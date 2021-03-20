const fetchContract = async (id, token) => {
  const res = await fetch(`/api/v1/contracts/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const responseJSON = await res.json();
  return responseJSON;
};

export default fetchContract;
