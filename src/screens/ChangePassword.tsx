import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconPassword} from '../components/InputIcon';
import {ColorButton} from '../components/ColorButton';

export const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const changePassword = () => {
    console.log(oldPassword);
    console.log(password);
    console.log(verifyPassword);
    return;
  };

  return (
    <>
      <View style={styles.containerForm}>
        <Text style={styles.content}>Register</Text>
        <View>
          <InputIconPassword
            icon="key"
            placeholder="Current password"
            setState={setOldPassword}
          />
          <InputIconPassword
            icon="key"
            placeholder="New password"
            setState={setPassword}
          />
          <InputIconPassword
            icon="key"
            placeholder="Confirm Password"
            setState={setVerifyPassword}
          />
          <LoginButton text="Change password" action={() => changePassword()} />
          <ColorButton text={'Cancelar'} color={'white'} />
        </View>
      </View>
    </>
  );
};
