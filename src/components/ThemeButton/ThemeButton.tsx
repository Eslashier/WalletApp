import React from 'react';
import {Image, ImageSourcePropType, Pressable, Text} from 'react-native';
import {styles} from './ThemeButtonStyle';

interface Props {
  text: string;
  img: ImageSourcePropType;
  theme: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeButton = ({text, img, theme, state, setState}: Props) => {
  return (
    <Pressable
      style={state === theme ? styles.containerSelected : styles.container}
      onPress={() => setState(theme)}>
      <Image style={styles.imageSize} source={img} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
