import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';

const checkUserAPI = urlApi + '/client/account-exist/';

export const checkUserToSendExist = createAsyncThunk(
  'checkUserToSendExist',
  async (userData: any) => {
    const response = await fetch(checkUserAPI + `${userData.info}`, {
      headers: {
        authorization: 'Bearer ' + userData.idToken,
      },
    });
    return (await response.json()) as boolean;
  },
);
