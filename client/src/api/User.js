/* eslint-disable consistent-return */
const fetchRegister = async (data) => {
  const { emailRegister: email, password } = data;
  const user = { email, password };
  const res = await (
    await fetch('/api/v1/users/register', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user),
    })
  ).json();
  return res;
};

const fetchLogin = async (data) => {
  const { emailLogin: email, passwordLogin: password } = data;
  const user = { email, password };
  const res = await (
    await fetch('/api/v1/users/login', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(user),
    })
  ).json();
  return res;
};

const checkToken = async (token) =>
  await (
    await fetch('/api/v1/users/checkToken', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
  ).json();
const generateTokens = async (token) =>
  await (
    await fetch('/api/v1/users/generateTokens', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
  ).json();

const fetchUser = async (token) => {
  const res = await (
    await fetch('/api/v1/users/', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
  ).json();
  return res;
};

const fetchAuthData = async (fetchFn, user, setUser) => {
  const tokenResponse = await checkToken(user.token);
  if (tokenResponse.status === 200) {
    return await fetchFn(user.token);
  }
  const generateTokenResponse = await generateTokens(user.refreshToken);
  console.log('[GenerateToken]', generateTokenResponse);
  setUser({
    ...user,
    token: generateTokenResponse.data.authorization,
    refreshToken: generateTokenResponse.data.refreshToken,
  });
  return await fetchFn(generateTokenResponse.data.authorization);
};

const fetchAuthDataPost = async (fetchFn, user, setUser, data) => {
  const tokenResponse = await checkToken(user.token);
  if (tokenResponse.status === 200) {
    return await fetchFn(data, user.token);
  }
  const generateTokenResponse = await generateTokens(user.refreshToken);
  console.log('[GenerateToken]', generateTokenResponse);
  if (generateTokenResponse.status === 200) {
    setUser({
      ...user,
      token: generateTokenResponse.data.authorization,
      refreshToken: generateTokenResponse.data.refreshToken,
    });
    return await fetchFn(data, generateTokenResponse.data.authorization);
  }
};

const fetchUserVerification = async (url) => {
  const res = await (
    await fetch(`/api/v1/users${url}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
  ).json();
  return res;
};

export {
  fetchRegister,
  fetchLogin,
  fetchUser,
  fetchUserVerification,
  fetchAuthData,
  fetchAuthDataPost,
};
