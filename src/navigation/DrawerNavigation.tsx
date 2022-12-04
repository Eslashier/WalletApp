import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabsNavigator} from './BottomTabsNavigator';
// import {LogIn} from '../screens/LogIn';
import {LateralMenu} from '../screens/LateralMenu';
import ChangePasswordScreen from './ChangePasswordStack';
import ThemeSelectorScreen from './ThemeSelectorStack';
import {AuthContext} from '../context/AuthContext';
import {StackNavigator} from './LoginStack';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  const {loggedIn} = useContext(AuthContext);
  return loggedIn ? (
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
    <StackNavigator />
  );
};
