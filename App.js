/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LogBox } from 'react-native';

import LoginScreen from './src/screens/LoginScreen/LoginNew';
import SigupScreen from './src/screens/SigUpScreen/SigUpNew'
import TabNavigation from './src/screens/Tab-Bar/tabNavigation';
import StartScreen_0 from './src/screens/Start/start_0'
import StartScreen_1 from './src/screens/Start/start_1';
import StartScreen_2 from './src/screens/Start/start_2';
import ForgotPasswordScreen from './src/screens/Forgot-Password/ForgotPasswordNew'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "Slider has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/slider' instead of 'react-native'. See https://github.com/callstack/react-native-slider"
]);

const Stack = createStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen_0"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen_0" component={StartScreen_0} />
          <Stack.Screen name="StartScreen_1" component={StartScreen_1} />
          <Stack.Screen name="StartScreen_2" component={StartScreen_2} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SigupScreen" component={SigupScreen} /> 
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> 
          <Stack.Screen name="TabNavigation" component={TabNavigation} />       
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
