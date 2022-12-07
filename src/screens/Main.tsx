import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {BalanceMain} from '../components/BalanceMain/BalanceMain';
import {styles} from '../theme/MainStyle';
// import {TRANSACTIONS} from '../shared/transactions';
import {Transactions} from '../components/Transactions/Transactions';
import {
  selectClientStatus,
  selectClientState,
  selectClientFetchError,
} from '../redux/slices/ClientSlice';
import {useSelector} from 'react-redux';
import {possibleStatus} from '../config/possibleStatus';
import {selectTransactionState} from '../redux/slices/TransactionsSlice';
import {useAppDispatch} from '../redux/storage/Store';
import {getTransactions} from '../services/Transactions/getTransactions';
import {selectUserEmail} from '../redux/slices/AuthSlice';

export const Main = () => {
  const userStatus = useSelector(selectClientStatus());
  const userError = useSelector(selectClientFetchError());
  const userInfo = useSelector(selectClientState());
  const transactions = useSelector(selectTransactionState());
  const userData = useSelector(selectUserEmail());

  const balance = userInfo.account.balance;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const tokenData = {
      token: userData?.idToken,
      accountId: userInfo.account.id,
    };
    dispatch(getTransactions(tokenData));
  }, [dispatch, userData, userInfo]);

  // const transactions = TRANSACTIONS;

  return userError !== null && userStatus === possibleStatus.IDLE ? (
    <></>
  ) : (
    <>
      <View style={styles.containerForm}>
        <BalanceMain balance={balance} text={'Balance in your account'} />
        <View style={styles.transactions}>
          <ScrollView>
            <Transactions transactions={transactions} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
