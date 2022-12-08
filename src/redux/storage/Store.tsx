import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import AuthReducer from '../slices/AuthSlice';
import userExistsReducer from '../slices/UserExistSlice';
import registerClientReducer from '../slices/RegisterSlice';
import clientReducer from '../slices/ClientSlice';
import transactionReducer from '../slices/TransactionsSlice';
import accountToSendReducer from '../slices/UserToSendSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    userExists: userExistsReducer,
    registerClient: registerClientReducer,
    client: clientReducer,
    transactions: transactionReducer,
    accountToSend: accountToSendReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
