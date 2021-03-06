import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './../../Screens/Home/HomeScreen';
import BlogPost from '../../Screens/Home/BlogPost';
import BookmarkBlogs from './../../Screens/Home/BookmarkBlogs';
import CreateBlogStack from './CreateBlogStack';

const HomeStack = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions = {{
        headerShown:false
    }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Blog" component={BlogPost} />
        <Stack.Screen name="BookmarkBlog" component={BookmarkBlogs} />
        <Stack.Screen name="CreateBlogStack" component={CreateBlogStack} />
    </Stack.Navigator>
    )
}

export default HomeStack
