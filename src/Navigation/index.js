import React from 'react'
import { View, Text, Image } from 'react-native'
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
    <Tab.Navigator
    screenOptions = {{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:'black',
            height:60
        }
    }}>
        <Tab.Screen name={HOME_STACK} component={HomeStack}
         options = {{tabBarIcon:({focused})=>(
            <View style = {{alignItems: 'center',justifyContent:'center'}}>
                <Image 
                   source = {require('../Assets/Images/Tabicons/home.png')}
                   resizeMode ='contain'
                   style = {{height:25,aspectRatio:1,tintColor: focused ? 'white':'#66737F'}}
                />
                <Text style = {{color: focused? 'white':'#66737F' , fontSize:12}}>Home</Text>
            </View>
        )}} 
        />
        <Tab.Screen name={SESSION_STACK} component={SessionStack}
                 options = {{tabBarIcon:({focused})=>(
                    <View style = {{alignItems: 'center',justifyContent:'center'}}>
                        <Image 
                           source = {require('../Assets/Images/Tabicons/session.png')}
                           resizeMode ='contain'
                           style = {{tintColor: focused ? 'white':'#66737F'}}
                        />
                        <Text style = {{color: focused? 'white':'#66737F' , fontSize:12}}>{SESSION_STACK}</Text>
                    </View>
                )}}  />
        <Tab.Screen name={CHAT_STACK} component={ChatStack} 
                 options = {{tabBarIcon:({focused})=>(
                    <View style = {{alignItems: 'center',justifyContent:'center'}}>
                        <Image 
                           source = {require('../Assets/Images/Tabicons/chat.png')}
                           resizeMode ='contain'
                           style = {{tintColor: focused ? 'white':'#66737F'}}
                        />
                        <Text style = {{color: focused? 'white':'#66737F' , fontSize:12}}>{CHAT_STACK}</Text>
                    </View>
                )}} />
        <Tab.Screen name={AUDIO_STACK} component={AudioStack} 
                 options = {{tabBarIcon:({focused})=>(
                    <View style = {{alignItems: 'center',justifyContent:'center'}}>
                        <Image 
                           source = {require('../Assets/Images/Tabicons/audio.png')}
                           resizeMode ='contain'
                           style = {{tintColor: focused ? 'white':'#66737F'}}
                        />
                        <Text style = {{color: focused? 'white':'#66737F' , fontSize:12}}>{AUDIO_STACK}</Text>
                    </View>
                )}} />
        <Tab.Screen name={VIDEO_STACK} component={VideoStack} 
                 options = {{tabBarIcon:({focused})=>(
                    <View style = {{alignItems: 'center',justifyContent:'center'}}>
                        <Image 
                           source = {require('../Assets/Images/Tabicons/video.png')}
                           resizeMode ='contain'
                           style = {{tintColor: focused ? 'white':'#66737F'}}
                        />
                        <Text style = {{color: focused? 'white':'#66737F' , fontSize:12}}>{VIDEO_STACK}</Text>
                    </View>
                )}} />
        <Tab.Screen name={VBOOK_STACK} component={VbookStack} 
                 options = {{tabBarIcon:({focused})=>(
                    <View style = {{alignItems: 'center',justifyContent:'center'}}>
                        <Image 
                           source = {require('../Assets/Images/Tabicons/vbook.png')}
                           resizeMode ='contain'
                           style = {{tintColor: focused ? 'white':'#66737F'}}
                        />
                        <Text style = {{color: focused? 'white':'#66737F' , fontSize:12}}>{VBOOK_STACK}</Text>
                    </View>
                )}} />
    </Tab.Navigator>
    )
}

export default MainNavigatior
