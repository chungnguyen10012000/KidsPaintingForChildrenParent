import React, { useState } from 'react';
import { Text, View, StyleSheet,  SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView , ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const user = {
    id: 1,
    firstName: 'Nguyen',
    lastName: 'Chung',
    sex: 'Nam',
    birthday: '10/01/2000',
    address: 'Thanh Hoa',
    phone: '0989439678',
    email: 'nvchung00@gmail.com'
}

export default function ChangeInfoScreen({ navigation }) {
    const [firstName, onChangeFirstName] = React.useState(user.firstName);
    const [lastName, onChangeLastName] = React.useState(user.lastName);
    const [email, onChangeEmail] = React.useState(user.email);
    const [address, onChangeAddress] = React.useState(user.address);
    const [phone, onChangePhone] = React.useState(user.phone);
    const [sex, onChangeSex] = React.useState(user.sex);
    const [birthday, onChangeBirthday] = React.useState(user.birthday);
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Trang chủ</Text>
                </View>
                <View style={{flex: 4}}>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeFirstName}
                        value={firstName}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeLastName}
                        value={lastName}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeAddress}
                        value={address}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeSex}
                        value={sex}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeBirthday}
                        value={birthday}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePhone}
                        value={phone}
                    />
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                    <Text style={{ color: '#d5182c', textDecorationLine: 'underline', textAlign: 'center', marginBottom: 10 }}>Thay đổi mật khẩu</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('StartScreen_1')} style={{ flex: 1 }}>
                    <View style={styles.loginButton}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Tiếp tục</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <FontAwesome5 name={'angle-right'} size={24} color={"#ffffff"} style={{ fontSize: 18, textAlign: 'right', marginRight: 20 }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            </View>
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