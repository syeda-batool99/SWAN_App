import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CreateBlog from './../../Screens/CreateBlog/index';
import AddTitle from './../../Screens/CreateBlog/AddTitle';
import GenerateTitle from './../../Screens/CreateBlog/GenerateTitle';
import Result from './../../Screens/CreateBlog/Result';
import generatedTitle from '../../Screens/CreateBlog/ResultTitle';
import ResultCreateBlog from './../../Screens/CreateBlog/ResultCreateBlog';

const CreateBlogStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="CreateBlog" component={CreateBlog} />
        <Stack.Screen name="ResultCreateBlog" component={ResultCreateBlog} />
        <Stack.Screen name="AddBlogTitle" component={AddTitle} />
        <Stack.Screen name="GeneratedTitle" component={generatedTitle} />
        <Stack.Screen name="GenerateTitle" component={GenerateTitle} />
        <Stack.Screen name="ResultScreen" component={Result} />
    </Stack.Navigator>
    )
}

export default CreateBlogStack