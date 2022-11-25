import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconPassword} from '../components/InputIcon/InputIcon';

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
          <InputIcon icon="image" placeholder="Photo" setState={setPhoto} />
          <InputIcon icon="user" placeholder="Full Name" setState={setName} />
          <InputIcon icon="mail" placeholder="E-mail" setState={setEmail} />
          <InputIcon
            icon="phone"
            placeholder="Phone Number"
            setState={setPhone}
          />
          <InputIconPassword
            icon="key"
            placeholder="Password"
            setState={setPassword}
          />
          <InputIconPassword
            icon="key"
            placeholder="Confirm Password"
            setState={setVerifyPassword}
          />
          <LoginButton text="Register" action={() => register()} />
        </View>
      </View>
    </>
  );
};
