import {createAsyncThunk} from '@reduxjs/toolkit';
import {urlApi} from '../../config/urlConfig';
import {transactionType} from '../../redux/slices/TransactionsSlice';

const checkUserAPI = urlApi + '/movement';

export type postTransactionType = {
  incomeAccountId: string;
  outcomeAccountId: string;
  reason: string;
  amount: number;
  fees: number;
};

export const postTransactions = createAsyncThunk(
  'postTransactions',
  async (transactionObject: any) => {
    const response = await fetch(checkUserAPI, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'Bearer ' + transactionObject.idToken,
      },
      body: JSON.stringify(transactionObject.transaction),
    });
    const transaction: transactionType = await response.json();
    return transaction;
  },
);
