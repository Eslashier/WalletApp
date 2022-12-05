import {createSlice} from '@reduxjs/toolkit';
import {possibleStatus} from '../../../config/possibleStatus';

type registerClientType = {
  name: string;
  email: string;
  phone: number;
  photo: string;
};

interface initialStateType {
  registerClient: registerClientType | null;
  status: possibleStatus;
  error: string | null;
}

const initialState: initialStateType = {
  registerClient: null,
  status: possibleStatus.IDLE,
  error: null,
};

const registerSlice = createSlice({
  name: 'registerClient',
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

export type {registerClientType};
export type {initialStateType};
export default registerSlice.reducer;
