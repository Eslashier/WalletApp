import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import logo from '../assets/log/logo';
import {Divider} from '../components/Divider/Divider';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {LoginWithButton} from '../components/LoginWithButton/LogInWithButton';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {setLogin, setToken} from '../redux/slices/AuthSlice';
import {styles} from '../theme/LoginStyle';

export const LogIn = ({navigation}: MyStackScreenProps) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state: any) => state.auth);
  const [nextVisibility, setNextVisibility] = useState(false);
  const [logInVisibility, setLogInVisibility] = useState(true);

  useEffect(() => {
    if (isAuth) {
      navigation.navigate('Wallet App');
    }
  }, [isAuth, navigation]);

  const validateEmail = () => {
    setNextVisibility(true);
    setLogInVisibility(false);
  };

  const logIn = () => {
    dispatch(setToken('token123'));
    dispatch(setLogin());
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
        <Image style={styles.logo} source={logo} />
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
