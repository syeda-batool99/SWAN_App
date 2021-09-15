import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import VbookScreen from './../../Screens/Vbook/index';

const VbookStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        <Stack.Screen name="VbookScreen" component={VbookScreen} />
    </Stack.Navigator>
    )
}

export default VbookStack
