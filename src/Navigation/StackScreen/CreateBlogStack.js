import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CreateBlog from './../../Screens/CreateBlog/index';
import AddTitle from './../../Screens/CreateBlog/AddTitle';
import GenerateTitle from './../../Screens/CreateBlog/GenerateTitle';

const CreateBlogStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="CreateBlog" component={CreateBlog} />
        <Stack.Screen name="AddBlogTitle" component={AddTitle} />
        <Stack.Screen name="GenerateTitle" component={GenerateTitle} />
    </Stack.Navigator>
    )
}

export default CreateBlogStack
