import React from 'react';
import Schedule from 'rn-simple-schedule';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const data = [
    {
      Title: 'Meeting with John',
      Subtitle: 'About the new project',
      DayIndex: 1, //Monday
      StartTime: '08:30',
      EndTime: '09:30',
      Color: "#56b7fc"
    },
    {
      Title: 'Stay at home',
      Subtitle: 'Stay cool',
      DayIndex: 6, //Saturday
      StartTime: '08:30',
      EndTime: '18:30',
      Color: "#00ff67"
    }
  ];

export default function TrackingSchedule() {
  return (
      <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Khóa học</Text>
            </View>
            <View style={styles.content}>
                <Schedule 
                  lang='en'
                  data={data} 
                  rowSize={100}
                  minHour={8}
                  minMinute={30}
                  numberOfRows={10}
                  canRemove={false}
                  darkMode={false}
                  onAppointmentRemoved={(app)=>console.log(app)}
                  onSelectedDayChanged={(dayIndex)=>console.log(dayIndex)}
                />
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
        flex: 1,
        width: '100%',
        backgroundColor: '#d5182c',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    content: {
        flex: 4
    }
})