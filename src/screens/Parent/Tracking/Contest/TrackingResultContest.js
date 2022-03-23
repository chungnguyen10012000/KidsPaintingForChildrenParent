import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Submit } from '../../../../models/submit';
import ProgressCircle from 'react-native-progress-circle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const fakeSubmitList = [
    {
        SubmissionID: 1,
        SubmitTime: '9 AM 10-10-2022',
        SubmitScore: 8,
        Feedback: '',
        Picture: '',
    },
    {
        SubmissionID: 2,
        SubmitTime: '9 AM 10-10-2022',
        SubmitScore: 6,
        Feedback: '',
        Picture: '',
    }
]

const contexParse = (res) => {
    const submits = []
    res.forEach(element => {
        submits.push(new Submit(element))
    });
    return submits
}

export default function TrackingResultContest({ route, navigation }) {
    //const { contest_id } = route.params
    const submitList = contexParse(fakeSubmitList)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Điểm</Text>
            </View>
            <View style={styles.myclass}>
                <Text style={{color: '#000000'}}>Bảng xếp hạng</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>STT</DataTable.Title>
                        <DataTable.Title>Tên</DataTable.Title>
                    </DataTable.Header>
                    <ScrollView>
                        {
                            submitList.map((ele, index) => {
                                return (
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell>{index+1}</DataTable.Cell>
                                        <DataTable.Cell>Chung</DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })
                        }
                    </ScrollView>

                </DataTable>
            </View>
            <View style={{ flex: 2, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{color: '#000000'}}>Điểm của bé</Text>
                <ProgressCircle
                    percent={80}
                    radius={50}
                    borderWidth={8}
                    color="#3399FF"
                    shadowColor="#999"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>{'8'}</Text>
                </ProgressCircle>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('TrackingResultDetailContest')} style={{ flex: 1 }}>
                    <View style={styles.loginButton}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, textAlign: 'left', marginLeft: 20, color: '#ffffff' }}>Xem chi tiết</Text>
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
        flex: 1,
        width: '100%',
        backgroundColor: '#d5182c',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    myclass: {
        flex: 3,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },

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