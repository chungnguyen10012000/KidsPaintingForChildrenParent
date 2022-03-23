import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, Button, Picker } from 'react-native';
import { ListItem } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { launchImageLibrary } from 'react-native-image-picker';
import { Contest } from '../../../../models/contest';

const fakeContestList = [
    {
        ContestID: 0,
        ContestName: 'Vẽ X....',
        ContestBody: 'Đây là cuộc thi vẽ tranh gia đình được tổ chức hàng năm của KidsPainting. Nhằm giúp trẻ thỏa sức tưởng tượng, gắn kết gia dình.',
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


const contexParse = (res) => {
    const contests = []
    res.forEach(element => {
        contests.push(new Contest(element))
    });
    return contests
}

export default function JoinContest({ route, navigation }) {
    const [photo, setPhoto] = React.useState(null);
    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            alert(response);
            if (response) {
                setPhoto(response);
            }
        });
    };
    const contestList = contexParse(fakeContestList)
    const [selectedValue, setSelectedValue] = React.useState("child_1");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Chi tiết</Text>
            </View>
            {
                (
                    function () {
                        return (
                            <View style={styles.content}>
                                <Text style={{ textAlign: 'center', alignItems: 'center', margin: 20, color: '#3DB2FF' }}>Chi tiết cuộc thi: {contestList[0].ContestBody}</Text>
                                <Text style={{}}>Loại: Chì màu</Text>
                                <Text style={{}}>Câp độ: Trẻ 5-9 tuổi</Text>
                                <Text style={{}}>Trạng thái:  {contestList[0].ContestStatus}</Text>
                                <Text style={{}}>Thời gian bắt đầu:  {contestList[0].StartTime}</Text>
                                <Text style={{}}>Thời gian kết thúc:  {contestList[0].EndTime}</Text>
                            </View>
                        )
                    }
                )()
            }
            <View style={{ flex: 2, marginBottom: 20, alignItems: 'flex-start'}}>
                <Text style={{color: '#000000'}}>Chọn tài khoản</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Nguyen Chung" value="child_1" />
                    <Picker.Item label="Tran Binh" value="child_2" />
                </Picker>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('MyContest')} style={{ flex: 1 }}>
                    <View style={styles.loginButton}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Đăng ký ngay</Text>
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
        alignItems: 'center',
        backgroundColor: '#ffffff'
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
        flex: 8,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        marginBottom: 8,
        borderRadius: 10
    },
    lesson: {
        height: 50,
        width: '100%',
        borderColor: '#3DB2FF',
        borderWidth: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#3DB2FF',
        marginBottom: 10,
        borderRadius: 5,
        height: 45,
        width: 350,
        alignItems: "center"
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