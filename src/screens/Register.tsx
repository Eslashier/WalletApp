import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Divider} from '../components/Divider';
import {LoginButton} from '../components/LogInButton';
import {styles} from './RegisterStyle';
import Icon from 'react-native-vector-icons/Zocial';

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
          <Icon name="email" color="blue" />
          <TextInput
            placeholder="Photo"
            style={styles.input}
            onChangeText={inputPhoto => setPhoto(inputPhoto)}
          />
          <TextInput
            placeholder="Full name"
            style={styles.input}
            onChangeText={inputName => setName(inputName)}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={inputEmail => setEmail(inputEmail)}
          />
          <TextInput placeholder="Phone number" style={styles.input} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Confirm password"
            style={styles.input}
            secureTextEntry={true}
          />
          <LoginButton text="Register" action={() => register()} />
        </View>
      </View>
    </>
  );
};
