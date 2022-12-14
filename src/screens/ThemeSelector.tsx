import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/ThemesStyle';
import {ThemeButton} from '../components/ThemeButton/ThemeButton';
import images from '../assets/images/images';
import {ColorButtonSmaller} from '../components/ColorButton/ColorButton';

interface Props {
  action: () => void;
}

export const ThemeSelector = ({action}: Props) => {
  return (
    <>
      <View style={styles.buttons}>
        <Text style={styles.content}>Choose your theme</Text>
        <Text style={styles.subText}>You can change the theme anytime</Text>
        <View style={styles.containerRow}>
          <ThemeButton text={'Theme 1'} img={images[1]} />
          <ThemeButton text={'Theme 2'} img={images[2]} />
          <ThemeButton text={'Theme 3'} img={images[3]} />
        </View>
        <View style={styles.containerRow}>
          <ThemeButton text={'Theme 1'} img={images[1]} />
          <ThemeButton text={'Theme 2'} img={images[2]} />
          <ThemeButton text={'Theme 3'} img={images[3]} />
        </View>
        <View style={styles.containerRow}>
          <ThemeButton text={'Theme 1'} img={images[1]} />
          <ThemeButton text={'Theme 2'} img={images[2]} />
          <ThemeButton text={'Theme 3'} img={images[3]} />
        </View>
        <View style={styles.buttons}>
          <View style={styles.containerRowButtons}>
            <ColorButtonSmaller
              text={'Cancel'}
              color={'white'}
              action={action}
            />
            <ColorButtonSmaller text={'Accept'} color={'blue'} />
          </View>
        </View>
      </View>
    </>
  );
};
