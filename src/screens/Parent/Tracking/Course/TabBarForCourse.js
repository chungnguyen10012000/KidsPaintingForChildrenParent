import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackingCourseStuding from './TrackingCourseStuding';
import TrackingCourseStudyed from './TrackingCourseStudied';
import TrackingCourse from './TrackingCourse'
import TrackingResult from './TrackingResult';
import TrackingDetailResult from './TrackingDetailResult';
import TrackingExam from './TrackingExam';
import TrackingDetailExam from './TrackingDetailExam';
import TrackingProgress from './TrackingProgress';
import Schedules from './Schedule';


const Stack = createNativeStackNavigator();


export default function TabBarForTracking() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator 
                initialRouteName='TrackingCourse'
                screenOptions={{
                    "tabBarHideOnKeyboard": true,
                    headerShown: false,
                }}
            >
                <Stack.Screen name="TrackingCourse" component={TrackingCourse} />
                <Stack.Screen name='TrackingCourseStuding' component={TrackingCourseStuding} />
                <Stack.Screen name='TrackingResult' component={TrackingResult} />
                <Stack.Screen name="TrackingDetailResult" component={TrackingDetailResult} />
                <Stack.Screen name="TrackingExam" component={TrackingExam} />
                <Stack.Screen name="TrackingDetailExam" component={TrackingDetailExam} />
                <Stack.Screen name="TrackingProgress" component={TrackingProgress} />
                <Stack.Screen name="TrackingCourseStudyed" component={TrackingCourseStudyed} />
                <Stack.Screen name="Schedules" component={Schedules} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}