/* eslint-disable consistent-return */

const fetchRegister = async (data) => {
  const { emailRegister: email, password } = data;
  const user = { email, password };
  return await (
    await fetch('/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
  ).json();
};

const fetchLogin = async (data) => {
  const { emailLogin: email, passwordLogin: password } = data;
  const user = { email, password };
  return await (
    await fetch('/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
  ).json();
};

const checkToken = async (token) =>
  await (
    await fetch('/api/v1/users/checkToken', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const generateTokens = async (token) =>
  await (
    await fetch('/api/v1/users/generateTokens', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const fetchUser = async (token) =>
  await (
    await fetch('/api/v1/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const fetchYourUser = async (id, token) =>
  await (
    await fetch(`/api/v1/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const fetchAuthData = async (fetchFn, user, setUser) => {
  const tokenResponse = await checkToken(user.token);
  if (tokenResponse.status === 200) {
    return await fetchFn(user.token);
  }
  const generateTokenResponse = await generateTokens(user.refreshToken);
  if (generateTokenResponse.status === 201) {
    setUser({
      ...user,
      token: generateTokenResponse.data.authorization,
      refreshToken: generateTokenResponse.data.refreshToken,
    });
    return await fetchFn(generateTokenResponse.data.authorization);
  }
};

const fetchAuthDataWithParam = async (fetchFn, user, setUser, param) => {
  const tokenResponse = await checkToken(user.token);
  if (tokenResponse.status === 200) {
    return await fetchFn(param, user.token);
  }
  const generateTokenResponse = await generateTokens(user.refreshToken);
  if (generateTokenResponse.status === 201) {
    setUser({
      ...user,
      token: generateTokenResponse.data.authorization,
      refreshToken: generateTokenResponse.data.refreshToken,
    });
    return await fetchFn(param, generateTokenResponse.data.authorization);
  }
};

const fetchAuthDataPost = async (fetchFn, user, setUser, data) => {
  const tokenResponse = await checkToken(user.token);
  if (tokenResponse.status === 200) {
    return await fetchFn(data, user.token);
  }
  const generateTokenResponse = await generateTokens(user.refreshToken);
  if (generateTokenResponse.status === 201) {
    setUser({
      ...user,
      token: generateTokenResponse.data.authorization,
      refreshToken: generateTokenResponse.data.refreshToken,
    });
    return await fetchFn(data, generateTokenResponse.data.authorization);
  }
};

const fetchUserVerification = async (url) =>
  await (
    await fetch(`/api/v1/users${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

const fetchUpdateUser = async (data, token) => {
  const res = await fetch('/api/v1/users/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const resJSON = await res.json();
  return resJSON;
};

const fetchUserRating = async (data, token) =>
  await (
    await fetch(`/api/v1/users/ratings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  ).json();

const fetchUserRatingUpdate = async (data, token, id) => {
  const res = await fetch(`/api/v1/users/ratings`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const resJSON = await res.json();
  return resJSON;
};



export {
  fetchAuthData,
  fetchAuthDataPost,
  fetchAuthDataWithParam,
  fetchLogin,
  fetchRegister,
  fetchUpdateUser,
  fetchUser,
  fetchUserRating,
  fetchUserRatingUpdate,
  fetchUserVerification,
  fetchYourUser,
};
