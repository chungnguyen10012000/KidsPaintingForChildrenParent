import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { Submit } from '../../../models/submit';

const fakeSubmitList = [{
    SubmitId: 1,
    SubmitTime: '9 AM 10/10/2022',
    SubmitScore: 8,
    Feedback: 'Bài làm của bé khá tốt',
    Picture: ''
},
{
    SubmitId: 2,
    SubmitTime: '10 AM 10/11/2022',
    SubmitScore: 7,
    Feedback: 'Bài làm của bé chưa quá tốt',
    Picture: ''
},
{
    SubmitId: 3,
    SubmitTime: '11 AM 1/12/2022',
    SubmitScore: 8,
    Feedback: 'Bài làm của bé khá tốt',
    Picture: ''
},
{
    SubmitId: 4,
    SubmitTime: '12 AM 12/12/2022',
    SubmitScore: 6,
    Feedback: 'Bài làm của bé khoong tốt',
    Picture: ''
}
]

const contexParse = (res) => {
    const submits = []
    res.forEach(element => {
        submits.push(new Submit(element))
    });
    return submits
  }


export default function TrackingContestKid({ route, navigation }) {
    const { contest_id } = route.params
    //console.log(contest_id)
    const submitList = contexParse(fakeSubmitList)
    //console.log(submitList)
    
    return (
      <View style={styles.container}>
            <View style={styles.content}>
                <Text>Thời gian nộp: {submitList[contest_id].SubmitTime}</Text>
                <Text>Số điểm: {submitList[contest_id].SubmitScore}</Text>
                <Text>Nhận xét giáo viên: {submitList[contest_id].Feedback}</Text>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    alignContent:'flex-start',
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    justifyContent: 'center'
  },

})