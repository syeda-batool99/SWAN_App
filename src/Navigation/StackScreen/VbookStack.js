import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import VbookScreen from './../../Screens/Vbook/index';
import HomeScreen from './../../Screens/Vbook/Home';

const VbookStack = () => {

    const Stack = createNativeStackNavigator();
    // const navigate = this.props.navigation;

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>
        {/* <Stack.Screen name="VbookScreen" component={VbookScreen} initialParams={()=> setTimeout(() => {navigate('VbookHome');}, 5000) } /> */}
        <Stack.Screen name="VbookHome" component={HomeScreen} />
    </Stack.Navigator>
    )
}

export default VbookStack
