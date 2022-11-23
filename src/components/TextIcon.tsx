import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './TextIconStyle';

interface Props {
  icon: string;
  tag: string;
  text: number;
}

export const TextIcon = ({icon, tag, text}: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Icon name={icon} color="grey" size={35} />
      </View>
      <View style={styles.input}>
        <Text style={styles.tag}>{tag}</Text>
        <Text style={styles.mainText}>{'$ ' + text}</Text>
      </View>
    </View>
  );
};
