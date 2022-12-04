import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from '../slices/AuthSlice';

export const ConfigStorage = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
