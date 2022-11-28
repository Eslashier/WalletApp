import React, {useState} from 'react';
import {MyDrawerContentComponentProps} from '../interfaces/MyDrawerContentComponentProps';
import {useDispatch} from 'react-redux';
import {Image, Text, View} from 'react-native';
import {setLogout} from '../redux/slices/AuthSlice';
import images from '../assets/images/images';
import {styles} from '../theme/LateralMenuStyle';
import {LateralButton} from '../components/LateralButton/LateralButton';

export const LateralMenu = ({navigation}: MyDrawerContentComponentProps) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogout());
    navigation.navigate('AuthScreen');
  };

  const [name, setName] = useState('User`s name');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageSize} source={images[1]} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <LateralButton
          icon={'settings'}
          text={'Change Password'}
          action={() => navigation.navigate('StackNavigation')}
        />
        <LateralButton
          icon={'tool'}
          text={'Change app theme'}
          action={() => navigation.navigate('StackNavigation')}
        />
        <LateralButton icon={'x'} text={'Log out'} action={logout} />
      </View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={images[1]} />
      </View>
    </View>
  );
};
