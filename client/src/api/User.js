import { meFetch } from './ApiClient';

export const fetchRegister = async (data) => {
  const { emailRegister: email, password } = data;
  const user = { email, password };
  return await meFetch.request('/api/v1/users/register', 'POST', user, null);
};

export const fetchLogin = async (data) => {
  const { emailLogin: email, passwordLogin: password } = data;
  const user = { email, password };
  return await meFetch.request('/api/v1/users/login', 'POST', user, null);
};

export const checkToken = async (token) =>
  await meFetch.request('/api/v1/users/checkToken', 'GET', null, token);

export const generateTokens = async (token) =>
  await meFetch.request('/api/v1/users/generateTokens', 'GET', null, token);

export const fetchUser = async (token) =>
  await meFetch.request('/api/v1/users/', 'GET', null, token);

export const fetchYourUser = async (id, token) =>
  await meFetch.request(`/api/v1/users/${id}`, 'GET', null, token);

export const fetchAuthData = async (fetchFn, user, setUser) => {
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

export const fetchAuthDataWithParam = async (fetchFn, user, setUser, param) => {
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

export const fetchAuthDataPost = async (fetchFn, user, setUser, data) => {
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

export const fetchUserVerification = async (url) =>
  await meFetch.request(`/api/v1/users${url}`, 'GET', null, null);

export const fetchUpdateUser = async (data, token) =>
  await meFetch.request('/api/v1/users/', 'PUT', data, token);

export const fetchUserRating = async (data, token) =>
  await meFetch.request(`/api/v1/users/ratings`, 'POST', data, token);

export const fetchUserRatingUpdate = async (data, token, id) =>
  await meFetch.request(`/api/v1/users/ratings`, 'PUT', data, token);
