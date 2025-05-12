import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  let token = localStorage.getItem('autherization');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
