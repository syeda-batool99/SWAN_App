import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './../../Screens/Home/index';
import SessionScreen from './../../Screens/Session/index';

const SessionStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
    </Stack.Navigator>
    )
}

export default SessionStack
