import React, { useState } from 'react';
import { RefreshControl, StyleSheet, Text, View, Button, Linking, TouchableOpacity } from 'react-native';

import ColorButton from "../../components/colorButton";
import generateRandomColor from "./randomColor"
import { Root, Popup } from 'popup-ui'

function GameScreen({route, navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const { color } = route.params;
    const { mode } = {mode: "easy"};
    const numRows = mode === "easy" ? 2 : 4;
    const numButtons = numRows*2;
    const answer = Math.floor(Math.random()*numButtons);
    let colors_array = Array(numButtons).fill(1).map((val, i) => {
        return (i === answer) ? color : generateRandomColor()
    });
    let button_array = [];
    for (let i=0; i<numButtons; i+=2) button_array.push({c1: colors_array[i], c2: colors_array[i+1]});
    let view_array = button_array.map((v, i) => {
        return (
        <View key={i} style={styles.selectorContainer}>
            <ColorButton style={{...styles.colorButton, backgroundColor: v.c1}} onPress={colorButtonInputHandler.bind(this, v.c1)}/>
            <ColorButton style={{...styles.colorButton, backgroundColor: v.c2}} onPress={colorButtonInputHandler.bind(this, v.c2)}/>
        </View>
        )
    });

    function colorButtonInputHandler(selectedColor) {
        //navigation.navigate("EndGame", {selected: selectedColor, answer: color});
        if (selectedColor === color) {
            Popup.show({
                type: 'Success',
                title: 'Chính xác',
                button: true,
                textBody: 'Chúc mừng bé đã',
                buttonText: 'Ok',
                callback: () => {
                    Popup.hide()
                    navigation.navigate('StartGame')
                }
            })
        }
        else{
            Popup.show({
                type: 'Danger',
                title: 'Chưa chính xác',
                button: true,
                textBody: 'Bé chọn lại nào!',
                buttonText: 'Ok',
                callback: () => Popup.hide()
            })
        }
    }

  return (
    <Root style={{flex: 1, width: '100%'}}>
        <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Nhận biết màu sắc</Text>
        </View>
        <View style={styles.colorContainer}>
            <ColorButton style={{...styles.colorButton, backgroundColor: color}} />
        <Text style={styles.colorText}>Chọn màu</Text>
        </View>
        { view_array }
        </View>
    </Root>
  );
}

const styles = StyleSheet.create({
    screen: {flex: 1, backgroundColor: '#ffffff', justifyContent: "center", alignContent: 'center', alignItems: 'center'},
    colorContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorText: {color: '#000000', fontSize: 20},
    selectorContainer: {margin: "1%", flexDirection: "row"},
    colorButton: {margin: 5},
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#d5182c',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
});

export default GameScreen;