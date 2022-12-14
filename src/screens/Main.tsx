import React, {useEffect, useState} from 'react';
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
import artsImages from '../assets/themes/1/arts';
import foodImages from '../assets/themes/2/food';
import defaultImages from '../assets/themes/3/default';
import musicImages from '../assets/themes/4/music';
import natureImages from '../assets/themes/5/nature';
import activityImages from '../assets/themes/6/activity';
import fashionImages from '../assets/themes/7/fashion';
import technologyImages from '../assets/themes/8/technology';
import travelImages from '../assets/themes/9/travel';

export const Main = () => {
  const userStatus = useSelector(selectClientStatus());
  const userError = useSelector(selectClientFetchError());
  const userInfo = useSelector(selectClientState());
  const transactions = useSelector(selectTransactionState());
  const userData = useSelector(selectUserEmail());
  const [imagesToShow, setImagesToShow] = useState<any>();

  const balance = userInfo.account.balance;

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      const tokenData = {
        idToken: userData?.idToken,
        accountId: userInfo.account.id,
      };
      if (tokenData.accountId !== '') {
        dispatch(getTransactions(tokenData));
      }
    }, 500);
  }, [dispatch, userData, userInfo]);

  useEffect(() => {
    switch (userInfo.app.color) {
      case 'arts':
        setImagesToShow(artsImages);
        break;
      case 'food':
        setImagesToShow(foodImages);
        break;
      case 'music':
        setImagesToShow(musicImages);
        break;
      case 'nature':
        setImagesToShow(natureImages);
        break;
      case 'activity':
        setImagesToShow(activityImages);
        break;
      case 'fashion':
        setImagesToShow(fashionImages);
        break;
      case 'technology':
        setImagesToShow(technologyImages);
        break;
      case 'travel':
        setImagesToShow(travelImages);
        break;
      default:
        setImagesToShow(defaultImages);
    }
  }, [userInfo]);

  return userError !== null && userStatus === possibleStatus.IDLE ? (
    <></>
  ) : (
    <>
      <View style={styles.containerForm}>
        <BalanceMain balance={balance} text={'Balance in your account'} />
        <View style={styles.transactions}>
          <ScrollView>
            <Transactions transactions={transactions} theme={imagesToShow} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
