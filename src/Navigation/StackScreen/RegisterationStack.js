import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import WelcomeScreen from './../../Screens/Registeration/index';
import FindContact from './../../Screens/Registeration/FindContact';
import FacebookFriendList from './../../Screens/Registeration/FacebookFriendList';

const RegisterationStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="FindContactScreen" component={FindContact} />
        <Stack.Screen name="FacebookFriendListScreen" component={FacebookFriendList} />

    </Stack.Navigator>
    )
}

export default RegisterationStack
FacebookFriendList