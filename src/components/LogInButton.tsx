import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './LoginButtonStyle';

interface Props {
  text: string;
  isVisible?: boolean;
  action?: () => void;
}

export const LoginButton = ({text, isVisible, action}: Props) => {
  return (
    <Pressable
      style={{...(isVisible ? styles.notVisible : styles.visible)}}
      onPress={action}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
