import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function SendMessageScreen({navigation}) {
  const [title, setTiltle] = useState("")
  const [body, setBody] = useState("");
  console.log(title,body)
  return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Gửi tin nhắn</Text>
        </View>
        <View style={styles.message}>
              <SafeAreaView>
                <TextInput
                  placeholderColor="#c4c3cb"
                  style={{ marginLeft: 20, borderBottomWidth: 0.5, marginRight: 20 }}
                  onChangeText={(text) => setTiltle(text)}
                  value={title}
                  placeholder="Nhập tiêu đề"
                />
              </SafeAreaView>
              <SafeAreaView>
                <TextInput
                  placeholderColor="#c4c3cb"
                  style={{ marginLeft: 20, borderBottomWidth: 0.5, marginRight: 20 }}
                  onChangeText={(text) => setBody(text)}
                  value={body}
                  placeholder="Nhập nội dung"
                />
              </SafeAreaView>
        </View>
        <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('StartScreen_1')} style={{ flex: 1 }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    flex: 2,
    width: '100%',
    backgroundColor: '#d5182c',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  message: {
    flex: 6,
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