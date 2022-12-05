import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Register} from '../screens/Register';

const Stack = createStackNavigator();
export const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Register} name="RegisterScreen" />
    </Stack.Navigator>
  );
};
