import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, Image } from 'react-native';

import ColorButton from "../../components/colorButton";

function EndGameScreen({ route, navigation }) {
    const { selected, answer } = route.params;

    function playAgainHandler() {
        navigation.navigate('StartGame')
    }

    function getAnswerText() {
        if (selected === answer) {
            return (<View style={styles.resultBox}>
                <Text style={styles.resultText}>Chính xác rồi!</Text>
                <Image source={require(`../../assets/img/check.png`)}/>
            </View>);
        } else {
            return (<View style={{ ...styles.resultBox }}>
                <Text style={styles.resultText}>Rất tiếc. Bé đã chọn không chính xác!</Text>
            </View>);
        }
    }

    return (
            <View style={styles.infoContainer}>
                <View style={styles.buttonContainer}>
                    { getAnswerText() }
                </View>
                <View style={styles.selectionContainer}>
                    <View style={styles.answerContainer}>
                        <Text style={styles.descriptiorText}>Màu bé chọn:</Text>
                        <ColorButton style={{ backgroundColor: selected }} />
                    </View>
                    <View style={styles.answerContainer}>
                        <Text style={styles.descriptiorText}>Kết quả:</Text>
                        <ColorButton style={{ backgroundColor: answer }} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={playAgainHandler}>
                        <View style={styles.playAgainButton}>
                            <Text style={styles.playAgainText}>Chơi lại nào</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, width: '100%', justifyContent: "center", alignItems: "center" },
    infoContainer: { alignItems: "center", justifyContent: "space-around", height: "100%", paddingBottom: "10%" },
    resultBox: { width: '100%', height: 75, alignItems: "center", justifyContent: "center", borderRadius: 20 },
    resultText: { fontSize: 20, color: '#000', paddingLeft: 10, paddingRight: 10 },
    selectionContainer: { flexDirection: "row", justifyContent: "space-evenly", alignContent: "center", width: "100%"},
    answerContainer: {margin: 10},
    descriptiorText: { color: "#000", fontSize: 12, textAlign: "center" },
    playAgainButton: { width: 150, height: 75, backgroundColor: '#2a58fc', alignItems: "center", justifyContent: "center", borderRadius: 20 },
    playAgainText: { fontSize: 20, color: '#ffffff' }
});

export default EndGameScreen;