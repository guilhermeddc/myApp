import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from './pages/Loading';
import Home from './pages/Home';
import Github from './pages/Github';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}>
        <AppStack.Screen name="Loading" component={Loading} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Github" component={Github} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
