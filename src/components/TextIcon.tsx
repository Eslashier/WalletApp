import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './InputIconStyle';

interface Props {
  icon: string;
  text: number;
}

export const TextIcon = ({icon, text}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Icon name={icon} color="grey" size={35} />
      </View>
      <View style={styles.input}>
        <Text>Loan balance available</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
