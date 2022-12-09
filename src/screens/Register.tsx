import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon} from '../components/InputIcon/InputIcon';
import {AuthContext} from '../context/AuthContext';
import {registerClientType} from '../redux/slices/RegisterSlice';
import {registerClient} from '../services/Clients/registerClient';
import {useAppDispatch} from '../redux/storage/Store';
import {checkUserExist} from '../services/Clients/userExists';

export const Register = () => {
  const dispatch = useAppDispatch();

  const {userData} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      if (!userData.photo) {
        setPhoto(
          'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png',
        );
      }
    }
  }, [userData]);

  const register = async () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (
      !emailRegex.test(name) &&
      nameError.length === 0 &&
      phone.length === 10
    ) {
      const newClient: registerClientType = {
        fullName: name,
        email: userData.email,
        phone: +phone,
        photo: photo,
      };
      dispatch(registerClient(newClient));
      dispatch(checkUserExist(newClient.email));
    } else {
      if (emailRegex.test(name)) {
        setNameError('Please enter a valid name');
        setNameTouched(true);
      } else {
        setPhoneError('Please specify a valid phone number');
      }
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
            touched={nameTouched}
            setTouched={setNameTouched}
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
