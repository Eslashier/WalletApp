import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';
import {ConfigStorage} from './src/redux/storage/ConfigStore';
import {AuthContextProvider} from './src/context/AuthContext';
import StackAuth0Navigator from './src/navigation/StackAuth0Navigator';

const App = () => {
  return (
    <Provider store={ConfigStorage}>
      <AuthContextProvider>
        <NavigationContainer>
          {/* <DrawerNavigation /> */}
          <StackAuth0Navigator />
        </NavigationContainer>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
