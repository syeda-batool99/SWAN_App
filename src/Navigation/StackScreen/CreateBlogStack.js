import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CreateBlog from './../../Screens/CreateBlog/index';
import AddTitle from './../../Screens/CreateBlog/AddTitle';
import GenerateTitle from './../../Screens/CreateBlog/GenerateTitle';
import Result from './../../Screens/CreateBlog/Result';
import generatedTitle from '../../Screens/CreateBlog/ResultTitle';
import ResultCreateBlog from './../../Screens/CreateBlog/ResultCreateBlog';
import BlogDescription from '../../Screens/CreateBlog/BlogDescription';
import GenerateDescription from './../../Screens/CreateBlog/GenerateDescription';
import ResultDescription from './../../Screens/CreateBlog/ResultDescription';
import ResultCreateBlog2 from './../../Screens/CreateBlog/ResultCreateBlog2';
import PusblishScreen from '../../Screens/CreateBlog/PusblishScreen';

const CreateBlogStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="CreateBlog" component={CreateBlog} />
        <Stack.Screen name="ResultCreateBlog" component={ResultCreateBlog} />

        <Stack.Screen name="ResultCreateBlog2" component={ResultCreateBlog2} />
        
        <Stack.Screen name="AddBlogTitle" component={AddTitle} />
        <Stack.Screen name="GeneratedTitle" component={generatedTitle} />
        <Stack.Screen name="GenerateTitle" component={GenerateTitle} />
        <Stack.Screen name="ResultScreen" component={Result} />
        <Stack.Screen name="DescriptionBlog" component={BlogDescription} />
        <Stack.Screen name="ResultDescription" component={ResultDescription} />
        <Stack.Screen name="GenerateDescriptionBlog" component={GenerateDescription} />
        <Stack.Screen name="PublishScreen" component={PusblishScreen} />

    </Stack.Navigator>
    )
}

export default CreateBlogStack
