import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity } from 'react-native';
import ColorButton from "../../components/colorButton";

function AnswerScreen({ route, navigation }) {
    const { answer } = route.params;

    return (
            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Kết quả trộn màu</Text>
                </View>
                <View style={styles.selectionContainer}>
                    <View style={styles.answerContainer}>
                        <ColorButton style={{ backgroundColor: answer }} />
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: { 
        flex: 1,
        alignItems: "center", 
        justifyContent: "space-around", 
        height: "100%", 
        paddingBottom: "10%" 
    },
    buttonContainer: {
        flex: 1
    },
    selectionContainer: { 
        flex: 4,
        alignContent: "center", 
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    answerContainer: {
        margin: 0,
        alignItems: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#d5182c',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
});

export default AnswerScreen;