import * as React from 'react';
import { Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarForCourse from './Course/TabBarForCourse'
import TabBarContest from './Contest/TabBarContest';

const Tab = createBottomTabNavigator();

export default function TabBarForTracking() {
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
                    name="Khóa học" 
                    component={TabBarForCourse} 
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
                />
                <Tab.Screen 
                    name="Cuộc thi"
                    component={TabBarContest} 
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
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}