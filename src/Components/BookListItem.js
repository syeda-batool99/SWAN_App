import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from './AppText';
import { DARK_PEACH, TEXT_GREY } from './../Assets/Colors/index';

const BookListItem = (props) => {
    const {bookList, search} = props
    console.log('ITEM PROPS', props)

    const renderItem = ({item})=>{
        return(
            <View style = {[styles.itemContainer, !search&&{borderBottomColor:DARK_PEACH,borderBottomWidth:2}]}>
                <View style = {styles.imageContainer}>
                    <Image source = {item.image} style = {styles.bookImage}/>
                </View>
                <View style = {styles.textContainer}>
                    <AppText button >{item.title}</AppText>
                    <AppText size = {12} color = {TEXT_GREY} >{item.author}</AppText>
                    <AppText>{item.id}</AppText>
                </View>
            </View>
        )
    }

    return (
        <>
        <SafeAreaView>
            <FlatList 
                data = {bookList}
                keyExtractor = {(item)=>item.id.toString()}
                renderItem = {renderItem}
            />
        </SafeAreaView>
        </>
    )
}

export default BookListItem

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        padding:10,
        // backgroundColor:'pink',
        // borderBottomColor:'red',
        // borderBottomWidth:2,
        margin:5
    },
    imageContainer:{
        marginRight:10
    },
    bookImage:{
        height:95,
        width:70,
        borderRadius:12
    },
    textContainer:{
        padding:10,
        flexDirection:'column',
        justifyContent:'space-evenly',
        width:'76%'
    },

})
