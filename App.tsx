import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ChangePassword} from './src/screens/ChangePassword';
import {Loan} from './src/screens/Loan';
import {LogIn} from './src/screens/LogIn';
import { Main } from './src/screens/Main';
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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <LogIn /> */}
      {/* <Register /> */}
      {/* <Loan /> */}
      {/* <Send /> */}
      {/* <ThemeSelector /> */}
      {/* <ChangePassword /> */}
      {/* <Main /> */}
    </SafeAreaView>
  );
};

export default App;
