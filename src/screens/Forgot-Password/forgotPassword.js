import React, { useState } from "react";

import styles from "./style";
import { StyleSheet, Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View, TouchableOpacity } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { emailValidator } from "../../helper/emailValidator";
import { passwordValidator } from "../../helper/passwordValidator";
import { getStatusBarHeight } from 'react-native-status-bar-height'


export default function ForgotPassword({ route, navigation }) {

  const { isChild } = route.params
  const [email, setEmail] = useState({ value: '', error: '' })

  const onLoginPress = () => {
    const emailError = emailValidator(email.value)
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <TouchableOpacity  onPress={() => navigation.replace('LoginScreen', {isChild: isChild})} style={x.container}>
              <Image
                style={x.image}
                source={require('../../assets/img/arrow_back.png')}
              />
            </TouchableOpacity>
            <Text style={styles.logoText}>Quên mật khẩu</Text>
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
            />
            <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Gửi" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const x = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})