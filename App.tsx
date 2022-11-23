import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Loan} from './src/screens/Loan';
import {LogIn} from './src/screens/LogIn';
import {Register} from './src/screens/Register';

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
      <Loan />
    </SafeAreaView>
  );
};

export default App;
