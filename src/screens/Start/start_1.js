import React from 'react'
import { Image, Text, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function StartScreen_1({ navigation }) {
    const window = useWindowDimensions();
    return (
        <View style={styles.container}>
            <View style={styles.skip}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: "#5b97f0", textAlign: 'right', marginRight: 20, fontSize: 20 }}>Bỏ qua</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.image}>
                <Image source={require('../../assets/img/banner_1.webp')} style={{ height: window.height / 13 * 4, width: null }} />
            </View>
            <View style={styles.header}>
                <Text style={{ marginLeft: 20, fontSize: 20 }}>Đội ngũ giáo viên có trình độ cao</Text>
            </View>
            <View style={styles.content}>
                <Text style={{ marginLeft: 20, marginRight: 20 }}>
                “Giáo Viên Giỏi Nhất, Dạy Học Bằng Cả Trái Tim”
                </Text>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('StartScreen_2')} style={{ flex: 1 }}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    skip: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 4,
    },
    header: {
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        flex: 4,
    },
    btn: {
        flex: 2,
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
