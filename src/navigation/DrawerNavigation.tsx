import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import {LogIn} from '../screens/LogIn';
import {LateralMenu} from '../screens/LateralMenu';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AuthScreen"
      drawerContent={props => <LateralMenu {...props} />}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Drawer.Screen
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
        name="AuthScreen"
        component={LogIn}
      />
      <Drawer.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
    </Drawer.Navigator>
  );
};
