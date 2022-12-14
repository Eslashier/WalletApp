import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconNumber} from '../components/InputIcon/InputIcon';
import {BalancePay} from '../components/BalancePay/BalancePay';

export const Send = () => {
  const [balance, setBalance] = useState(140000000);
  const [userToSend, setUserToSend] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const sendMoney = () => {
    setBalance(balance - amount);
    console.log(balance);
    console.log(userToSend);
    console.log(amount);
    console.log(message);
    return;
  };

  return (
    <>
      <View style={styles.containerForm}>
        <View>
          <BalancePay balance={balance.toString()} text={'Account balance'} />
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
