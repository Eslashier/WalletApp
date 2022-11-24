import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './ColorButtonStyle';

interface Props {
  text: string;
  color: string;
  action?: () => void;
}

export const ColorButton = ({text, color, action}: Props) => {
  return (
    <Pressable
      style={{...(color === 'white' ? styles.whiteButton : styles.blueButton)}}
      onPress={action}>
      <Text
        style={{...(color === 'white' ? styles.blueText : styles.whiteText)}}>
        {text}
      </Text>
    </Pressable>
  );
};
