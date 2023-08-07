export class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(path, method, data, token) {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(this.baseURL + path, options);
    return await response.json();
  }
}

export const meFetch = new ApiClient('https://yourplace-app-7a5v-dev.fl0.io');
