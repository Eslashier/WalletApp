import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../storage/Store';

type loginClient = {
  name: string;
  email: string;
  picture: string;
  idToken: string;
};

interface initialStateType {
  client: loginClient | null;
}

const initialState: initialStateType = {
  client: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginInfo(state, infoUser) {
      state.client = infoUser.payload;
      return state;
    },
  },
});

export const {setLoginInfo} = AuthSlice.actions;

export default AuthSlice.reducer;

export const selectUserEmail = () => (state: RootState) => state.auth.client;
