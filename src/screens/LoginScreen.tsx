import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/LoginStyle';
import {LoginButton} from '../components/LoginButton/LogInButton';

const LoginScreen = ({navigation}: any) => {
  const {loggedIn} = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('Wallet App');
    }
  }, [loggedIn]);

  const {login} = useContext(AuthContext);

  return (
    <>
      <View style={styles.containerLogo}>
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
