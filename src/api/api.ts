import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', // Android 에뮬레이터
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default api;
