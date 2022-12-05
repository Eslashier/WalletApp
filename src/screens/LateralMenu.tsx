import React, {useContext} from 'react';
import {MyDrawerContentComponentProps} from '../interfaces/MyDrawerContentComponentProps';
import {Image, Text, View} from 'react-native';
import images from '../assets/images/images';
import {styles} from '../theme/LateralMenuStyle';
import {LateralButton} from '../components/LateralButton/LateralButton';
import {AuthContext} from '../context/AuthContext';
import {useSelector} from 'react-redux';
import {selectClientState} from '../redux/slices/ClientSlice';

export const LateralMenu = ({navigation}: MyDrawerContentComponentProps) => {
  const {logout} = useContext(AuthContext);
  const userInfo = useSelector(selectClientState());

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageSize} source={{uri: userInfo?.photo}} />
        <Text style={styles.name}>{userInfo?.fullName}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <LateralButton
          icon={'settings'}
          text={'Change Password'}
          action={() => navigation.navigate('Change password')}
        />
        <LateralButton
          icon={'tool'}
          text={'Change app theme'}
          action={() => navigation.navigate('Change your theme')}
        />
        <LateralButton icon={'x'} text={'Log out'} action={() => logout()} />
      </View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={images[1]} />
      </View>
    </View>
  );
};
