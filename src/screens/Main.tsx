import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {BalanceMain} from '../components/BalanceMain/BalanceMain';
import {styles} from '../theme/MainStyle';
import {TRANSACTIONS} from '../shared/transactions';
import {Transactions} from '../components/Transactions/Transactions';
import {
  selectClientStatus,
  selectClientState,
  selectClientFetchError,
} from '../redux/slices/ClientSlice';
import {useSelector} from 'react-redux';
import {possibleStatus} from '../config/possibleStatus';
import {getClientInfo} from '../services/Clients/getClientInfo';
import {selectUserEmail} from '../redux/slices/AuthSlice';
import {useAppDispatch} from '../redux/storage/Store';

export const Main = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector(selectUserEmail());
  const userStatus = useSelector(selectClientStatus());
  const userError = useSelector(selectClientFetchError());
  const userInfo = useSelector(selectClientState());

  // console.log(userInfo);
  // console.log(userStatus);
  // console.log(userError);

  const balance = userInfo.account.balance;
  // const balance = '0';

  const transactions = TRANSACTIONS;

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
