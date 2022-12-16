import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Register} from '../screens/Register';
import {useSelector} from 'react-redux';
import {selectUserExistsState} from '../redux/slices/UserExistSlice';
import {Loading} from '../screens/Loading';

const Stack = createStackNavigator();
export const RegisterStackNavigator = () => {
  const userExists = useSelector(selectUserExistsState());
  return userExists ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Register} name="RegisterScreen" />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Loading} name="RegisterScreen" />
    </Stack.Navigator>
  );
};
