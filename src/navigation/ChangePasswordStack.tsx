import {BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {ChangePassword} from '../screens/ChangePassword';

export default function ChangePasswordScreen({navigation}: MyStackScreenProps) {
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
    navigation.navigate('BottomTabsNavigator');
  };

  return <ChangePassword action={goBack}/>;
}
