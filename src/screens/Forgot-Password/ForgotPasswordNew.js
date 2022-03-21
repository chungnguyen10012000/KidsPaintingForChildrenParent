import React, { useState } from "react";
import { Alert, AsyncStorage, Image, StyleSheet, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View, TouchableOpacity } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { emailValidator } from "../../helper/emailValidator";
import { passwordValidator } from "../../helper/passwordValidator";
import { CheckBox } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function ForgotPasswordScreen({ navigation }) {

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [rePassword, setRePassword] = useState({ value: '', error: ''})
    const [isSelected, setSelection] = useState(false);

    const handleLogin = () => {
        email.error = emailValidator(email.value)
        password.error = passwordValidator(password.value)
        rePassword.error = passwordValidator(rePassword.value)
    };


    return (
        <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior="height">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ color: '#ffffff', fontSize: 40, marginLeft: 20, textAlign: 'left' }}>Kids Painting</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Lấy lại mật khẩu</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                placeholder="Email"
                                placeholderColor="#c4c3cb"
                                style={{ marginLeft: 20, borderBottomWidth: 0.5, marginRight: 20 }}
                                onChangeText={(text) => setEmail({ value: text, error: '' })}
                            />
                        </View>
                        {/* <View style={{ flex: 1 }}>
                            <CheckBox
                                title='Lưu tài khoản'
                                checked={isSelected}
                                onPress={() => setSelection(!isSelected)}
                            /> 
                        </View> */}
                        <View style={styles.btn}>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ flex: 1 }}>
                                <View style={styles.loginButton}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Gửi</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <FontAwesome5 name={'angle-right'} size={24} color={"#ffffff"} style={{ fontSize: 18, textAlign: 'right', marginRight: 20 }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

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
    btn: {
        flex: 0.7,
        width: '100%',
        justifyContent: 'center',
    },
    loginButton: {
        flex: 0.5,
        borderRadius: 20,
        backgroundColor: '#2a58fc',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        flexDirection: 'row'
    }
})