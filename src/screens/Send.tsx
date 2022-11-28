import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconNumber} from '../components/InputIcon/InputIcon';
import {BalancePay} from '../components/BalancePay/BalancePay';
import {ModalSend} from '../components/ModalSend/ModalSend';

export const Send = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState(140000000);
  const [userToSend, setUserToSend] = useState('');
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const sendMoney = () => {
    setBalance(balance - amount);
    setModalVisible(!modalVisible);
    return;
  };

  return (
    <>
      <View style={styles.containerForm}>
        <ModalSend
          isVisible={modalVisible}
          ammount={amount.toString()}
          actionButtonTake={sendMoney}
          setState={setModalVisible}
        />
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
          <LoginButton
            text="Send Money"
            action={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
    </>
  );
};
