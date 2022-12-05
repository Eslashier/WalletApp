import React, {useContext} from 'react';
// import {LogIn} from '../screens/LogIn';
import {AuthContext} from '../context/AuthContext';
import {StackNavigator} from './LoginStack';
import {DrawerNavigation} from './DrawerNavigation';

export const Navigation = () => {
  const {loggedIn} = useContext(AuthContext);

  return loggedIn ? <DrawerNavigation /> : <StackNavigator />;
};
