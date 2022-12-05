import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './BalanceMainStyle';

interface Props {
  balance: string;
  text: string;
}

export const BalanceMain = ({balance, text}: Props) => {
  return (
    <View style={styles.balance}>
      <Text style={styles.textBalance}>
        {balance
          ? '$ ' + balance.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
          : '$ 0'}
      </Text>
      <Text style={styles.aditionalText}>{text}</Text>
    </View>
  );
};
