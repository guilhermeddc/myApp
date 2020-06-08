import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Github from './pages/Github';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Experience" component={Experience} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Github" component={Github} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
