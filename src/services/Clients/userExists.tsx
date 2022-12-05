import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';

const getAllBillsAPI = urlApi + '/client/is-registered/';

export const checkUserExist = createAsyncThunk(
  'checkUserExist',
  async (email: string) => {
    console.log(email);
    const response = await fetch(getAllBillsAPI + `${email}`);
    return (await response.json()) as boolean;
  },
);
