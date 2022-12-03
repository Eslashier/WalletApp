import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconNumber} from '../components/InputIcon/InputIcon';
import {BalancePay} from '../components/BalancePay/BalancePay';
import {ModalSend} from '../components/ModalSend/ModalSend';

export const Send = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState(140000000);
  const [userToSend, setUserToSend] = useState(' ');
  const [destinationTouched, setDestinationTouched] = useState(false);
  const [errorDestination, setErrorDestination] = useState('');
  const [amount, setAmount] = useState(0);
  const [amountTouched, setAmountTouched] = useState(false);
  const [errorAmount, setErrorAmount] = useState('');
  const [message, setMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendMoney = () => {
    if (
      errorDestination.length === 0 &&
      errorAmount.length === 0 &&
      errorMessage.length === 0 &&
      amount > 0
    ) {
      setBalance(balance - amount);
      setModalVisible(false);
      setAmount(0);
      setMessage('');
      setUserToSend('');
      setDestinationTouched(false);
      setAmountTouched(false);
      setMessageTouched(false);
    } else {
      setErrorAmount('Please enter a valid loan');
      setErrorDestination('Please enter a valid purpose');
      setErrorMessage('Please enter a valid purpose');
      setDestinationTouched(true);
      setAmountTouched(true);
      setMessageTouched(true);
      setModalVisible(false);
    }
  };

  useEffect(() => {
    const numbersRjx = /^[0-9]*$/;
    if (amount === 0) {
      setErrorAmount('Amount should not be empty');
    } else if (!numbersRjx.test(amount.toString())) {
      setErrorAmount('Please do not use symbols or letters');
    } else if (amount > balance) {
      setErrorAmount('The amount cannot be greater than your balance');
    } else {
      setErrorAmount('');
    }
  }, [amount, balance]);

  useEffect(() => {
    if (message.length === 0) {
      setErrorMessage('Please specify a reason');
    } else if (message.length < 5) {
      setErrorMessage('The reason must be at least 5 characters');
    } else {
      setErrorMessage('');
    }
  }, [message]);

  useEffect(() => {
    const numberOrEmailRjx = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if (userToSend.length === 0) {
      setErrorDestination('Please specify an email or phone number');
    } else if (!numberOrEmailRjx.test(userToSend)) {
      setErrorDestination('Please input a valid email or phone number');
    } else {
      setErrorDestination('');
    }
  }, [userToSend]);

  return (
    <>
      <View style={styles.containerForm}>
        <ModalSend
          isVisible={modalVisible}
          amount={amount.toString()}
          actionButtonTake={sendMoney}
          setState={setModalVisible}
        />
        <View>
          <BalancePay balance={balance.toString()} text={'Account balance'} />
          <InputIcon
            icon={'user'}
            placeholder="User email or phone number"
            setState={setUserToSend}
            error={errorDestination}
            touched={destinationTouched}
            setTouched={setDestinationTouched}
            state={userToSend}
          />
          <InputIconNumber
            state={amount}
            icon={'dollar-sign'}
            placeholder="Amount"
            setState={setAmount}
            error={errorAmount}
            touched={amountTouched}
            setTouched={setAmountTouched}
          />
          <InputIcon
            icon={'bookmark'}
            placeholder="Message"
            setState={setMessage}
            error={errorMessage}
            touched={messageTouched}
            setTouched={setMessageTouched}
            state={message}
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
