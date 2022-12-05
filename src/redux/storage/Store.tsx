import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import AuthReducer from '../slices/AuthSlice';
import userExistsReducer from '../slices/UserExistSlice';
import registerClientReducer from '../slices/RegisterSlice';
import clientReducer from '../slices/ClientSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    userExists: userExistsReducer,
    registerClient: registerClientReducer,
    client: clientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
