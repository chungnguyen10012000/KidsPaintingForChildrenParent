import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Schedule from 'rn-simple-schedule';
import WeeklyCalendar from 'react-native-weekly-calendar';

const sampleEvents = [
    { 'start': '2022-03-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
    { 'start': '2022-03-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
    { 'start': '2022-03-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
    { 'start': '2022-03-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
    { 'start': '2022-03-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
    { 'start': '2022-03-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
    { 'start': '2022-03-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
    { 'start': '2022-03-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
    { 'start': '2022-03-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
    { 'start': '2022-03-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
  ]

export default function HomeKids({ route, navigation }) {

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
        >
            <View style={styles.container1}>
                <View style={styles.header}>
                    <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Khóa học</Text>
                </View>

                <View style={styles.listExtension}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CourseStudied')} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '50%', flex: 0.6 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#2a58fc', height: '50%', width: '100%', flex: 1 }}>
                                <FontAwesome5 name={'history'} size={30} color='#ffffff' />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 0.4 }}>
                            <Text>Đã học</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    </View>
                </View>

                <View style={styles.listCourse}>
                    <View style={{ flex: 1 }}>
                        <ScrollView >
                            <Text style={{ color: '#000000', marginLeft: 20, fontSize: 15, marginTop: 20 }}>Thời khóa biểu</Text>
                            <WeeklyCalendar 
                                events={sampleEvents} 
                                style={{ height: 400 }} 
                            />
                        </ScrollView>
                    </View>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container1: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
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
    search: {
        flex: 1,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
        backgroundColor: '#ffffff',
        marginTop: 20,
    },
    listExtension: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    listCourse: {
        flex: 8,
        width: '100%'
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
        borderRadius: 10,
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignSelf: 'stretch',
    }
})