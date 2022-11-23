import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LogInButton';
import {styles} from '../theme/RegisterStyle';
import { InputIcon, InputIconNumber } from '../components/InputIcon';
import {TextIcon} from '../components/TextIcon';

export const Send = () => {
  const [balance, setBalance] = useState(140000000);
  const [userToSend, setUserToSend] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const sendMoney = () => {
    setBalance(balance - amount);
    return;
  };

  return (
    <>
      <View style={styles.containerForm}>
        <Text style={styles.content}>Send Money</Text>
        <View>
          <InputIcon
            icon={'user'}
            placeholder="User email or phone number"
            setState={setUserToSend}
          />
          <InputIconNumber
            icon={'dollar-sign'}
            placeholder="Amount"
            setState={setAmount}
          />
          <InputIcon
            icon={'bookmark'}
            placeholder="Message"
            setState={setMessage}
          />
          <View style={styles.space} />
          <LoginButton text="Send Money" action={() => sendMoney()} />
        </View>
      </View>
    </>
  );
};
