import React, { useState } from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View , TouchableOpacity} from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { emailValidator } from "../../helper/emailValidator";
import { passwordValidator } from "../../helper/passwordValidator";


export default function SigupScreen({  route, navigation }) {

  const { isChild }  = route.params

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [rePassword, setRePassword] = useState({ value: '', error: '' })

  const onLoginPress = () => {
    email.error = emailValidator(email.value)
    password.error = passwordValidator(password.value)
    rePassword.error = passwordValidator(password.value)
    if (email.error){
      alert(email.error)
      return
    }
    if (password.error){
      alert(password.error)
      return 
    }
    if (rePassword.value !== password.value){
      alert('Mật khẩu không khớp!')
      return 
    }
    alert('Đăng kí thành công')
    return (
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      }))
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Đăng kí</Text>
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
            <TextInput 
              placeholder="Xác nhận mật khẩu" 
              placeholderColor="#c4c3cb" 
              style={styles.loginFormTextInput} 
              secureTextEntry={true} 
              onChangeText={(text) => setRePassword({ value: text, error: '' })}
            />
            <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Đăng nhập" />
            <Text style={styles.sigup}>{isChild ? 'Ba mẹ đã tài khoản cho bé?' : 'Ba mẹ đã có tài khoản'} </Text>
            <TouchableOpacity onPress={() => navigation.replace('LoginScreen', {isChild: isChild})}>
              <Text style={styles.link}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}