import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function UtilityScreen({  route,navigation }) {
  const { isChild } = route.params
  if (isChild == false) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Tiện ích</Text>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'user-circle'} size={30} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('ViewInfo')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Nguyễn Văn Chung</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'user-edit'} size={30} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('ChangeInfo')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Thay đổi thông tin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'sign-out-alt'} size={30} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
  }
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Tiện ích</Text>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'user-circle'} size={40} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('ViewInfo')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Nguyễn Văn Chung</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'user-edit'} size={30} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('ChangeInfo')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Thay đổi thông tin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'paint-brush'} size={30} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('StartGame')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Trò chơi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'mixer'} size={30} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('MixerColor')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Phối màu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.function}>
          <FontAwesome5 name={'sign-out-alt'} size={30} color='#000000' style={{ height: 30, width: 30 }} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#000000', marginLeft: 30 }}>  Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  header: {
    flex: 2,
    width: '100%',
    backgroundColor: '#d5182c',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  function: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
})