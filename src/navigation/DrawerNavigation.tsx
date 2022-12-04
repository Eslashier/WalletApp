import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabsNavigator} from './BottomTabsNavigator';
// import {LogIn} from '../screens/LogIn';
import {LateralMenu} from '../screens/LateralMenu';
import ChangePasswordScreen from './ChangePasswordStack';
import ThemeSelectorScreen from './ThemeSelectorStack';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AuthScreen"
      drawerContent={props => <LateralMenu {...props} />}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1554F7',
        },
        unmountOnBlur: true,
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="AuthScreen"
        component={LoginScreen}
      />
      <Drawer.Screen name="Wallet App" component={BottomTabsNavigator} />
      <Drawer.Screen name="Change password" component={ChangePasswordScreen} />
      <Drawer.Screen name="Change your theme" component={ThemeSelectorScreen} />
    </Drawer.Navigator>
  );
};
