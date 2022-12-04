import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLogout(state) {
      state.token = '';
    },
  },
});

export const {setToken, setLogout} = AuthSlice.actions;
export default AuthSlice.reducer;
