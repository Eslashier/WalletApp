import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabsNavigator} from './BottomTabsNavigator';
// import {LogIn} from '../screens/LogIn';
import {LateralMenu} from '../screens/LateralMenu';
import ChangePasswordScreen from './ChangePasswordStack';
import ThemeSelectorScreen from './ThemeSelectorStack';
import {useSelector} from 'react-redux';
import {selectUserExistsState} from '../redux/slices/UserExistSlice';
import {RegisterStackNavigator} from './RegisterStack';
import {selectUserEmail} from '../redux/slices/AuthSlice';
import {useAppDispatch} from '../redux/storage/Store';
import {checkUserExist} from '../services/Clients/userExists';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const userExists = useSelector(selectUserExistsState());

  const dispatch = useAppDispatch();
  const userData = useSelector(selectUserEmail());

  useEffect(() => {
    console.log(userData);
    dispatch(checkUserExist(userData?.email!));
  }, [dispatch, userData]);

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
