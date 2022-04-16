import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fintu-api.herokuapp.com/',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      };
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/';
    }
    throw error;
  }
);

export default api;
