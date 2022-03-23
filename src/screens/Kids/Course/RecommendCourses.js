import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Course } from '../../../models/course';

const fakeCourseList = [
    {
      CourseId: 1,
      CourseName: 'Khóa học chì màu dành cho trẻ 5-9 tuổi',
      CourseDescription: '  Đây là khóa học phù hợp với những bé mới tập làm quen với việc vẽ tranh. Với công cụ là chì màu rất dễ dàng để bé học tập.',
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
    }
  ]
  
  const contexParse = (res) => {
    const courses = []
    res.forEach(element => {
      courses.push(new Course(element))
    });
    return courses
  }



export default function RecommendCourses({ route, navigation }) {
    const courseList = contexParse(fakeCourseList)
    const { course_id } = route.params
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Chi tiết khóa học</Text>
        </View>
        <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require(`../../../assets/img/khoahoc2.jpg`)} style={styles.image} />
            <Text style={{textAlign: 'center', alignContent: 'center', alignItems: 'center',  color: '#3DB2FF', marginLeft: 20, marginRight: 20, marginBottom: 20}}>{courseList[course_id].CourseDescription} </Text>
            <Text style={{textAlign: 'center', alignContent: 'center', alignItems: 'center', marginBottom: 20}}>Số buổi: {courseList[course_id].CourseAmount} </Text>
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