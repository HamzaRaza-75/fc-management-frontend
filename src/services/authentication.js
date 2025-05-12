import { api } from '@config/axios';

export const login = async (data, seterror) => {
  try {
    const response = await api.post('/login', data);
    const { access_token } = response.data.data;
    localStorage.setItem('autherization', access_token);
  } catch (err) {
    throw err;
  }
};
