import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {transactionType} from '../../redux/slices/TransactionsSlice';

const checkUserAPI = urlApi + '/movement/';

export const getTransactions = createAsyncThunk(
  'getTransactions',
  async (tokenData: any) => {
    const response = await fetch(checkUserAPI + tokenData.accountId, {
      headers: {
        authorization: 'Bearer ' + tokenData.idToken,
      },
    });
    const transactions: transactionType[] = await response.json();
    return transactions;
  },
);
