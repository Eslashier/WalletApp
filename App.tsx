import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/storage/Store';
import {AuthContextProvider} from './src/context/AuthContext';
import {Navigation} from './src/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
