import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon} from '../components/InputIcon/InputIcon';
import {AuthContext} from '../context/AuthContext';

export const Register = () => {
  const {userData} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);

  useEffect(() => {
    if (userData) {
      setName(userData.name);
    }
  }, [userData]);

  const register = () => {
    if (nameError.length === 0 && phone.length === 10) {
      console.log(name);
      console.log(phone);
    } else {
      setNameError('Please enter a valid name');
      setPhoneError('Please specify a valid phone number');
    }
    return;
  };

  useEffect(() => {
    const email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.test(name)) {
      setNameError('Please input a valid name');
    } else {
      setNameError('');
    }
    console.log(name);
  }, [name]);

  useEffect(() => {
    const number = /^(?:\d{10})$/;
    if (phone.length === 0) {
      setPhoneError('Please specify a valid phone number');
    } else if (!number.test(phone)) {
      setPhoneError('Please input a phone number');
    } else {
      setPhoneError('');
    }
  }, [phone]);

  return (
    <>
      <View style={styles.main}>
        <View style={styles.containerLogo}>
          <Text style={styles.content}>Please verify your information</Text>
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.inputTag}>Name</Text>
          <InputIcon
            icon="user"
            placeholder="Full Name"
            setState={setName}
            state={name}
            error={nameError}
          />
          <Text style={styles.inputTag}>Phone number</Text>
          <InputIcon
            icon="phone"
            placeholder="Phone Number"
            setState={setPhone}
            state={phone}
            touched={phoneTouched}
            setTouched={setPhoneTouched}
            error={phoneError}
          />
          <LoginButton text="Register" action={() => register()} />
        </View>
      </View>
    </>
  );
};
