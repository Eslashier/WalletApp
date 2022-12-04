import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';
import {ConfigStorage} from './src/redux/storage/ConfigStore';
import {AuthContextProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <Provider store={ConfigStorage}>
      <AuthContextProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
