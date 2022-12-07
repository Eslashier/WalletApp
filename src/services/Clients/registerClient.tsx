import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {clientType} from '../../redux/slices/ClientSlice';
import {registerClientType} from '../../redux/slices/RegisterSlice';

const registerClientAPI = urlApi + '/client';

export const registerClient = createAsyncThunk(
  'registerClient',
  async (client: registerClientType) => {
    const response = await fetch(registerClientAPI, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(client),
    });
    return (await response.json()) as clientType;
  },
);
