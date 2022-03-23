import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MessageScreen from '../Message/message';
import UtilityScreen from '../Utilities/utilities';
import SendMessageScreen from '../Message/sendMessage';
import ViewInfoScreen from '../Utilities/viewInfo';
import ChangeInfoScreen from '../Utilities/changeInfo';
import ChangePasswordScreen from '../Utilities/changePassword';
import StartGameScreen from '../Games/startGame';
import GameScreen from '../Games/game';
import EndGameScreen from '../Games/endGame';
import MixerColorScreen from '../MixColor/mixColor';
import AnswerScreen from '../MixColor/resultColor';
import AddAccountKid from '../Parent/AddAccountKid/AddAccountKid';
import HomeForParent from '../Parent/Home/HomeForParent';
import TabBarForTracking from '../Parent/Tracking/TabBarForTracking'
import ShoppingCart from '../Parent/Cart/ShoppingCart'
import HistoryPayment from '../Parent/History/HistoryPayment';
import ShoppingCourse from '../Parent/Shopping/Course/ShoppingCourse';
import ShoppingCourseDetail from '../Parent/Shopping/Course/ShoppingCourseDetail';
import ListContest from '../Parent/Shopping/Contest/ListContest';
import JoinContest from '../Parent/Shopping/Contest/JoinContest';
import ContestJoined from '../Parent/Shopping/Contest/ContestJoined';
import HomeKids from '../Kids/Home/HomeKids';
import CourseStudied from '../Kids/Course/CourseStudied';
import Courses from '../Kids/Course/Course';
import RecommendCourses from '../Kids/Course/RecommendCourses';
import CourseStudying from '../Kids/Course/CourseStudying';
import TrackingProgress from '../Parent/Tracking/Course/TrackingProgress';
import TrackingResult from '../Parent/Tracking/Course/TrackingResult';
import TrackingDetailResult from '../Parent/Tracking/Course/TrackingDetailResult';
import TrackingExam from '../Parent/Tracking/Course/TrackingExam';
import TrackingDetailExam from '../Parent/Tracking/Course/TrackingDetailExam';
import Lessons from '../Kids/Course/Lesson';
import Exicises from '../Kids/Course/Exicise';
import VideoCalls from '../Kids/Course/VideoCall';
import Contests from '../Kids/Contest/Contest';
import ContestDetail from '../Kids/Contest/ContestDetail';
import ContestJoining from '../Kids/Contest/ContestJoining';
import Submits from '../Kids/Contest/Submit';
import TrackingContestStudied from '../Parent/Tracking/Contest/TrackingContestStudied';
import TrackingResultContest from '../Parent/Tracking/Contest/TrackingResultContest';
import TrackingResultDetailContest from '../Parent/Tracking/Contest/TrackingResultDetailContest';
import Schedules from '../Parent/Tracking/Course/Schedule';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
// TODO: hello
export default function TabNavigation({ route, navigation }) {
  const { isChild } = route.params
  console.log(navigation.getState().routes[navigation.getState().index])
  //let tabDisplay = 'flex';
  //console.log(isChild)
/*   let routeName = navigation.state.routes[navigation.state.index].routeName

  if (routeName === "TabBarParentViewChild"){
    tabDisplay = 'none'
  } */

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          "tabBarActiveTintColor": "#000000",
          "tabBarHideOnKeyboard": true,
          headerShown: false,
          "tabBarStyle": [
            {
              "display": 'flex',
            },
            null
          ],
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
            tabBarStyle: [
              {
                "display": 'flex',
              },
              null
            ],
            headerStyle: {
              backgroundColor: '#fffffff',
              // use your preferred color code
            },
            headerTitleStyle: {
              color: '#3DB2FF',
              // use your preferred color code
            },
            headerShown: false,
            
          }}
        >
          {() => {
            if (isChild == true) {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false}}>
                  <HomeStack.Screen
                    name="HomeKids"
                    component={HomeKids}
                    initialParams={{ isChild: isChild }}
                  />
                  <HomeStack.Screen
                    name="CourseStudied"
                    component={CourseStudied}
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

                </HomeStack.Navigator>
              )
            }
            else {
              return (
                <HomeStack.Navigator  
                  screenOptions={{ headerShown: false }}
                >
                  <HomeStack.Screen
                    name="HomeForParent"
                    component={HomeForParent}
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
                  component={Schedules}
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
                  independent={true}
                  name="TabBarForTracking"
                  component={TabBarForTracking}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    tabBarStyle: {
                      display: 'none',
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  independent={true}
                  name="AddAccountKid"
                  component={AddAccountKid}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    tabBarStyle: {
                      display: 'none',
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                                <HomeStack.Screen
                  independent={true}
                  name="HistoryPayment"
                  component={HistoryPayment}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    tabBarStyle: {
                      display: 'none',
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  independent={true}
                  name="ShoppingCart"
                  component={ShoppingCart}
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    tabBarStyle: {
                      display: 'none',
                    },
                    title: 'Thời khóa biểu',
                  }}
                />
                </HomeStack.Navigator>
              )
            }
          }}
        </Tab.Screen>


        <Tab.Screen
          name="Khóa học"
          initialParams={{ isChild: isChild }}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5 name={'book'} border size={24} color={tabInfo.focused ? "#e71e28" : "#2a58fc"} />
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
            headerShown: false,
            
          }}
        >
          {() => {
            if (isChild == true) {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false}}>
                  <HomeStack.Screen
                    name="Courses"
                    component={Courses}
                    initialParams={{ isChild: isChild }}
                  />

                  <HomeStack.Screen
                    name="RecommendCourses"
                    component={RecommendCourses}
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
                    name="TrackingProgress"
                    component={TrackingProgress}
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
                  name="CourseStudying"
                  component={CourseStudying}
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
                  name="TrackingResult"
                  component={TrackingResult}
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
                  name="TrackingDetailResult"
                  component={TrackingDetailResult}
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
                    title: 'Thời khóa biểu',
                  }}
                />
                <HomeStack.Screen
                  name="TrackingDetailExam"
                  component={TrackingDetailExam}
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
                  name="VideoCall"
                  component={VideoCalls}
                  
                  options={{
                    headerStyle: {
                      backgroundColor: '#FFEDDA',
                      // use your preferred color code
                    },
                    tabBarStyle: 
                      {
                        display: "none",
                      },
                    headerTitleStyle: {
                      color: '#3DB2FF',
                      // use your preferred color code
                    },
                    title: 'Thời khóa biểu',
                    tabBarVisible: false,
                    tabBarShowLabel: false
                  }}
                />
                  <HomeStack.Screen
                    name="MyLesson"
                    component={Lessons}
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
                    component={Exicises}
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
                    name="ShoppingCourse"
                    component={ShoppingCourse}
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
                    name="ShoppingCourseDetail"
                    component={ShoppingCourseDetail}
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
                    name="ShoppingCart"
                    component={ShoppingCart}
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
                    name="ListContest"
                    component={ListContest}
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
                    name="JoinContest"
                    component={JoinContest}
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
                    name="ContestJoined"
                    component={ContestJoined}
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
                </HomeStack.Navigator>
              )
            }
            else {
              return (
                <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                  <HomeStack.Screen
                    name="MyContest"
                    component={Contests}
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
                    name="ContestDetail"
                    component={ContestDetail}
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
                    component={ContestJoining}
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
                    name="ContestJoined"
                    component={TrackingContestStudied}
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
                    component={Submits}
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
                    name="TrackingResultDetailContest"
                    component={TrackingResultDetailContest}
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
                    name="TrackingResultContest"
                    component={TrackingResultContest}
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
                </HomeStack.Navigator>
              )
            }
            
          }}
        </Tab.Screen>
        <Tab.Screen
          name="Thông báo"
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FontAwesome5 name={'bell'} size={24} color={tabInfo.focused ? "#e71e28" : "#2a58fc"} />
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