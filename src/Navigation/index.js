import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME_STACK, VIDEO_STACK, VBOOK_STACK, CHAT_STACK, AUDIO_STACK, SESSION_STACK } from './../Constants/variables';
import HomeStack from './StackScreen/HomeStack';
import ChatStack from './StackScreen/ChatStack';
import AudioStack from './StackScreen/AudioRoomStack';
import VideoStack from './StackScreen/VideoStack';
import VbookStack from './StackScreen/VbookStack';
import SessionStack from './StackScreen/SessionStack';

const MainNavigatior = () => {
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Tab.Screen name={HOME_STACK} component={HomeStack} />
        <Tab.Screen name={SESSION_STACK} component={SessionStack} />
        <Tab.Screen name={CHAT_STACK} component={ChatStack} />
        <Tab.Screen name={AUDIO_STACK} component={AudioStack} />
        <Tab.Screen name={VIDEO_STACK} component={VideoStack} />
        <Tab.Screen name={VBOOK_STACK} component={VbookStack} />
    </Tab.Navigator>
    )
}

export default MainNavigatior
