import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ChatScreen from './../../Screens/Chat/index';
import NewMessage from './../../Screens/Chat/NewMessage';
import CreateGroup from './../../Screens/Chat/CreateGroup';
import NameOfGroup from './../../Screens/Chat/NameOfGroup';

const ChatStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="NewMessage" component={NewMessage} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="NameOfGroup" component={NameOfGroup} />
    </Stack.Navigator>
    )
}

export default ChatStack
