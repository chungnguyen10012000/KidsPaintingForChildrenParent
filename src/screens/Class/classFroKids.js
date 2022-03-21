import * as React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Session } from '../../models/session';
import { DataTable } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const fakeSessonList = [
  {
    SectionId: 1,
    SectionName: 'Giới thiệu, làm quen với nhau',
    SectionDescription: '...',
    SectionStartTime: '9 AM 10-10-2022',
    SectionEndTime: '11 AM 10-10-2022',
  },
  {
    SectionId: 2,
    SectionName: 'Nhận dạng hình',
    SectionDescription: '...',
    SectionStartTime: '9 AM 10-10-2022',
    SectionEndTime: '11 AM 10-10-2022',
  },
  {
    SectionId: 3,
    SectionName: 'Nhận dạng hình',
    SectionDescription: '...',
    SectionStartTime: '9 AM 10-10-2022',
    SectionEndTime: '11 AM 10-10-2022',
  },
  {
    SectionId: 4,
    SectionName: 'Nhận dạng hình',
    SectionDescription: '...',
    SectionStartTime: '9 AM 10-10-2022',
    SectionEndTime: '11 AM 10-10-2022',
  },
  {
    SectionId: 5,
    SectionName: 'Nhận dạng hình',
    SectionDescription: '...',
    SectionStartTime: '9 AM 10-10-2022',
    SectionEndTime: '11 AM 10-10-2022',
  },
  {
    SectionId: 6,
    SectionName: 'Nhận dạng hình',
    SectionDescription: '',
    SectionStartTime: '9 AM 10-10-2022',
    SectionEndTime: '11 AM 10-10-2022',
  }
]

const contexParse = (res) => {
  const sessions = []
  res.forEach(element => {
    sessions.push(new Session(element))
  });
  return sessions
}

export default function ClassScreenKid({ route, navigation }) {
  const { course_id } = route.params
  const sessionList = contexParse(fakeSessonList)
  console.log(sessionList)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Lớp CM-1</Text>
      </View>
      <View style={styles.listExtension}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <TouchableOpacity  onPress={() => navigation.navigate('GBAForKids')}style={{alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#e83640', height: '50%', width: '50%', flex: 0.6}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '50%', flex: 0.6}}>
                        <FontAwesome5 name={'receipt'} size={30} color='#ffffff' />
                    </View>
                </TouchableOpacity>
                <View style={{flex: 0.4}}>
                    <Text>Tiến độ</Text>
                </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                  <View style={{alignItems: 'center', justifyContent: 'center',  height: '50%', width: '50%', flex: 0.6}}>
                    
                  </View>
                  <View style={{flex: 0.4}}>
                      
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                  
                </View>
            </View>
      <View style={styles.myclass}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>STT</DataTable.Title>
          <DataTable.Title>Bài học</DataTable.Title>
          <DataTable.Title numeric></DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {
            sessionList.map((ele, index) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate("MyLesson", {lesson_id : ele.SectionId, description: ele.SectionDescription, lesson_name: ele.SectionName})} key={index}>
                  <DataTable.Row key={index}>
                    <DataTable.Cell>{index}</DataTable.Cell>
                    <DataTable.Cell>{ele.SectionName}</DataTable.Cell>
                    <DataTable.Cell numeric></DataTable.Cell>
                  </DataTable.Row>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>

      </DataTable>
        {/* <View style={styles.content}>
                        <ScrollView>
                          {
                            arr.map((data) => {
                              return (
                                <TouchableOpacity onPress={() => navigation.navigate('MyLesson', { lesson_id: data})} key={data}>
                                  <View style={styles.lesson}>
                                    <Text>Buổi {data + 1}</Text>
                                  </View>
                                </TouchableOpacity>
                              )
                            })
                          }
                        </ScrollView>
                    </View> */}
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
    flex: 1,
    width: '100%',
    backgroundColor: '#d5182c',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  myclass: {
    flex: 4
  },
  listExtension: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
})