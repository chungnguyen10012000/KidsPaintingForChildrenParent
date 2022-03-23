import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default function TrackingResultDetailContest({ route, navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Chi tiết</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 20}}>Bài làm của bé</Text>
        </View>
        <View style={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: 'https://photo-cms-vovworld.zadn.vn/w730/uploaded/vovworld/qjhmn/2021_05_31/a1_emnm.jpg'}} style={styles.image} />
            <Text style={{textAlign: 'center', alignContent: 'center', alignItems: 'center',  color: '#3DB2FF', marginLeft: 20, marginRight: 20, marginBottom: 20}}>Nhận xét của giáo viên</Text>
            <Text>Bài làm của bé tốt</Text>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    flex: 2,
    width: '100%',
    backgroundColor: '#d5182c',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
},
  image: {
    marginBottom: 8,
    borderRadius: 10,
    width: 200,
    height: 200,
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