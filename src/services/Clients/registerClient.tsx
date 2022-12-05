import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {registerClientType} from '../../redux/slices/RegisterSlice';

const getAllBillsAPI = urlApi + '/client';

export const registerClient = createAsyncThunk(
  'checkUserExist',
  async (client: registerClientType) => {
    console.log(client);
    const response = await fetch(getAllBillsAPI, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(client),
    });
    return (await response.json()) as boolean;
  },
);
