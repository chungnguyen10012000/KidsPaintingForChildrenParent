import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const user = {
    id: 1,
    name: 'Nguyen Van Chung',
    sex: 'Nam',
    birthday: '10/01/2000',
    address: 'Thanh Hoa',
    phone: '0989439678',
    email: 'nvchung00@gmail.com'
}

export default function ViewInfoScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Thông tin cá nhân</Text>
        </View>
        <View style={styles.function}>
          <Text style={{ color: '#000000', marginLeft: 50 }}>Tên:  {user.name}</Text>
        </View>
        <View style={styles.function}>
            <Text style={{ color: '#000000', marginLeft: 50 }}>Email: {user.email}</Text>
        </View>
        <View style={styles.function}>
            <Text style={{ color: '#000000', marginLeft: 50 }}>Địa chỉ: {user.address}</Text>
        </View>
        <View style={styles.function}>
            <Text style={{ color: '#000000', marginLeft: 50 }}>Giới tính: {user.sex}</Text>
        </View>
        <View style={styles.function}>
            <Text style={{ color: '#000000', marginLeft: 50 }}>Ngày sinh: {user.birthday}</Text>
        </View>
        <View style={styles.function}>
            <Text style={{ color: '#000000', marginLeft: 50 }}>Số điện thoại: {user.phone}</Text>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  function: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    alignContent: 'center',
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
})