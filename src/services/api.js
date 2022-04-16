import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fintu-api.herokuapp.com/',
});

export default api;
