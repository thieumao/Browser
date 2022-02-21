import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@containers/index';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStack;
