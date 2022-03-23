import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TextInput,Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Contest } from '../../../models/contest';

const fakeContestList = [
    {
        ContestID: 0,
        ContestName: 'Vẽ X....',
        ContestBody: '....................',
        ContestStatus: 'Đang diễn ra',
        StartTime: '10/10/2022',
        EndTime: '10/11/2022',
    },
    {
        ContestID: 2,
        ContestName: 'Vẽ Y....',
        ContestBody: '....................',
        ContestStatus: 'Chưa diễn ra',
        StartTime: '10/10/2022',
        EndTime: '10/11/2022'
    },
]

const contexParse = (res) => {
    const contests = []
    res.forEach(element => {
        contests.push(new Contest(element))
    });
    return contests
}

export default function ContestJoined({  navigation }) {

    const contestList = contexParse(fakeContestList)
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Cuộc thi</Text>
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
                    <ScrollView>
                        <Text style={{ color: '#000000', marginLeft: 20, fontSize: 15 , marginTop: 20}}>Tất cả cuộc thi </Text>
                        {
                            contestList.map((element, index) => {
                                return (
                                    <View style={{ flex: 1, marginBottom: 20, marginLeft: 20, marginTop: 20, flexDirection: 'row' }} key={index}>
                                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                                            <TouchableOpacity onPress={() => navigation.navigate('ScoreContestAll', { contest_id: index })}>
                                                <Image source={require(`../../../assets/img/khoahoc2.jpg`)} style={styles.image} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex: 2}}>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>{element.ContestName} </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>{element.ContestStatus} </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Số người tối đa tham dự: 100 </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Mức độ: 5-9 tuổi </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Thể loại: Chì màu </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Thời gian bắt đầu: 10-10-2022 </Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Thời gian kết thức: 10-10-2022 </Text>
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
        flex: 1,
        resizeMode: 'stretch',
        alignSelf: 'stretch',
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
})