import React from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity,ScrollView} from 'react-native'
import BookList from './BookList'
import { TrendingBooks } from './../../Constants/VBOOK_CONSTANT';
import { DARK_PEACH, PEACH } from '../../Assets/Colors';
import { Icon } from 'react-native-elements';

const SearchBookList = ({search,setSearch}) => {
    return (
        <View>
            <View style = {styles.textInputContainer}>
                <TouchableOpacity
                onPress = {()=>{setSearch('')}}
                >
            <Icon
                name="cross"
                size={25}
                type = 'entypo'
                style={{padding: 10}}
                />
                </TouchableOpacity>
                <TextInput value = {search} onChangeText = {setSearch} autoFocus style = {styles.textinput} />
            </View>
            <ScrollView>
                <BookList search />
            </ScrollView>
        </View>
    )
}

export default SearchBookList

const styles = StyleSheet.create({
    textinput:{
        padding:10,
        color:'black',
        fontFamily:'SharpGrotesk-Book20',
    },
    textInputContainer:{
        backgroundColor:PEACH,
        borderBottomColor:DARK_PEACH,
        flexDirection:'row',
        borderBottomWidth:2,
    }
})
