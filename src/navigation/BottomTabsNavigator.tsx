import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {Main} from '../screens/Main';
import {Loan} from '../screens/Loan';
import {Send} from '../screens/Send';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#1554F7',
        tabBarInactiveBackgroundColor: '#1554F7',
        tabBarActiveTintColor: 'aliceblue',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: props => (
            <Icon name="home" size={props.size} color={props.color} />
          ),
        }}
        component={Main}
      />
      <Tab.Screen
        name="Loans"
        options={{
          tabBarIcon: props => (
            <Icon name="archive" size={props.size} color={props.color} />
          ),
        }}
        component={Loan}
      />
      <Tab.Screen
        name="Send Money"
        options={{
          tabBarIcon: props => (
            <Icon name="send" size={props.size} color={props.color} />
          ),
        }}
        component={Send}
      />
    </Tab.Navigator>
  );
};
