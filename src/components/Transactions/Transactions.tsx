import React from 'react';
import {transactionType} from '../../redux/slices/TransactionsSlice';
import {Transaction} from '../Transaction/Transaction';
import defaultImages from '../../assets/themes/3/default';

interface Props {
  transactions: Array<transactionType>;
  theme?: any;
}

export const Transactions = ({transactions, theme}: Props) => {
  return transactions ? (
    <>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          text={transaction.reason}
          value={transaction.amount}
          date={transaction.dateTime}
          img={
            theme
              ? theme[Math.floor(Math.random() * Object.keys(theme).length)]
              : defaultImages[
                  Math.floor(Math.random() * Object.keys(defaultImages).length)
                ]
          }
          accountOutcome={transaction.outcomeAccountId}
          accountIncome={transaction.incomeAccountId}
        />
      ))}
    </>
  ) : (
    <></>
  );
};
