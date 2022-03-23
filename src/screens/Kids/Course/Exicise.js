import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { launchImageLibrary } from 'react-native-image-picker';

const exerciseList = [
    {
    ExerciseID: 0,
    ExerciseName: 'Vẽ X....',
    Body: '....................',
    Weight: 10,
    MaxSubmission: 3
    },
    {
      ExerciseID: 1,
      ExerciseName: 'Vẽ Y....',
      Body: '....................',
      Weight: 20,
      MaxSubmission: 3
    },
    {
      ExerciseID: 2,
      ExerciseName: 'Vẽ Z....',
      Body: '....................',
      Weight: 30,
      MaxSubmission: 3
    }
  ]


const fakeSubmitList = [{
  SubmissionID: 1,
  SubmitTime: '9 AM 10-10-2022',
  SubmitScore: 0,
  Feedback: '',
  Picture: '',
}]

export default function Exicises({ route, navigation }) {
    const { exercise_id } = route.params
    const [photo, setPhoto] = React.useState(null);
    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
          if (response) {
            setPhoto(response);
          }
        });
      };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold'  }}>    Bài tập {exercise_id + 1}</Text>
        </View>
        {
            (
                function () {
                    return (
                        <View style={styles.content}>
                            <Text style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20, color: '#000000' }}>Đề bài: {exerciseList[exercise_id].Body}</Text>
                            <Text style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20, color: '#000000' }}>Số lần nộp tối đa:  {exerciseList[exercise_id].MaxSubmission}</Text>
                            
                            <Text style={{ textAlign: 'center', alignContent: 'center', alignItems: 'center', color: 'red', marginTop: 20 }}></Text>
                        </View>
                    )
                }
            )()
        }
          <View style={styles.btn}>
                <TouchableOpacity onPress={() => handleChoosePhoto()} style={{ flex: 1 }}>
                    <View style={styles.loginButton}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Tải ảnh lên</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <FontAwesome5 name={'angle-right'} size={24} color={"#ffffff"} style={{ fontSize: 18, textAlign: 'right', marginRight: 20 }} />
                        </View>
                    </View>
                </TouchableOpacity>
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
  content: {
    flex: 9,
    width: '100%',
    alignItems: 'center',
    alignContent: 'center'
  },
  image: {
    marginBottom: 8,
    borderRadius: 10
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