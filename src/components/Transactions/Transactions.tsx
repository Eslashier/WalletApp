import React from 'react';
import images from '../../assets/images/images';
import {transactionType} from '../../redux/slices/TransactionsSlice';
import {Transaction} from '../Transaction/Transaction';

interface Props {
  transactions: Array<transactionType>;
}

export const Transactions = ({transactions}: Props) => {
  return (
    <>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          text={transaction.reason}
          value={transaction.amount.toString()}
          date={transaction.dateTime}
          img={images[1]}
          accountOutcome={transaction.outcomeAccountId}
          accountIncome={transaction.incomeAccountId}
        />
      ))}
    </>
  );
};
