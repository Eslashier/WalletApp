import React, {useEffect, useState} from 'react';
import {transactionType} from '../../redux/slices/TransactionsSlice';
import {Transaction} from '../Transaction/Transaction';
import defaultImages from '../../assets/themes/3/default';
import {selectClientState} from '../../redux/slices/ClientSlice';
import {useSelector} from 'react-redux';
import artsImages from '../../assets/themes/1/arts';
import foodImages from '../../assets/themes/2/food';
import musicImages from '../../assets/themes/4/music';
import natureImages from '../../assets/themes/5/nature';
import activityImages from '../../assets/themes/6/activity';
import fashionImages from '../../assets/themes/7/fashion';
import technologyImages from '../../assets/themes/8/technology';
import travelImages from '../../assets/themes/9/travel';

interface Props {
  transactions: Array<transactionType>;
  theme?: any;
}

export const Transactions = ({transactions, theme}: Props) => {
  return (
    <>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          text={transaction.reason}
          value={transaction.amount.toString()}
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
  );
};
