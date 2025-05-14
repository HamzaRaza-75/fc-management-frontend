import { api } from '@config/axios';

export const login = async (data) => {
  try {
    const response = await api.post('/login', data);
    return response;
  } catch (err) {
    throw err;
  }
};

export const signup = async (data) => {
  try {
    const response = await api.post('/register', data);
    return response;
  } catch (err) {
    throw err;
  }
};
