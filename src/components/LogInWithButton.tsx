import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './LoginWithButtonStyle';

interface Props {
  text: string;
  action?: () => void;
}

export const LoginWithButton = ({text, action}: Props) => {
  return (
    <Pressable style={styles.loginWith} onPress={action}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
