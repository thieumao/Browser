import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigators/MainStack';
import { navigationRef } from './navigators/RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Colors from '@theme/colors';

const App: FC = () => {

  return (
    <SafeAreaProvider>
      <StatusBar barStyle='default' backgroundColor={Colors.BLACK} />
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
