import {createSlice} from '@reduxjs/toolkit';
import {possibleStatus} from '../../config/possibleStatus';
import {getTransactions} from '../../services/Transactions/getTransactions';
import {RootState} from '../storage/Store';

type transactionType = {
  id: string;
  incomeAccountId: string;
  outcomeAccountId: string;
  reason: string;
  amount: string;
  fees: 1;
  dateTime: Date;
};

interface InitialStateType {
  transactions: transactionType[];
  status: possibleStatus;
  error: string | null;
}

const initialState: InitialStateType = {
  transactions: [],
  status: possibleStatus.IDLE,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'client',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTransactions.pending, state => {
      state.status = possibleStatus.PENDING;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
      state.status = possibleStatus.COMPLETED;
      state.error = null;
    });
    builder.addCase(getTransactions.rejected, state => {
      state.status = possibleStatus.FAILED;
      state.error = 'Something went wrong fetching the client data';
    });
  },
});

export type {transactionType};

export default transactionsSlice.reducer;

export const selectTransactionState = () => (state: RootState) =>
  state.transactions.transactions;
export const selectTransactionStatus = () => (state: RootState) =>
  state.transactions.status;
export const selectTransactionFetchError = () => (state: RootState) =>
  state.transactions.error;
