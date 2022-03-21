import React, { useState } from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View, TouchableOpacity } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { emailValidator } from "../../helper/emailValidator";
import { passwordValidator } from "../../helper/passwordValidator";
import { Root, Popup } from 'popup-ui'



export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPress = () => {
    email.error = emailValidator(email.value)
    password.error = passwordValidator(password.value)
    if (email.error) {
      alert(email.error)
      return
    }
    if (password.error) {
      alert(password.error)
      return
    }
    if (email === 'nvchung00@gmail.com' && password === '123') {
      Popup.show({
        type: 'Success',
        title: 'Đăng nhập thành công',
        button: true,
        textBody: '',
        buttonText: 'Ok',
        callback: () => {
          Popup.hide()
          navigation.navigate('TabNavigation')
        }
      })
    }
    else {
      Popup.show({
        type: 'Danger',
        title: 'Đăng nhập không thành công',
        button: true,
        textBody: 'Đăng nhập lại nào!',
        buttonText: 'Ok',
        callback: () => Popup.hide()
      })
    }
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Root style={{ flex: 1, width: '100%' }}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Đăng nhập</Text>
              <TextInput
                placeholder="Email"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
              />
              <TextInput
                placeholder="Mật khẩu"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
              />
              <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Đăng nhập" />
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgot}>{'Ba mẹ quên mật khẩu ?'}</Text>
              </TouchableOpacity>
              <Text style={styles.sigup}>{'Ba mẹ chưa có tài khoản ?'} </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SigupScreen')}>
                <Text style={styles.link}>Đăng kí</Text>
              </TouchableOpacity>
            </View>
          </View>
          /</Root>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}