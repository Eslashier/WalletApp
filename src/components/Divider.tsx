import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './DividerStyle';

interface Props {
  text: string;
  action?: () => void;
}

export const Divider = ({text, action}: Props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.line} />
      <View>
        <Pressable onPress={action}>
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      </View>
      <View style={styles.line} />
    </View>
  );
};
