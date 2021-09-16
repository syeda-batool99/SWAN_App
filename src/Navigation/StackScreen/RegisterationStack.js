import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import WelcomeScreen from './../../Screens/Registeration/index';
import PhoneNumber from '../../Screens/Registeration/PhoneNumber';
import VerifyCode from '../../Screens/Registeration/VerifyCode';

const RegisterationStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
    </Stack.Navigator>
    )
}

export default RegisterationStack
