import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LogInButton';
import {styles} from './RegisterStyle';
import {InputIcon, InputIconPassword} from '../components/InputIcon';

export const Register = () => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const register = () => {
    console.log(photo);
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(password);
    console.log(verifyPassword);
    return;
  };

  return (
    <>
      <View style={styles.containerForm}>
        <Text style={styles.content}>Register</Text>
        <View>
          <InputIcon icon="instagram" placeholder="Photo" setState={setPhoto} />
          <InputIcon icon="guest" placeholder="Full Name" setState={setName} />
          <InputIcon icon="email" placeholder="E-mail" setState={setEmail} />
          <InputIcon
            icon="call"
            placeholder="Phone Number"
            setState={setPhone}
          />
          <InputIconPassword
            icon="pinboard"
            placeholder="Password"
            setState={setPassword}
          />
          <InputIconPassword
            icon="pinboard"
            placeholder="Confirm Password"
            setState={setVerifyPassword}
          />
          <LoginButton text="Register" action={() => register()} />
        </View>
      </View>
    </>
  );
};
