import React, {useState} from 'react';
import {Text, View} from 'react-native';
import { LoginButton, LoginButtonWhite } from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIconPassword} from '../components/InputIcon/InputIcon';
import {ColorButton} from '../components/ColorButton/ColorButton';

interface Props {
  action: () => void;
}
export const ChangePassword = ({action}: Props) => {
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
          <LoginButtonWhite text={'Cancelar'} action={action} />
        </View>
      </View>
    </>
  );
};
