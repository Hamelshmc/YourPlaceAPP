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

const fetchUser = async (user, setUser) => {
  const res = await (
    await fetch('/api/v1/users/', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
  ).json();
  if (res.status === 401) {
    const secondRes = await (
      await fetch('/api/v1/users/', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.refreshToken}`,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      })
    ).json();
    if (secondRes.status === 401) {
      const newToken = await (
        await fetch('/api/v1/users/token', {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.refreshToken}`,
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        })
      ).json();
      setUser({
        ...user,
        token: newToken.data.authorization,
        refreshToken: newToken.data.refreshToken,
      });
    }
    return await (
      await fetch('/api/v1/users/', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.refreshToken}`,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      })
    ).json();
  }
  return res;
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

export { fetchRegister, fetchLogin, fetchUser, fetchUserVerification };
