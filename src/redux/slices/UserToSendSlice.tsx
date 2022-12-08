import {createSlice} from '@reduxjs/toolkit';
import {possibleStatus} from '../../config/possibleStatus';
import {getAccountId} from '../../services/Account/getAccountId';
import {checkUserToSendExist} from '../../services/Account/userExists';

import {RootState} from '../storage/Store';

interface initialStateType {
  exists: boolean;
  id: string;
  statusExists: possibleStatus;
  statusId: possibleStatus;
  errorExists: string | null;
  errorId: string | null;
}

const initialState: initialStateType = {
  exists: false,
  id: '',
  statusExists: possibleStatus.IDLE,
  statusId: possibleStatus.IDLE,
  errorExists: null,
  errorId: null,
};

const userToSendSlice = createSlice({
  name: 'userExists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(checkUserToSendExist.pending, state => {
      state.statusExists = possibleStatus.PENDING;
    });
    builder.addCase(checkUserToSendExist.fulfilled, (state, action) => {
      state.statusExists = possibleStatus.COMPLETED;
      state.exists = action.payload;
    });
    builder.addCase(checkUserToSendExist.rejected, state => {
      state.statusExists = possibleStatus.FAILED;
      state.errorExists =
        'Something went wrong fetching the existence of the user';
    });
    builder.addCase(getAccountId.pending, state => {
      state.statusExists = possibleStatus.PENDING;
    });
    builder.addCase(getAccountId.fulfilled, (state, action) => {
      state.statusExists = possibleStatus.COMPLETED;
      state.id = action.payload.id;
    });
    builder.addCase(getAccountId.rejected, state => {
      state.statusExists = possibleStatus.FAILED;
      state.errorExists =
        'Something went wrong fetching the existence of the user';
    });
  },
});

export default userToSendSlice.reducer;

export const selectUserToSendExistsState = () => (state: RootState) =>
  state.accountToSend.exists;
export const selectUserToSendExistsStatus = () => (state: RootState) =>
  state.accountToSend.statusExists;
export const selectUserToSendExistsFetchError = () => (state: RootState) =>
  state.accountToSend.errorExists;
export const selectUserToSendIdState = () => (state: RootState) =>
  state.accountToSend.id;
export const selectUserToSendIdStatus = () => (state: RootState) =>
  state.accountToSend.statusId;
export const selectUserToSendIdFetchError = () => (state: RootState) =>
  state.accountToSend.errorId;
