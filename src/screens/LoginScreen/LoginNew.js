import React, { useState } from "react";
import { Alert, AsyncStorage, Image, StyleSheet, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View, TouchableOpacity } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { emailValidator } from "../../helper/emailValidator";
import { passwordValidator } from "../../helper/passwordValidator";
import { CheckBox } from "react-native-elements";
import { Root, Popup } from 'popup-ui'



export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [isSelected, setSelection] = useState(false);

    const handleLogin = () => {
        email.error = emailValidator(email.value)
        password.error = passwordValidator(password.value)
        // var details = {
        //     'client_id': 'login-app',
        //     'username': email.value,
        //     'password': password.value,
        //     'grant_type': 'password'
        // };

        // var formBody = [];
        // for (var property in details) {
        //   var encodedKey = encodeURIComponent(property);
        //   var encodedValue = encodeURIComponent(details[property]);
        //   formBody.push(encodedKey + "=" + encodedValue);
        // }
        // formBody = formBody.join("&");
        // //console.log(formBody)

        // fetch('https://kidraw-keycloak.herokuapp.com/auth/realms/SpringBootKeycloak/protocol/openid-connect/token', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   },
        //   body: formBody
        // })
        // .then(res => res.json())
        // .then(data => {
        //     try {
        //         AsyncStorage.setItem('access_token', data.access_token) // Authorization
        //         AsyncStorage.setItem('refresh_token', data.refresh_token)
        //         navigation.navigate('TabNavigation')
        //       } catch (error) {
        //         console.log('AsyncStorage error: ' + error.message);
        //       }
        // })
        console.log(email, password)
        if (email.value === 'nvchung00@gmail.com' && password.value === '123') {
            Popup.show({
                type: 'Success',
                title: 'Đăng nhập thành công',
                button: true,
                textBody: '',
                buttonText: 'Ok',
                callback: () => {
                    Popup.hide()
                    navigation.navigate('TabNavigation', { isChild: true })
                }
            })
        }
        else if (email.value === 'parent@gmail.com' && password.value === '123') {
            Popup.show({
                type: 'Success',
                title: 'Đăng nhập thành công',
                button: true,
                textBody: '',
                buttonText: 'Ok',
                callback: () => {
                    Popup.hide()
                    navigation.navigate('TabNavigation', { isChild: false })
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
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Root style={{ flex: 1, width: '100%' }}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left' }}>Chào mừng bạn đến với</Text>
                            <Text style={{ color: '#ffffff', fontSize: 40, marginLeft: 20, textAlign: 'left' }}>Kids Painting</Text>
                        </View>
                        <View style={styles.body}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Đăng nhập</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    placeholder="Email"
                                    placeholderColor="#c4c3cb"
                                    style={{ marginLeft: 20, borderBottomWidth: 0.5, marginRight: 20 }}
                                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    placeholder="Mật khẩu"
                                    placeholderColor="#c4c3cb"
                                    secureTextEntry={true}
                                    style={{ marginLeft: 20, borderBottomWidth: 0.5, marginRight: 20 }}
                                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                                />
                            </View>
                            {/* <View style={{ flex: 1 }}>
                            <CheckBox
                                title='Lưu tài khoản'
                                checked={isSelected}
                                onPress={() => setSelection(!isSelected)}
                            /> 
                        </View> */}
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text style={{ textAlign: 'right', marginRight: 20 }}>
                                        Quên mật khẩu ?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => handleLogin()} style={{ flex: 1 }}>
                                    <View style={styles.loginButton}>
                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 18, textAlign: 'center', marginLeft: 20, color: '#ffffff' }}>Đăng nhập</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <Text style={{ marginLeft: 20 }}>Chưa có tài khoản Kids Painting ?</Text>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SigupScreen')}>
                                    <Text style={{ textAlign: 'right', marginRight: 20, color: '#d5182c' }}>
                                        Đăng kí ?
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Root>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#d5182c',
    },
    header: {
        flex: 2,
        width: '100%',
        backgroundColor: '#d5182c',
        justifyContent: 'center'
    },
    body: {
        flex: 6,
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 20,
    },
    loginButton: {
        flex: 0.5,
        borderRadius: 20,
        backgroundColor: '#d5182c',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        flexDirection: 'row'
    }
})