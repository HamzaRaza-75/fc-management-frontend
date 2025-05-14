import { api } from '@config/axios';

export const login = async (data) => {
  try {
    const response = await api.post('/login', data);
    const { access_token } = response.data.data;
    localStorage.setItem('autherization', access_token);
    return response;
  } catch (err) {
    throw err;
  }
};

export const signup = async (data) => {
  try {
    const response = await api.post('/register', data);
    const { access_token } = response.data.data;
    localStorage.setItem('autherization', access_token);
    return response;
  } catch (err) {
    throw err;
  }
};
