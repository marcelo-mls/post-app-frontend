import axios from 'axios';

const port = '3001';

const configOptions = {
  baseURL: `http://localhost:${port}/`,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
};

// const tokenJWT = localStorage.getItem('token');
// if (tokenJWT) {
//   headers.Authorization = `Bearer ${tokenJWT}`;
// }

const API = axios.create(configOptions);

export default API;
