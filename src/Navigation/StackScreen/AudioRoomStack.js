import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AudioroomScreen from './../../Screens/Audioroom/index';
import AddTopic from './../../Screens/Audioroom/AddTopic';
import OpenRoom from './../../Screens/Audioroom/OpenRoom';
import SocialRoom from './../../Screens/Audioroom/SocialRoom/SocialRoom';
import ClosedRoom from './../../Screens/Audioroom/ClosedRoom/ClosedRoom';
import SocialAddTopic from './../../Screens/Audioroom/SocialRoom/SocialAddTopic';
import ClosedAddTopic from './../../Screens/Audioroom/ClosedRoom/ClosedAddTopic';

const AudioRoomStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="AudioScreen" component={AudioroomScreen} />
        <Stack.Screen name="OpenRoomStack" component={OpenRoomStack} />
        <Stack.Screen name="SocialRoomStack" component={SocialRoomStack} />
        <Stack.Screen name="ClosedRoomStack" component={ClosedRoomStack} />
    </Stack.Navigator>
    )
}

const OpenRoomStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="AddTopic" component={AddTopic} />
        <Stack.Screen name="OpenRoom" component={OpenRoom} />
    </Stack.Navigator>
    )
}

const SocialRoomStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="SocialAddTopic" component={SocialAddTopic} />
        <Stack.Screen name="SocialRoom" component={SocialRoom} />
    </Stack.Navigator>
    )
}

const ClosedRoomStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="ClosedAddTopic" component={ClosedAddTopic} />
        <Stack.Screen name="ClosedRoom" component={ClosedRoom} />
    </Stack.Navigator>
    )
}

export default AudioRoomStack
