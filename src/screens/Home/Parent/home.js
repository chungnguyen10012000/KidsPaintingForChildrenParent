import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TextInput,Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Course } from '../../../models/course';
import { Contest } from '../../../models/contest';

const fakeCourseList = [
    {
        CourseId: 1,
        CourseName: 'Khóa học chì màu dành cho trẻ 5-9 tuổi',
        CourseDescription: '...',
        CoursePrice: 2000000,
        CourseImg: 1,
        CourseAmount: 25,
    },
    {
        CourseId: 2,
        CourseName: 'Khóa học sáp màu dành cho trẻ 5-9 tuổi',
        CourseDescription: '...',
        CoursePrice: 2000000,
        CourseImg: 2,
        CourseAmount: 30,
    },
    {
        CourseId: 3,
        CourseName: 'Khóa học chì màu dành cho trẻ 5-9 tuổi',
        CourseDescription: '...',
        CoursePrice: 2000000,
        CourseImg: 1,
        CourseAmount: 25,
    },
    {
        CourseId: 4,
        CourseName: 'Khóa học sáp màu dành cho trẻ 5-9 tuổi',
        CourseDescription: '',
        CoursePrice: 2000000,
        CourseImg: 2,
        CourseAmount: 30,
    }
]

const contexParse = (res) => {
    const courses = []
    res.forEach(element => {
        courses.push(new Course(element))
    });
    return courses
}

const fakeContestList = [
    {
        ContestID: 0,
        ContestName: 'Vẽ X....',
        ContestBody: '....................',
        ContestStatus: 'Valid',
        StartTime: '10/10/2022',
        EndTime: '10/11/2022',
    },
    {
        ContestID: 1,
        ContestName: 'Vẽ Y....',
        ContestBody: '....................',
        ContestStatus: 'Valid',
        StartTime: '10/10/2022',
        EndTime: '10/11/2022'
    },
]

const contexParse2 = (res) => {
    const contests = []
    res.forEach(element => {
        contests.push(new Contest(element))
    });
    return contests
}

export default function CourseBuyForParent({ navigation }) {
    const courseList = contexParse(fakeCourseList)
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <View style={styles.container1}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Đang học</Text>
            </View>

            <View style={styles.search}>
                <TextInput
                    placeholder="Tìm kiếm"
                    placeholderColor="#c4c3cb"
                    style={{ marginLeft: 20, marginRight: 20 }}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                />
            </View>

            

            <View style={styles.listCourse}>
                <View style={{flex: 1}}>
                    <ScrollView >
                        <Text style={{ color: '#000000', marginLeft: 20, fontSize: 15 , marginTop: 20}}>Khóa học </Text>
                        {
                            courseList.map((element, index) => {
                                return (
                                    <View style={{ flex: 1, marginBottom: 20, marginLeft: 20, marginTop: 20, flexDirection: 'row' }} key={index}>
                                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                                            <TouchableOpacity onPress={() => navigation.navigate('TrackingCourseKid')}>
                                                <Image source={require(`../../../assets/img/khoahoc2.jpg`)} style={styles.image} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex: 2}}>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>{element.CourseName} </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Số lượng: {element.CourseAmount} </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Thể loại: {element.CourseAmount} </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Câp độ: {element.CourseAmount} </Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
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