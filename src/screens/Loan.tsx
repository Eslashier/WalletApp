import React, {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconNumber} from '../components/InputIcon/InputIcon';
import {TextIcon} from '../components/TextIcon/TextIcon';

export const Loan = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [loanBalance, setLoanBalance] = useState(50000000);
  const [loan, setLoan] = useState(0);
  const [reason, setReason] = useState('');

  const activateModal = () => {
    console.log('hola');
    setModalVisible(true);
  };

  const takeLoan = () => {
    setLoanBalance(loanBalance - loan);
    return;
  };

  return (
    <>
      <View style={styles.containerForm}>
        <Modal
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <Text>Hola</Text>
          </View>
        </Modal>
        <View>
          <TextIcon
            icon={'dollar-sign'}
            tag={'Loan balance available'}
            text={loanBalance
              .toString()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}
          />
          <InputIconNumber
            icon={'dollar-sign'}
            placeholder="Loan"
            setState={setLoan}
          />
          <InputIcon
            icon={'bookmark'}
            placeholder="Purpose of the loan"
            setState={setReason}
          />
          <View style={styles.space} />
          <LoginButton
            text="Apply for your loan"
            action={() => activateModal()}
          />
        </View>
      </View>
    </>
  );
};
