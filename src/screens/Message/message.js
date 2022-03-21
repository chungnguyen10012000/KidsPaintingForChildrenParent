import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Notification } from '../../models/notification';

const fakeNotification = [
  {
    NotificationID: 1,
    NotificationTitle: 'Nghỉ học',
    NotificationBody: 'Chào ba mẹ của các bé và các bé!Thầy xin thông báo buổi học ngày mai sẽ được dời lịch đến thứ 7 lúc 19 giờ vì một số nguyên nhân khác quan. Mong sự thông cảm của ba mẹ và các bé.Trân trọng Dũng',
    NotificationTimestamp: '9 AM 10/10/2022'
  },
  {
    NotificationID: 1,
    NotificationTitle: 'Kiểm tra',
    NotificationBody: 'Chào ba mẹ của các bé và các bé!Thầy xin thông báo buổi kiểm tra ngày mai.Trân trọng Dũng',
    NotificationTimestamp: '10 AM 9/1/2022'
  }]

const contexParse = (res) => {
  const notifications = []
  res.forEach(element => {
    notifications.push(new Notification(element))
  });
  return notifications
}

export default function MessageScreen({ navigation }) {
  const notificationList = contexParse(fakeNotification)
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    enabled={Platform.OS === "ios" ? true : false}
    >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Tin nhắn</Text>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Tìm kiếm"
          placeholderColor="#c4c3cb"
          style={{ marginLeft: 20, marginRight: 20 }}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
        />
      </View>
      <View style={styles.message}>
        <ScrollView >
          {
            notificationList.map(function (message, index) {
              return (
                <View style={styles.message1} key={index}>
                  <View style={styles.header1}>
                    <FontAwesome5 name={'user-circle'} size={50} color='#d5182c' />
                    <Text style={{ color: '#3DB2FF', fontWeight: 'bold' }}>      {message.NotificationTitle}</Text>
                    <Text style={{ color: '#3DB2FF', fontWeight: 'bold' }}>      {message.NotificationTimestamp}</Text>
                  </View>
                  <View style={styles.content1}>
                    <Text style={{ color: '#000000' }}>{message.NotificationBody}</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
    </KeyboardAvoidingView>

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
  search: {
    flex: 1,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.5,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  message: {
    flex: 8,
    margin: 20
  },
  sendMessage: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  message1: {
    flex: 1,
  },
  header1: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  message2: {
    flex: 1,
  },
  content1: {
    flex: 9,
    marginLeft: 50
  }
})