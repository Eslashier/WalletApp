import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {BalanceMain} from '../components/BalanceMain/BalanceMain';
import {styles} from '../theme/MainStyle';
import {TRANSACTIONS} from '../shared/transactions';
import {Transactions} from '../components/Transactions/Transactions';

export const Main = () => {
  const [balance, setBalance] = useState(50000000);

  const transactions = TRANSACTIONS;

  return (
    <>
      <View style={styles.containerForm}>
        <BalanceMain
          balance={balance.toString()}
          text={'Balance in your account'}
        />
        <View style={styles.transactions}>
          <ScrollView>
            <Transactions transactions={transactions} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
