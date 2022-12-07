import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {transactionType} from '../../redux/slices/TransactionsSlice';

const checkUserAPI = urlApi + '/movement/';

export const postTransactions = createAsyncThunk(
  'postTransactions',
  async (transactionInfo: any) => {
    const response = await fetch(checkUserAPI, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + transactionInfo.idToken,
      },
    });
    const transactions: transactionType[] = await response.json();
    return transactions;
  },
);
