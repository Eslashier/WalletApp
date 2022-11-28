import {BackHandler} from 'react-native';
import React from 'react';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {useEffect} from 'react';
import {ThemeSelector} from '../screens/ThemeSelector';

export default function ThemeSelectorScreen({navigation}: MyStackScreenProps) {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        navigation.navigate('BottomTabsNavigator');
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  const goBack = () => {
    navigation.navigate('Wallet App');
  };

  return <ThemeSelector action={goBack} />;
}
