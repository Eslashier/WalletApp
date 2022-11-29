import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconNumber} from '../components/InputIcon/InputIcon';
import {TextIcon} from '../components/TextIcon/TextIcon';
import {ModalLoan} from '../components/ModalLoan/ModalLoan';

export const Loan = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loanBalance, setLoanBalance] = useState(50000000);
  const [loan, setLoan] = useState(0);
  const [reason, setReason] = useState('     ');
  const [errorLoan, setLoanError] = useState('');
  const [errorReason, setErrorReason] = useState('');

  const activateModal = () => {
    console.log('hola');
    setModalVisible(true);
  };

  const takeLoan = () => {
    if (errorLoan.length === 0 && errorReason.length === 0 && loan > 0) {
      setLoanBalance(loanBalance - loan);
      setModalVisible(false);
      setLoan(0);
      setReason('');
      return;
    } else {
      setLoanError('Please enter a valid loan');
      setErrorReason('Please enter a valid purpose');
      setModalVisible(false);
      return;
    }
  };

  useEffect(() => {
    if (loan === 0) {
      setLoanError('Loan should not be empty');
    } else if (loan > loanBalance) {
      setLoanError('Loan cannot be greater than your loan balance');
    } else {
      setLoanError('');
    }
  }, [loan, loanBalance]);

  useEffect(() => {
    if (reason.length === 0) {
      setErrorReason('Please specify a reason');
    } else if (reason.length < 5) {
      setErrorReason('The reason must be at least 5 characters');
    } else {
      setErrorReason('');
    }
  }, [reason]);

  return (
    <>
      <View style={styles.containerForm}>
        <ModalLoan
          isVisible={modalVisible}
          actionButtonTake={takeLoan}
          setState={setModalVisible}
        />
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
            state={loan ? loan : undefined}
            setState={setLoan}
            error={errorLoan}
          />
          <InputIcon
            icon={'bookmark'}
            placeholder="Purpose of the loan"
            setState={setReason}
            error={errorReason}
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
