const fetchConversations = async (token) => {
  const res = await fetch(`/api/v1/messages/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const responseJSON = await res.json();
  return responseJSON;
};

const fetchMessages = async (id, token) => {
  const res = await fetch(`/api/v1/messages/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const responseJSON = await res.json();
  return responseJSON;
};

const fetchPostMessage = async (data, token) => {
  const res = await fetch(`/api/v1/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const responseJSON = await res.json();
  return responseJSON;
};

export { fetchConversations, fetchMessages, fetchPostMessage };
