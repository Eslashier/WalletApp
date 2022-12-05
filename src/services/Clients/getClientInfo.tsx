import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {clientType} from '../../redux/slices/ClientSlice';

const checkUserAPI = urlApi + '/client/';

export const getClientInfo = createAsyncThunk(
  'checkUserExist',
  async (userData: any) => {
    const response = await fetch(checkUserAPI + `${userData.email}`, {
      headers: {
        authorization: 'Bearer ' + userData.idToken,
      },
    });
    const data: clientType = await response.json();
    return await data;
  },
);
