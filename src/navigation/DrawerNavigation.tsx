import React, {useContext, useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabsNavigator} from './BottomTabsNavigator';
// import {LogIn} from '../screens/LogIn';
import {LateralMenu} from '../screens/LateralMenu';
import ChangePasswordScreen from './ChangePasswordStack';
import ThemeSelectorScreen from './ThemeSelectorStack';
import {useSelector} from 'react-redux';
import {AuthContext} from '../context/AuthContext';
import {
  selectUserExistsStatus,
  selectUserExistsState,
} from '../redux/slices/UserExistSlice';
import {useAppDispatch} from '../redux/storage/Store';
import {possibleStatus} from '../config/possibleStatus';
import {checkUserExist} from '../services/Clients/userExists';
import {RegisterStackNavigator} from './RegisterStack';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const dispatch = useAppDispatch();

  const {userData} = useContext(AuthContext);
  const [email, setEmail] = useState<string>();
  const status = useSelector(selectUserExistsStatus());

  useEffect(() => {
    if (userData) {
      setEmail(userData.email);
    }
  }, [userData]);

  useEffect(() => {
    if (email && status === possibleStatus.IDLE) {
      dispatch(checkUserExist(userData.email));
    }
  }, [dispatch, userData, email, status]);

  const userExists = useSelector(selectUserExistsState());
  console.log(userExists);
  console.log(email);

  return userExists ? (
    <Drawer.Navigator
      initialRouteName="Wallet App"
      drawerContent={props => <LateralMenu {...props} />}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1554F7',
        },
        unmountOnBlur: true,
      }}>
      <Drawer.Screen name="Wallet App" component={BottomTabsNavigator} />
      <Drawer.Screen name="Change password" component={ChangePasswordScreen} />
      <Drawer.Screen name="Change your theme" component={ThemeSelectorScreen} />
    </Drawer.Navigator>
  ) : (
    <RegisterStackNavigator />
  );
};
