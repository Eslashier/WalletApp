import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {appType} from '../../redux/slices/ClientSlice';

const registerClientAPI = urlApi + '/app/';

export type appChangeThemeType = {
  appId: string;
  color: Object;
  idToken?: string;
};

export const updateTheme = createAsyncThunk(
  'updateTheme',
  async (themeObject: appChangeThemeType) => {
    const response = await fetch(registerClientAPI + `${themeObject.appId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'Bearer ' + themeObject.idToken,
      },
      body: JSON.stringify(themeObject.color),
    });
    return (await response.json()) as appType;
  },
);
