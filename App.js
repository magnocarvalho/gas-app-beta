import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/pages/home';

const App: () => React$Node = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <SafeAreaProvider style={styles.container}>
      <Home />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34af23',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default App;
