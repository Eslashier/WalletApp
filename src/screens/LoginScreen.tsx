import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/LoginStyle';
import {LoginButton} from '../components/LoginButton/LogInButton';
import logo from '../assets/log/logo';

const LoginScreen = () => {
  const {login} = useContext(AuthContext);

  return (
    <>
      <View style={styles.containerTop}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.content}>Wallet App</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.content}>
          Create an account or log into WalletApp
        </Text>
        <View>
          <LoginButton text="Login or Register" action={() => login()} />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
