import * as React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView,  KeyboardAvoidingView} from 'react-native';
import CheckBox from 'react-native-check-box'
import { Course } from '../../../models/course';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const fakeCourseList = [
    {
        CourseId: 1,
        CourseName: 'Khóa học chì màu dành cho trẻ 5-9 tuổi',
        CourseDescription: '...',
        CoursePrice: 2000000,
        CourseImg: 'https://previews.123rf.com/images/lenm/lenm1707/lenm170700163/81936839-ilustraci%C3%B3n-de-stickman-kids-equilibrio-en-un-tabl%C3%B3n-de-madera-en-un-obst%C3%A1culo.jpg',
        CourseAmount: 25,
    },
    {
        CourseId: 2,
        CourseName: 'Khóa học sáp màu dành cho trẻ 5-9 tuổi',
        CourseDescription: '...',
        CoursePrice: 2000000,
        CourseImg: 'https://www.emotions.ae/wp-content/uploads/2019/05/drawing-class-kids.jpg',
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
// TODO: CLICK TO AVATAR -> TAB BAR FOR CHILD
export default function HistoryPayment({ route, navigation }) {
    const courseList = contexParse(fakeCourseList)
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Lịch sử mua</Text>
            </View>

            <View style={styles.listCourse}>
                <View style={{flex: 1}}>
                    <ScrollView>
                        {
                            courseList.map((element, index) => {
                                return (
                                    <View style={{ flex: 1, marginBottom: 20, marginLeft: 20, marginTop: 20, flexDirection: 'row' , }} key={index}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <TouchableOpacity onPress={() => navigation.navigate('TabBarForTracking', { course_id: index })}>
                                                <Image source={{uri: element.CourseImg}} style={styles.image} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>{element.CourseName}</Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Giá:  {element.CoursePrice}</Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Thời gian:  9:00 AM 23-3-2022</Text>
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
        flex: 1,
        borderRadius: 40,
        width: 80,
        height: 80,
        resizeMode: 'cover',
        alignSelf: 'stretch',
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