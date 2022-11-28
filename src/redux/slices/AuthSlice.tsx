import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  isAuth: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLogin(state) {
      state.isAuth = true;
    },
    setLogout(state) {
      state.token = '';
      state.isAuth = false;
    },
  },
});

export const {setToken, setLogin, setLogout} = AuthSlice.actions;
export default AuthSlice.reducer;
