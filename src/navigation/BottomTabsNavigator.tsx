import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {Main} from '../screens/Main';
import {Loan} from '../screens/Loan';
import {Send} from '../screens/Send';
import {MyStackScreenProps} from '../interfaces/MyStackScreenProps';
import {
  getFocusedRouteNameFromRoute,
  Route,
  RouteProp,
} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function getHeaderTitle(
  route: Partial<Route<string, object | undefined>> | RouteProp<any, any>,
) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Loans':
      return 'Take a loan';
    case 'Send Money':
      return 'Send Money';
  }
}

export const BottomTabsNavigator = ({
  navigation,
  route,
}: MyStackScreenProps) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

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
