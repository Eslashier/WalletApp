import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';

const checkUserAPI = urlApi + '/client/account/';

export type accountId = {
  id: string;
};

export const getAccountId = createAsyncThunk(
  'getAccountId',
  async (userData: any) => {
    const response = await fetch(checkUserAPI + `${userData.info}`, {
      headers: {
        authorization: 'Bearer ' + userData.idToken,
      },
    });
    const data: accountId = await response.json();
    console.log(data);
    return data;
  },
);
