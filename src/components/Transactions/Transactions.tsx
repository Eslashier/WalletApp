import React from 'react';
import images from '../../assets/images/images';
import {Transaction} from '../Transaction/Transaction';

interface Props {
  transactions: Array<any>;
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
          account={transaction.outcomeAccount}
        />
      ))}
    </>
  );
};
