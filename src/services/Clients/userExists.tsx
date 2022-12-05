import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';

const checkUserAPI = urlApi + '/client/is-registered/';

export const checkUserExist = createAsyncThunk(
  'checkUserExist',
  async (email: string) => {
    const response = await fetch(checkUserAPI + `${email}`, {
      method: 'GET',
    });
    return (await response.json()) as boolean;
  },
);
