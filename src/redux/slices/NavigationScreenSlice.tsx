import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  page: '',
};

const NavigationScreenSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
  },
});

export const {setPage} = NavigationScreenSlice.actions;
export default NavigationScreenSlice.reducer;
