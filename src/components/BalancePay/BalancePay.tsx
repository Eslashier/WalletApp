import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './BalancePayStyle';

interface Props {
  balance: string;
  text: string;
}

export const BalancePay = ({balance, text}: Props) => {
  return (
    <View>
      <Text style={styles.balance}>
        {'$ ' + balance.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
      </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
