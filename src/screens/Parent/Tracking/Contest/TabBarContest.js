import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackingContest from './TrackingContest';
import TrackingResultContest from './TrackingResultContest';
import TrackingResultDetailContest from './TrackingResultDetailContest';
import TrackingProgressContest from './TrackingProgress'
import TrackingContestStudied from './TrackingContestStudied';


const Stack = createNativeStackNavigator();


export default function TabBarContest() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator 
                initialRouteName='TrackingContest'
                screenOptions={{
                    "tabBarHideOnKeyboard": true,
                    headerShown: false,
                }}
            >
                <Stack.Screen name="TrackingContest" component={TrackingContest} />
                <Stack.Screen name="TrackingResultContest" component={TrackingResultContest} />
                <Stack.Screen name="TrackingResultDetailContest" component={TrackingResultDetailContest} />
                <Stack.Screen name="TrackingProgressContest" component={TrackingProgressContest} />
                <Stack.Screen name="TrackingContestStudied" component={TrackingContestStudied} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}