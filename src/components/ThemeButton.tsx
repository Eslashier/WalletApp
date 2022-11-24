import React from 'react';
import {Image, ImageSourcePropType, Pressable, Text} from 'react-native';
import {styles} from './ThemeButtonStyle';

interface Props {
  text: string;
  img: ImageSourcePropType;
  action?: () => void;
}

export const ThemeButton = ({text, img, action}: Props) => {
  return (
    <Pressable style={styles.container} onPress={action}>
      <Image style={styles.imageSize} source={img} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
