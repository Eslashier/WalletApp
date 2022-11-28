import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './LateralButtonStyle';

interface PropsString {
  icon: string;
  text: string;
  action: () => void;
}

export const LateralButton = ({icon, text, action}: PropsString) => {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Icon name={icon} color="grey" size={25} />
      </View>
      <Pressable style={styles.button} onPress={action}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};
