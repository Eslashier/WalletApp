import {BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {ChangePassword} from '../screens/ChangePassword';

export default function ChangePasswordScreen({navigation}: MyStackScreenProps) {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        navigation.navigate('Wallet App');
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

  return <ChangePassword action={goBack} />;
}
