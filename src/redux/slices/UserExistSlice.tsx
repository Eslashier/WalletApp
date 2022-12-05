import {createSlice} from '@reduxjs/toolkit';
import {possibleStatus} from '../../config/possibleStatus';
import {checkUserExist} from '../../services/Clients/userExists';

import {RootState} from '../storage/Store';

interface initialStateType {
  exists: boolean;
  status: possibleStatus;
  error: string | null;
}

const initialState: initialStateType = {
  exists: false,
  status: possibleStatus.IDLE,
  error: null,
};

const existsSlice = createSlice({
  name: 'userExists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(checkUserExist.pending, state => {
      state.status = possibleStatus.PENDING;
    });
    builder.addCase(checkUserExist.fulfilled, (state, action) => {
      state.status = possibleStatus.COMPLETED;
      state.exists = action.payload;
    });
    builder.addCase(checkUserExist.rejected, state => {
      state.status = possibleStatus.FAILED;
      state.error = 'Something went wrong fetching the existence of the user';
    });
  },
});

export type {initialStateType};
export default existsSlice.reducer;

export const selectUserExistsState = () => (state: RootState) =>
  state.userExists.exists;
export const selectUserExistsStatus = () => (state: RootState) =>
  state.userExists.status;
export const selectUserExistsFetchError = () => (state: RootState) =>
  state.userExists.error;
