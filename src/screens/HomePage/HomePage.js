import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TextInput,Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { User } from '../../models/user';

const contexParse = (res) => {
    const childs = []
    res.forEach(element => {
        childs.push(new User(element))
    });
    return childs
}

const fakeChildList = [
{
    UserID: 0,
    FirstName: 'Nguyen',
    LastName: 'Chung',
    Email: 'a@gmail.com',
    UserName: 'chung1001',
    HashPassword: '12344',
    DateOfBirth: '10-10-2000',
    Sex: 'Nam',
    Address: 'Thanh Hoa',
    Phone: '0989439678',
    Avatar: 'https://supperclean.vn/wp-content/uploads/2020/12/anh-trai-dep-viet-nam-8.jpg'
},
{
    UserID: 1,
    FirstName: 'Tran',
    LastName: 'Binh',
    Email: 'b@gmail.com',
    UserName: 'binh123',
    HashPassword: '12344',
    DateOfBirth: '10-10-2000',
    Sex: 'Nam',
    Address: 'Thanh Hoa',
    Phone: '0989439678',
    Avatar: 'https://i.pinimg.com/736x/cd/0b/90/cd0b90bb3237ce724268ed49c147d165.jpg'
}
]


// TODO: CLICK TO AVATAR -> TAB BAR FOR CHILD
export default function HomePageForParent({ route, navigation }) {
    const childList = contexParse(fakeChildList)

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        >
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Trang chủ</Text>
            </View>

            <View style={styles.listExtension}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity  onPress={() => navigation.navigate('CourseBuyForParent')}style={{alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#e83640', height: '50%', width: '50%', flex: 0.6}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', borderRadius: 100, borderWidth: 0.2, backgroundColor: '#e83640', height: '50%', width: '100%', flex: 1}}>
                        <FontAwesome5 name={'plus'} size={30} color='#ffffff' />
                    </View>
                </TouchableOpacity>
                  <View style={{flex: 0.4, alignItems: 'center'}}>
                      <Text>Thêm tài khoản</Text>
                      <Text style={{}}>cho bé</Text>
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{alignItems: 'center', justifyContent: 'center',borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '50%', flex: 0.6}}>
                    <View style={{alignItems: 'center', justifyContent: 'center',borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '100%', flex: 1}}>
                    <FontAwesome5 name={'shopping-cart'} size={30} color='#ffffff' />
                  </View>
                    </TouchableOpacity>
                  <View style={{flex: 0.4}}>
                      <Text>Giỏ hàng</Text>
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{alignItems: 'center', justifyContent: 'center',borderRadius: 100, borderWidth: 0.2, backgroundColor: '#fdbf00', height: '50%', width: '50%', flex: 0.6}}>
                    <View style={{alignItems: 'center', justifyContent: 'center',borderRadius: 100, borderWidth: 0.2, backgroundColor: '#2a58fc', height: '50%', width: '100%', flex: 1}}>
                    <FontAwesome5 name={'clock'} size={30} color='#ffffff' />
                  </View>
                    </TouchableOpacity>
                  <View style={{flex: 0.4}}>
                      <Text>Lịch sử mua</Text>
                  </View>
                </View>
            </View>

            <View style={styles.listCourse}>
                <View style={{flex: 1}}>
                    <ScrollView>
                        <Text style={{ color: '#000000', marginLeft: 20, fontSize: 15 , marginTop: 20}}>Danh sách các bé </Text>
                        {
                            childList.map((element, index) => {
                                return (
                                    <View style={{ flex: 1, marginBottom: 20, marginLeft: 20, marginTop: 20, flexDirection: 'row' , }} key={index}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <TouchableOpacity onPress={() => navigation.navigate('TabBarParentViewChild', { course_id: index })}>
                                                <Image source={{uri: element.Avatar}} style={styles.image} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>{element.FirstName} {element.LastName}</Text>
                                            <Text style={{ textAlign: 'left', alignContent: 'center', alignItems: 'center' }}>Số khóa học: 2 </Text>
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
    }
})