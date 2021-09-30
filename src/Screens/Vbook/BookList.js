import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PEACH } from '../../Assets/Colors';
import AppHeader from './../../Components/AppHeader';
import BookListItem from './../../Components/BookListItem';
import { TrendingBooks } from './../../Constants/VBOOK_CONSTANT';

const BookList = (props) => {
    console.log('PARAM PROPS',props)

    return (
        <>
            {!props?.search?(
                <View style = {styles.container}>

                    <AppHeader {...props} title = {props.route.params?.title}/>
                    <ScrollView>
                        <BookListItem search = {props?.search} bookList = {TrendingBooks.Trending} />
                    </ScrollView>
                </View>
            ):(
            
        <View style = {styles.container}>
        <ScrollView>
                <BookListItem bookList = {TrendingBooks.Trending} />
            </ScrollView>
        </View>

            )}
            </>

    )
}

export default BookList

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    }
})
