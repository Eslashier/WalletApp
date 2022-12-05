import { createSlice } from '@reduxjs/toolkit';
import {possibleStatus} from '../../config/possibleStatus';

type clientType = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  photo: string;
  state: 1;
  createdDate: Date;
  updatedDate: Date | null;
  deletedDate: null;
  app: appType;
  account: accountType;
};

type appType = {
  id: string;
  clientId: string;
  color: string;
  createdDate: Date;
  updatedDate: Date | null;
};

type accountType = {
  id: string;
  clientId: string;
  balance: string;
  credit: string;
  state: number;
  createdDate: Date;
  updatedDate: Date | null;
  deletedDate: null;
};

interface initialStateType {
  registerClient: clientType | null;
  status: possibleStatus;
  error: string | null;
}

const initialState: initialStateType = {
  registerClient: null,
  status: possibleStatus.IDLE,
  error: null,
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
});

export type {clientType, appType, accountType};
export type {initialStateType};
export default clientSlice.reducer;
