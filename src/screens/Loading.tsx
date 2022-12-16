import React from 'react';
import {View, Image, Text} from 'react-native';
import logo from '../assets/log/logo';
import {styles} from '../theme/LoginStyle';

export const Loading = () => {
  return (
    <>
      <View style={styles.containerTop}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.content}>Loading</Text>
      </View>
    </>
  );
};
