import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Contest } from '../../../../models/contest';

const fakeContestList = [
    {
        ContestID: 1,
        ContestName: 'Cuộc thi vẽ tranh động vật',
        MaxContestParticipant: 20,
        Image: 'https://photo-cms-vovworld.zadn.vn/w500/Uploaded/vovworld/qosrgt/2022_01_06/11-hocsinhcua197truong_SCAD.jpg',
        ContestStatus: 'Đang diễn ra',
        ContestBody: 'Cuộc thi vẽ tranh dành cho thiếu nhi từ 6 - 15 tuổi, đang học tập và sinh sống tại Hà Nội, với thông điệp : Chung tay bảo đảm thực hiện quyền, bảo vệ trẻ em trong thiên tai, dịch bệnh.',
        StartTime: '10-10-2022',
        EndTime: '10-10-2022',
    },
    {
        ContestID: 2,
        ContestName: 'Cuộc thi vẽ tranh động vật',
        MaxContestParticipant: 20,
        Image: 'https://i.pinimg.com/736x/cd/0b/90/cd0b90bb3237ce724268ed49c147d165.jpg',
        ContestStatus: 'Đang diễn ra',
        ContestBody: 'Cuộc thi vẽ tranh dành cho thiếu nhi từ 6 - 15 tuổi, đang học tập và sinh sống tại Hà Nội, với thông điệp : Chung tay bảo đảm thực hiện quyền, bảo vệ trẻ em trong thiên tai, dịch bệnh.',
        StartTime: '10-10-2022',
        EndTime: '10-10-2022',
    },
]

const contexParse = (res) => {
    const contests = []
    res.forEach(element => {
        contests.push(new Contest(element))
    });
    return contests
}


export default function TrackingContest({ route, navigation }) {
    const contests = contexParse(fakeContestList)

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

                <View style={styles.listExtension}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('TrackingContestStudied')} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '50%', flex: 0.6 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#2a58fc', height: '50%', width: '100%', flex: 1 }}>
                                <FontAwesome5 name={'receipt'} size={30} color='#ffffff' />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 0.4 }}>
                            <Text>Đã thi</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableOpacity onPress={() => navigation.navigate('TrackingProgressContest')} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '50%', flex: 0.6 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '100%', flex: 1 }}>
                                <FontAwesome5 name={'receipt'} size={30} color='#ffffff' />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 0.4 }}>
                            <Text>Tiến độ</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    </View>
                </View>

                <View style={styles.listCourse}>
                    <View style={{ flex: 1 }}>
                        <ScrollView>
                            <Text style={{ color: '#000000', marginLeft: 20, fontSize: 15, marginTop: 20 }}>Đang thi</Text>
                            {
                                contests.map((ele, index) => {
                                    return (
                                        <View style={{ flex: 1, marginBottom: 20, marginLeft: 20, marginTop: 20, flexDirection: 'row' }} key={index}>
                                            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                                <TouchableOpacity onPress={() => navigation.navigate('TrackingResultContest')}>
                                                    <Image source={{ uri: ele.Image }} style={styles.image} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 2 }}>
                                                <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>{ele.ContestName} </Text>
                                                <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Số lượng: {ele.MaxContestParticipant} </Text>
                                                <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Thể loại: Chì màu </Text>
                                                <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Câp độ: 5-16 tuổi </Text>
                                                <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Từ: {ele.StartTime} đến {ele.EndTime} </Text>
                                            </View>
                                        </View>
                                    )
                                }
                                )
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
        borderRadius: 10,
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        alignSelf: 'stretch',
    }
})