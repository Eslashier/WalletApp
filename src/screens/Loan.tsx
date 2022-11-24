import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconNumber} from '../components/InputIcon';
import {TextIcon} from '../components/TextIcon';

export const Loan = () => {
  const [loanBalance, setLoanBalance] = useState(50000000);
  const [loan, setLoan] = useState(0);
  const [reason, setReason] = useState('');

  const takeLoan = () => {
    setLoanBalance(loanBalance - loan);
    return;
  };

  return (
    <>
      <View style={styles.containerForm}>
        <Text style={styles.content}>Take a Loan</Text>
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
          <LoginButton text="Apply for your loan" action={() => takeLoan()} />
        </View>
      </View>
    </>
  );
};
