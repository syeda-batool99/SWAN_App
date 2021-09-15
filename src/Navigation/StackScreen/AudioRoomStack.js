import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AudioroomScreen from './../../Screens/Audioroom/index';

const AudioStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="AudioScreen" component={AudioroomScreen} />
    </Stack.Navigator>
    )
}

export default AudioStack
