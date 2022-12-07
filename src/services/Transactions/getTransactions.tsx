import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {transactionType} from '../../redux/slices/TransactionsSlice';

const checkUserAPI = urlApi + '/movement/';

export const getTransactions = createAsyncThunk(
  'getTransactions',
  async (accountInfo: any) => {
    const response = await fetch(checkUserAPI + accountInfo.accountId, {
      headers: {
        authorization: 'Bearer ' + accountInfo.idToken,
      },
    });
    const transactions: transactionType[] = await response.json();
    return transactions;
  },
);
