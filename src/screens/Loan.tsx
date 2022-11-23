import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginButton} from '../components/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon} from '../components/InputIcon';
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
          <TextIcon icon={'dollar'} text={loanBalance} />
          <InputIcon icon="guest" placeholder="Loan" setState={setLoan} />
          <InputIcon
            icon="email"
            placeholder="Purpouse of the loan"
            setState={setReason}
          />
          <LoginButton text="Apply for your loan" action={() => takeLoan()} />
        </View>
      </View>
    </>
  );
};
