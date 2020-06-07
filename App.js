import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import {
  Montserrat_400Regular,
  Montserrat_300Light,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';

import Routes from './src/routes';

const App = () => {
  const [fonstLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_300Light,
    Montserrat_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
};

export default App;
