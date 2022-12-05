import {createSlice} from '@reduxjs/toolkit';
import {possibleStatus} from '../../config/possibleStatus';

import {registerClient} from '../../services/Clients/registerClient';
import {RootState} from '../storage/Store';

type registerClientType = {
  fullName: string;
  email: string;
  phone: number;
  photo: string;
};

interface initialStateType {
  status: possibleStatus;
  error: string | null;
}

const initialState: initialStateType = {
  status: possibleStatus.IDLE,
  error: null,
};

const registerSlice = createSlice({
  name: 'registerClient',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerClient.pending, state => {
      state.status = possibleStatus.PENDING;
    });
    builder.addCase(registerClient.fulfilled, state => {
      state.status = possibleStatus.COMPLETED;
    });
    builder.addCase(registerClient.rejected, state => {
      state.status = possibleStatus.FAILED;
      state.error = 'Something went wrong registering the client';
    });
  },
});

export type {registerClientType};
export type {initialStateType};
export default registerSlice.reducer;

export const selectUserExistsState = () => (state: RootState) =>
  state.userExists.exists;
export const selectUserExistsStatus = () => (state: RootState) =>
  state.userExists.status;
export const selectUserExistsFetchError = () => (state: RootState) =>
  state.userExists.error;
