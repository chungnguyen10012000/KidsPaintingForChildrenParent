import React, { useState } from 'react';
import { Text, View, StyleSheet,  SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const user = {
    id: 1,
    name: 'Nguyen Van Chung',
    sex: 'Nam',
    birthday: '10/01/2000',
    address: 'Thanh Hoa',
    phone: '0989439678',
    email: 'nvchung00@gmail.com'
}

export default function ChangePasswordScreen({ navigation }) {
    const [password, onChangePassword] = React.useState('');
    const [repassword, onChangeRePassword] = React.useState('');
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Thay đổi thông tin</Text>
                </View>
                <View style={{flex: 4}}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Mật khẩu cũ"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Mật khẩu mới"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeRePassword}
                    value={repassword}
                    placeholder="Xác nhận mật khẩu mới"
                />
                </View>
                <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('StartScreen_1')} style={{ flex: 1 }}>
                    <View style={styles.loginButton}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Cập nhật</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <FontAwesome5 name={'angle-right'} size={24} color={"#ffffff"} style={{ fontSize: 18, textAlign: 'right', marginRight: 20 }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            </SafeAreaView>
            </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#d5182c',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    btn: {
        flex: 1,
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
});