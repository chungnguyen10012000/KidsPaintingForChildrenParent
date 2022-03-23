import React from 'react';
import {  Text, View, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const exerciseList = [
  {
  ExerciseID: 1,
  ExerciseName: 'Vẽ X....',
  Body: '....................',
  Weight: 10,
  MaxSubmission: 3
  },
  {
    ExerciseID: 2,
    ExerciseName: 'Vẽ Y....',
    Body: '....................',
    Weight: 20,
    MaxSubmission: 3
  },
  {
    ExerciseID: 3,
    ExerciseName: 'Vẽ Z....',
    Body: '....................',
    Weight: 30,
    MaxSubmission: 3
  }
]

export default function Lessons({ route, navigation }) {
  const { lesson_id, description, lesson_name } = route.params
  var arr = [...Array(exerciseList.length).keys()];
  if (description !== ""){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>{lesson_name}</Text>
        </View>
        <View style={styles.myclass}>
          <View style={styles.header1}>
            <FontAwesome5 name={'angle-double-right'} size={24} color='#d5182c' />
            <Text style={{ color: '#000000', fontWeight: 'bold'}}>  Nội dung bài học</Text>
          </View>
          <View style={styles.content}>
                <Text>{description}</Text>
          </View>
        </View>
        <View style={styles.activities}>
          <View style={styles.header1}>
            <FontAwesome5 name={'angle-double-right'} size={24} color='#d5182c' />
            <Text style={{ color: '#000000', fontWeight: 'bold' }}>  Bài tập của buổi học</Text>
          </View>
          <View style={styles.content}>
          <ScrollView>
           {
             arr.map((data) => {
               return (
                 <TouchableOpacity onPress={() => navigation.navigate('Exercise', { exercise_id: data})} key={data}>
                   <View style={styles.lesson}>
                     <Text style={{color: '#ffffff'}}>Bài tập {data + 1}</Text>
                   </View>
                 </TouchableOpacity>
               )
             })
           }
          </ScrollView>
          </View>
        </View>
      </View>

  );
  }
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>{lesson_name}</Text>
        </View>
        <View style={styles.myclass}>
          <View style={styles.header1}>
            <FontAwesome5 name={'angle-double-right'} size={24} color='#d5182c' />
            <Text style={{ color: '#000000', fontWeight: 'bold'}}>  Phòng học </Text>
          </View>
          <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('VideoCall')} style={{ flex: 1 }}>
                    <View style={styles.loginButton}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Tham gia</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <FontAwesome5 name={'angle-right'} size={24} color={"#ffffff"} style={{ fontSize: 18, textAlign: 'right', marginRight: 20 }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.activities}>
          <View style={styles.header1}>
            <FontAwesome5 name={'angle-double-right'} size={24} color='#d5182c' />
            <Text style={{ color: '#000000', fontWeight: 'bold' }}>  Bài tập của buổi học</Text>
          </View>
          <View style={styles.content}>
          <ScrollView>
           {
             arr.map((data) => {
               return (
                 <TouchableOpacity onPress={() => navigation.navigate('Exercise', { exercise_id: data})} key={data}>
                   <View style={styles.lesson}>
                     <Text style={{color: '#ffffff'}}>Bài tập {data + 1}</Text>
                   </View>
                 </TouchableOpacity>
               )
             })
           }
          </ScrollView>
          </View>
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
    flex: 1,
    width: '100%',
    marginBottom: 20
  },
  activities: {
    flex: 3,
    width: '100%',
  },
  header1: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20
  },
  content: {
    flex: 5,
    marginTop: 10,
    alignItems: 'center'
  },
  lesson: {
    flex: 1,
    height: 50,
    width: '100%',
    borderColor: '#3DB2FF',
    borderWidth: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a58fc',
    marginBottom: 10,
    borderRadius: 20,
    height: 45,
    width: 350,
    alignItems: "center"
  },
  btn: {
    flex: 4,
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