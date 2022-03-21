import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../Home/HomeNew';
import MessageScreen from '../Message/message';
import UtilityScreen from '../Utilities/utilities';
import MyLessonScreen from '../Lessons/lesson';
import SendMessageScreen from '../Message/sendMessage';
import ViewInfoScreen from '../Utilities/viewInfo';
import ChangeInfoScreen from '../Utilities/changeInfo';
import ChangePasswordScreen from '../Utilities/changePassword';
import StartGameScreen from '../Games/startGame';
import GameScreen from '../Games/game';
import EndGameScreen from '../Games/endGame';
import MixerColorScreen from '../MixColor/mixColor';
import AnswerScreen from '../MixColor/resultColor';
import ExerciseScreen from '../Exercises/exercise'
import ContestScreenForChild from '../Contest/contest'
import HomeParentScreen from '../Home/Parent/HomeNew';
import DetailContestScreen from '../Contest/Parents/detailContest';
import TrackingContestKid from '../Contest/Parents/trackingKid';
import HomeParentScreen2 from '../Home/Parent/home';
import ClassScreenKid from '../Class/classFroKids';
import ScheduleScreen from '../Schedule/Schedule';
import CourseHasBuyScreen from '../Home/home';
import ContestParentScreen from '../Contest/Parents/contest';
import ClassDetailScreenForParent from '../Class/Parents/detailClassForParent';
import ClassDetailScreenForKid from '../Class/detailClass';
import ContestHasSignForKid from '../Contest/ContestHasSign';
import ContestDetailForKid from '../Contest/ContestDetailForKid';
import KidsJoinContest from '../Contest/KidsJoinContest';
import ListContestHasScore from '../Contest/ListContestHasScore';
import ScoreContestAll from '../Contest/ScoreContestAll';
import GBAForKids from '../GBA/GBAForKids';
import GBAContestForKids from '../GBA/GBAContestKids';
import CourseBuyForParent from '../Home/Parent/home';
import StudyingCourse from '../Courses/Studying';
import StudyedScreen from '../Courses/Studyed';
import ViewResultStudyed from '../Courses/ViewResultStudyed';
import TrackingCourseKid from '../Class/Parents/trackingKid';
import TrackingExam from '../Class/Parents/trackingExam';
import TrackingAll from '../Class/Parents/trackingAll';
import ResultContest from '../Contest/Parents/ResultContest';
import ContestHasSign from '../Contest/Parents/ContestHasSig';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();


export default function TabNavigation({ route, navigation }) {
  const { isChild } = route.params
  //console.log(isChild)
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          "tabBarActiveTintColor": "#000000",
          "tabBarHideOnKeyboard": true,
          headerShown: false,
          "tabBarStyle": [
            {
              "display": "flex",
            },
            null
          ]
        }}
      >
        <Tab.Screen
          name="Trang chủ"
          initialParams={{ isChild: isChild }}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5 name={'home'} border size={24} color={tabInfo.focused ? "#e71e28" : "#2a58fc"} />
              )
            },
            headerStyle: {
              backgroundColor: '#fffffff',
              // use your preferred color code
            },
            headerTitleStyle: {
              color: '#3DB2FF',
              // use your preferred color code
            },
            headerShown: false
          }}
        >
          {() => {
            if (isChild == true) {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                  <HomeStack.Screen
                    name="Home"
                    component={HomeScreen}
                    initialParams={{ isChild: isChild }}
                  />
                  <HomeStack.Screen
                    name="MyClass"
                    component={ClassScreenKid}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Lớp học của bé'
                    }}
                  />
                <HomeStack.Screen
                  name="ScheduleScreen"
                  component={ScheduleScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  name="ViewResultStudyed"
                  component={ViewResultStudyed}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  name="StudyingCourse"
                  component={StudyingCourse}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  name="StudyedScreen"
                  component={StudyedScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  name="GBAForKids"
                  component={GBAForKids}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Kết quả học tập',
                  }}
                />
                  <HomeStack.Screen
                    name="CourseBuy"
                    component={CourseHasBuyScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Khóa học'
                    }}
                  />
                  <HomeStack.Screen
                    name="MyLesson"
                    component={MyLessonScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Buổi học của bé'
                    }}
                  />
                  <HomeStack.Screen
                    name="ClassDetailScreenForKid"
                    component={ClassDetailScreenForKid}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Buổi học của bé'
                    }}
                  />
                  <HomeStack.Screen
                    name="Exercise"
                    component={ExerciseScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Bài tập'
                    }}
                  />

                </HomeStack.Navigator>
              )
            }
            else {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                  <HomeStack.Screen
                    name="Home"
                    component={HomeParentScreen}
                    initialParams={{ isPayment: false }}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Trang chủ'
                    }}
                  />
                  <HomeStack.Screen
                  name="ScheduleScreen"
                  component={ScheduleScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                  <HomeStack.Screen
                    name="Home1"
                    component={HomeParentScreen2}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Trang chủ'
                    }}
                  />
                  <HomeStack.Screen
                    name="TrackingAll"
                    component={TrackingAll}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Trang chủ'
                    }}
                  />
                  <HomeStack.Screen
                    name="TrackingExam"
                    component={TrackingExam}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Trang chủ'
                    }}
                  />
                  <HomeStack.Screen
                    name="TrackingCourseKid"
                    component={TrackingCourseKid}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Trang chủ'
                    }}
                  />
                  <HomeStack.Screen
                  name="StudyedScreen"
                  component={StudyedScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                  <HomeStack.Screen
                    name="StudyingCourse"
                    component={StudyingCourse}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Trang chủ'
                    }}
                  />
                  <HomeStack.Screen
                    name="CourseBuyForParent"
                    component={CourseBuyForParent}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Trang chủ'
                    }}
                  />
                  <HomeStack.Screen
                    name="ClassDetailScreen"
                    component={ClassDetailScreenForParent}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Chi tiết khóa học'
                    }}
                  />
                  <HomeStack.Screen
                    name="MyLesson"
                    component={MyLessonScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Buổi học của bé'
                    }}
                  />
                  <HomeStack.Screen
                    name="Exercise"
                    component={ExerciseScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Bài tập'
                    }}
                  />
                </HomeStack.Navigator>
              )
            }
          }}
        </Tab.Screen>
        <Tab.Screen
          name="Cuộc thi"
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5 name={'university'} size={24} color={tabInfo.focused ? "#e71e28" : "#2a58fc"} />
              )
            },
            headerStyle: {
              backgroundColor: '#FFEDDA',
              // use your preferred color code
            },
            headerTitleStyle: {
              color: '#3DB2FF',
              // use your preferred color code
            },
            headerShown: false
          }}
        >
          {() => {
            if (isChild == false) {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                  <HomeStack.Screen
                    name="MyContest"
                    component={ContestParentScreen}
                    initialParams={{ isChild: isChild }}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="GBAContestForKids"
                    component={GBAContestForKids}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Tiến độ'
                    }}
                  />
                  <HomeStack.Screen
                    name="Contest"
                    component={ContestParentScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="ResultContest"
                    component={ResultContest}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="ContestHasSign"
                    component={ContestHasSign}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="DetailContest"
                    component={DetailContestScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Chi tiết cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="TrackingContestKid"
                    component={TrackingContestKid}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Theo dõi kết quả học tập của trẻ'
                    }}
                  />
                </HomeStack.Navigator>
              )
            }
            else {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                  <HomeStack.Screen
                    name="MyContest"
                    component={ContestScreenForChild}
                    initialParams={{ isChild: isChild }}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="GBAContestForKids"
                    component={GBAContestForKids}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Tiến độ'
                    }}
                  />
                  <HomeStack.Screen
                    name="ContestHasSignForKid"
                    component={ContestHasSignForKid}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="ScoreContestAll"
                    component={ScoreContestAll}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Kết quả'
                    }}
                  />
                  <HomeStack.Screen
                    name="ListContestHasScore"
                    component={ListContestHasScore}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="KidsJoinContest"
                    component={KidsJoinContest}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="Contest"
                    component={ContestScreenForChild}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="ContestDetailForKid"
                    component={ContestDetailForKid}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Chi tiết cuộc thi'
                    }}
                  />
                  <HomeStack.Screen
                    name="TrackingContestKid"
                    component={TrackingContestKid}
                    options={{
                      headerStyle: {
                        backgroundColor: '#FFEDDA',
                        // use your preferred color code
                      },
                      headerTitleStyle: {
                        color: '#3DB2FF',
                        // use your preferred color code
                      },
                      title: 'Theo dõi kết quả học tập của trẻ'
                    }}
                  />
                </HomeStack.Navigator>
              )
            }
            
          }}
        </Tab.Screen>
        <Tab.Screen
          name="Tin nhan"
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5 name={'comments'} size={24} color={tabInfo.focused ? "#e71e28" : "#2a58fc"} />
              )
            },
            headerStyle: {
              backgroundColor: '#FFEDDA',
              // use your preferred color code
            },
            headerTitleStyle: {
              color: '#3DB2FF',
              // use your preferred color code
            },
            headerShown: false
          }}
        >
          {() => (
            <HomeStack.Navigator screenOptions={{ headerShown: false }}>
              <HomeStack.Screen
                name="Message"
                component={MessageScreen}
                initialParams={{ isChild: isChild }}
                options={{
                  headerStyle: {
                    backgroundColor: '#FFEDDA',
                    // use your preferred color code
                  },
                  headerTitleStyle: {
                    color: '#3DB2FF',
                    // use your preferred color code
                  },
                  title: 'Tin nhắn giáo viên'
                }}
              />
              <HomeStack.Screen
                name="SendMessage"
                component={SendMessageScreen}
                options={{
                  headerStyle: {
                    backgroundColor: '#FFEDDA',
                    // use your preferred color code
                  },
                  headerTitleStyle: {
                    color: '#3DB2FF',
                    // use your preferred color code
                  },
                  title: 'Gửi tin nhắn'
                }}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Tien ich"
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5 name={'bars'} size={24} color={tabInfo.focused ? "#e71e28" : "#2a58fc"} />
              )
            },
            headerStyle: {
              backgroundColor: '#FFEDDA',
              // use your preferred color code
            },
            headerTitleStyle: {
              color: '#3DB2FF',
              // use your preferred color code
            },
            headerShown: false
          }}
        >
          {() => {
            if (isChild === true) {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                <HomeStack.Screen
                  name="Unility"
                  component={UtilityScreen}
                  initialParams={{ isChild: isChild }}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Tiện ích'
                  }}
                />
                <HomeStack.Screen
                  name="ViewInfo"
                  component={ViewInfoScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Xem thông tin các nhân',
                  }}
                />
                <HomeStack.Screen
                  name="ChangeInfo"
                  component={ChangeInfoScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thay đổi thông tin cá nhân'
                  }}
                />
                <HomeStack.Screen
                  name="ChangePassword"
                  component={ChangePasswordScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thay đổi mật khẩu',
                  }}
                />
                <HomeStack.Screen
                  name="StartGame"
                  component={StartGameScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Trò chơi nhận biết màu sắc',
                  }}
                />
                <HomeStack.Screen
                  name="Game"
                  component={GameScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Trò chơi nhận biết màu sắc',
                  }}
                />
                <HomeStack.Screen
                  name="EndGame"
                  component={EndGameScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Trò chơi nhận biết màu sắc',
                  }}
                />
                <HomeStack.Screen
                  name="MixerColor"
                  component={MixerColorScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Bé tự phối màu',
                  }}
                />
                <HomeStack.Screen
                  name="Answer"
                  component={AnswerScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Kết quả phối màu',
                  }}
                />
              </HomeStack.Navigator>
              )
            }
            else{
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                <HomeStack.Screen
                  name="Unility"
                  component={UtilityScreen}
                  initialParams={{ isChild: isChild }}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Tiện ích'
                  }}
                />
                <HomeStack.Screen
                  name="ScheduleScreen"
                  component={ScheduleScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  name="ViewInfo"
                  component={ViewInfoScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Xem thông tin các nhân',
                  }}
                />
                <HomeStack.Screen
                  name="ChangeInfo"
                  component={ChangeInfoScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thay đổi thông tin cá nhân'
                  }}
                />
                <HomeStack.Screen
                  name="ChangePassword"
                  component={ChangePasswordScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thay đổi mật khẩu',
                  }}
                />
              </HomeStack.Navigator>
              )
            }
          }
          }
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}