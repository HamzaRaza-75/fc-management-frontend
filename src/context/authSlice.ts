import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

export interface AuthUser {
  iss: string | null;            // issuer
  iat: number | null;            // issued at
  exp: number | null;            // expiry
  nbf: number | null;            // not before
  jti: string | null;            // JWT ID
  sub: string | null;            // subject (likely user ID)
  prv: string | null;            // private claim (could be session ID or similar)
  role: string[] | null;         // roles array (can be empty)
  name: string | null;
  email: string | null;
}


const token = localStorage.getItem('autherization');
const initialState = {
  user: token ? jwtDecode(token) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = jwtDecode(action.payload);
      localStorage.setItem('authorization', action.payload);
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('authorization');
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
