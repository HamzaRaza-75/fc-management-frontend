import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@context/authSlice';

export const store = configureStore({
  reducer: { auth: authSlice },
});
