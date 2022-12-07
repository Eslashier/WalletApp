import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {LoginButton} from '../components/LoginButton/LogInButton';
import {styles} from '../theme/RegisterStyle';
import {InputIcon, InputIconNumber} from '../components/InputIcon/InputIcon';
import {TextIcon} from '../components/TextIcon/TextIcon';
import {ModalLoan} from '../components/ModalLoan/ModalLoan';
import {selectClientState} from '../redux/slices/ClientSlice';
import {useSelector} from 'react-redux';
import {
  postTransactions,
  postTransactionType,
} from '../services/Transactions/postTransactions';
import {selectUserEmail} from '../redux/slices/AuthSlice';
import {useAppDispatch} from '../redux/storage/Store';
import {selectTransactionState} from '../redux/slices/TransactionsSlice';
import {getClientInfo} from '../services/Clients/getClientInfo';

export const Loan = () => {
  const dispatch = useAppDispatch();

  const userInfo = useSelector(selectClientState());
  const userData = useSelector(selectUserEmail());

  const [modalVisible, setModalVisible] = useState(false);
  const [loanBalance, setLoanBalance] = useState(+userInfo.account.credit);
  const [loan, setLoan] = useState(0);
  const [loanTouched, setLoanTouched] = useState(false);
  const [errorLoan, setLoanError] = useState('');
  const [reason, setReason] = useState('');
  const [reasonTouched, setReasonTouched] = useState(false);
  const [errorReason, setErrorReason] = useState('');

  const activateModal = () => {
    setModalVisible(true);
  };

  const transactions = useSelector(selectTransactionState());

  useEffect(() => {
    dispatch(getClientInfo(userData));
  }, [dispatch, transactions, userData]);

  const takeLoan = () => {
    if (errorLoan.length === 0 && errorReason.length === 0 && loan > 0) {
      const loanTransaction: postTransactionType = {
        incomeAccountId: userInfo.account.id,
        outcomeAccountId: userInfo.account.id,
        reason: reason,
        amount: loan,
        fees: 0,
      };
      const dispatchObject = {
        idToken: userData?.idToken,
        email: userData?.email,
        transaction: loanTransaction,
      };
      dispatch(postTransactions(dispatchObject));
      setLoanBalance(loanBalance - loan);
      setModalVisible(false);
      setLoan(0);
      setReason('');
      setLoanTouched(false);
      setReasonTouched(false);
    } else {
      setLoanError('Please enter a valid loan');
      setErrorReason('Please enter a valid purpose');
      setModalVisible(false);
      setLoanTouched(true);
      setReasonTouched(true);
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
            touched={loanTouched}
            setTouched={setLoanTouched}
          />
          <InputIcon
            icon={'bookmark'}
            placeholder="Purpose of the loan"
            state={reason ? reason : undefined}
            setState={setReason}
            error={errorReason}
            touched={reasonTouched}
            setTouched={setReasonTouched}
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
