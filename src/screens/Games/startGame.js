import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import generateRandomColor from "./randomColor"


function StartGameScreen({ navigation }) {
    const [color, setColor] = useState(generateRandomColor());

    function startHandler() {
        setColor(generateRandomColor());
        navigation.navigate("Game", {color: color});
    }

  return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Nhận biết màu sắc</Text>
        </View>
        <View style={styles.infoContainer}>
        <View style={styles.btn}>
                <TouchableOpacity onPress={() => startHandler()} style={{ flex: 0.3 }}>
                    <View style={styles.loginButton}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Chơi ngay</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <FontAwesome5 name={'angle-right'} size={24} color={"#ffffff"} style={{ fontSize: 18, textAlign: 'right', marginRight: 20 }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    width: '100%', 
    justifyContent: "center", 
    alignContent: "center"
  },
  infoContainer: {
    flex: 4,
    alignItems: "center", 
    justifyContent: 'center'
  },
  button: {
    width: 200, 
    height: 50, 
    padding: 10, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: '#3DB2FF', 
    margin: 15, 
    borderRadius: 40
  },
  buttonFont : {
    fontSize: 20, 
    textAlign: "center", 
    textAlignVertical: "center"
  },
  hyperlink: {
    color: "#fff", 
    fontSize: 18, 
    textDecorationLine: "underline"
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
});

export default StartGameScreen;
