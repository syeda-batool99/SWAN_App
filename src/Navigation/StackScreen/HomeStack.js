import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './../../Screens/Home/HomeScreen';
import BlogPost from '../../Screens/Home/BlogPost';

const HomeStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blog" component={BlogPost} />
    </Stack.Navigator>
    )
}

export default HomeStack
