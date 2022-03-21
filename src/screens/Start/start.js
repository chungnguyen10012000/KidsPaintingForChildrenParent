import React from 'react'
import { Image, AsyncStorage, Text, View, StyleSheet, Button } from 'react-native';
import HandleLogin from '../HandleLogin/handleLogin';
import StartScreen_0 from './start_0';

export default function StartScreen({navigation}) {
  return (
    <StartScreen_0  na/>
  )
  return AsyncStorage.getItem('access_token')
  .then(token => {
      if (token != null) {
        return HandleLogin(objNav, {token: token})
      }
      else {
        return StartScreen_0(objNav)
      }
  })
  .catch(
    () => (
      <View></View>
    )
  )
}