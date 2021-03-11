import axios from 'axios';

/* eslint-disable consistent-return */
const fetchRegister = async (data) => {
  const { emailRegister: email, password } = data;
  const user = { email, password };
  const res = await (
    await fetch('/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
  ).json();
  return res;
};

const fetchLogin = async (data) => {
  const { emailLogin: email, passwordLogin: password } = data;
  const user = { email, password };
  try {
    const res = await axios.post(
      'http://yourplaceappdev.herokuapp.com:8080/api/v1/users/login',
      user
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }

  // const res = await (
  //   await fetch('/api/v1/users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })
  // ).json();
  // return res;
};

const checkToken = async (token) => {
  const res = await (
    await fetch('/api/v1/users/checkToken', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
  return res;
};

const generateTokens = async (token) => {
  const res = await (
    await fetch('/api/v1/users/generateTokens', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
  return res;
};
const fetchUser = async (token) => {
  const res = await (
    await fetch('/api/v1/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
  return res;
};

const fetchAuthData = async (fetchFn, user, setUser) => {
  const tokenResponse = await checkToken(user.token);
  if (tokenResponse.status === 200) {
    const res = await fetchFn(user.token);
    return res;
  }
  const generateTokenResponse = await generateTokens(user.refreshToken);
  setUser({
    ...user,
    token: generateTokenResponse.data.authorization,
    refreshToken: generateTokenResponse.data.refreshToken,
  });
  const res = await fetchFn(generateTokenResponse.data.authorization);
  return res;
};

const fetchAuthDataPost = async (fetchFn, user, setUser, data) => {
  const tokenResponse = await checkToken(user.token);
  if (tokenResponse.status === 200) {
    const res = await fetchFn(data, user.token);
    return res;
  }
  const generateTokenResponse = await generateTokens(user.refreshToken);
  if (generateTokenResponse.status === 200) {
    setUser({
      ...user,
      token: generateTokenResponse.data.authorization,
      refreshToken: generateTokenResponse.data.refreshToken,
    });
    const res = await fetchFn(data, generateTokenResponse.data.authorization);
    return res;
  }
};

const fetchUserVerification = async (url) => {
  const res = await (
    await fetch(`/api/v1/users${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
