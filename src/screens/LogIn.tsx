import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Divider} from '../components/Divider';
import {LoginButton} from '../components/LogInButton';
import {LoginWithButton} from '../components/LogInWithButton';
import {styles} from '../theme/LoginStyle';

export const LogIn = () => {
  const [nextVisibility, setNextVisibility] = useState(false);
  const [logInVisibility, setLogInVisibility] = useState(true);

  const validateEmail = () => {
    setNextVisibility(true);
    setLogInVisibility(false);
  };

  const logIn = () => {
    return;
  };

  const back = () => {
    setNextVisibility(false);
    setLogInVisibility(true);
  };

  return (
    <>
      <View style={styles.containerLogo}>
        <Text style={styles.content}>Wallet App</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.content}>
          Create an account or log into WalletApp
        </Text>
        <View style={{...(nextVisibility ? styles.notVisible : '')}}>
          <TextInput placeholder="Email or phonenumber" style={styles.input} />
          <LoginButton
            text="Next"
            action={() => {
              validateEmail();
            }}
          />
          <Divider text="Register" />
        </View>
        <View
          style={{
            ...(logInVisibility ? styles.notVisible : ''),
          }}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
          <LoginButton
            text="Log in"
            action={() => {
              logIn();
            }}
          />
          <LoginButton
            text="Go back"
            isVisible={logInVisibility}
            action={() => {
              back();
            }}
          />
          <Divider text="or use" />
        </View>
        <View>
          <LoginWithButton text={'Sign in With Google'} />
        </View>
      </View>
    </>
  );
};
