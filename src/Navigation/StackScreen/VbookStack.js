import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import VBookHome from './../../Screens/Vbook/Home';
import BookList from './../../Screens/Vbook/BookList';
import SearchBookList from './../../Screens/Vbook/SearchBookList';
import ViewBook from './../../Screens/Vbook/ViewBook';

const VbookStack = () => {

    const Stack = createNativeStackNavigator();
    // const navigate = this.props.navigation;

    return (
        <Stack.Navigator screenOptions = {{
            headerShown:false
        }}>

            <Stack.Screen name="VbookHome" component={VBookHome} />
            <Stack.Screen name="BookList" component={BookList} />
            <Stack.Screen name="SearchBook" component={SearchBookList} />
            <Stack.Screen name="ViewBook" component={ViewBook} />


    </Stack.Navigator>
    )
}

export default VbookStack
