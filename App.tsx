import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { ConfigStorage } from './src/redux/storage/ConfigStore';
import {ChangePassword} from './src/screens/ChangePassword';
import {Loan} from './src/screens/Loan';
import {LogIn} from './src/screens/LogIn';
import {Main} from './src/screens/Main';
import {Register} from './src/screens/Register';
import {Send} from './src/screens/Send';
import {ThemeSelector} from './src/screens/ThemeSelector';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={ConfigStorage}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
