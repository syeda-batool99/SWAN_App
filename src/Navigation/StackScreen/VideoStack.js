import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import VideoScreen from './../../Screens/Video/index';

const VideoStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
    </Stack.Navigator>
    )
}

export default VideoStack
