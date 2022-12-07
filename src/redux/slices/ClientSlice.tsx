import {createSlice} from '@reduxjs/toolkit';
import {possibleStatus} from '../../config/possibleStatus';
import {getClientInfo} from '../../services/Clients/getClientInfo';
import {RootState} from '../storage/Store';

type clientType = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  photo: string;
  state: 1;
  createdDate: Date | null;
  updatedDate: Date | null;
  deletedDate: null;
  app: appType;
  account: accountType;
};

type appType = {
  id: string;
  clientId: string;
  color: string;
  createdDate: Date | null;
  updatedDate: Date | null;
};

type accountType = {
  id: string;
  clientId: string;
  balance: string;
  credit: string;
  state: number;
  createdDate: Date | null;
  updatedDate: Date | null;
  deletedDate: null;
};

interface initialStateType {
  client: clientType;
  status: possibleStatus;
  error: string | null;
}

const initialState: initialStateType = {
  client: {
    id: '',
    fullName: '',
    email: '',
    phone: '',
    photo: 'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png',
    state: 1,
    createdDate: null,
    updatedDate: null,
    deletedDate: null,
    app: {
      id: '',
      clientId: '',
      color: '',
      createdDate: null,
      updatedDate: null,
    },
    account: {
      id: '',
      clientId: '',
      balance: '0',
      credit: '0',
      state: 1,
      createdDate: null,
      updatedDate: null,
      deletedDate: null,
    },
  },
  status: possibleStatus.IDLE,
  error: null,
};

const clientSlice = createSlice({
  name: 'client',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getClientInfo.pending, state => {
      state.status = possibleStatus.PENDING;
    });
    builder.addCase(getClientInfo.fulfilled, (state, action) => {
      state.status = possibleStatus.COMPLETED;
      state.client = {...action.payload};
      state.error = null;
    });
    builder.addCase(getClientInfo.rejected, state => {
      state.status = possibleStatus.FAILED;
      state.error = 'Something went wrong fetching the client data';
    });
  },
});

export type {clientType, appType, accountType};

export default clientSlice.reducer;

export const selectClientState = () => (state: RootState) =>
  state.client.client;
export const selectClientStatus = () => (state: RootState) =>
  state.client.status;
export const selectClientFetchError = () => (state: RootState) =>
  state.client.error;
