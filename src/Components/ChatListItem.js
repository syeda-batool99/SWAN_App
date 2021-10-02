import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'
import { TEXT_GREY } from './../Assets/Colors/index';

const ChatListItem = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.imgTextContainer}>
                <Image source = {require('../Assets/Images/RegisterationCarousel/avatar.png')} />
                <View style = {{ marginLeft:10, width:'65%'}}>
                    <AppText button font>Andrew Mitchell</AppText>
                    <View style = {{flexDirection:'row',}}>
                        <Image style = {{marginRight:10}} source={require("../Assets/Images/Icons/smallAvat.png")} />
                        <AppText  color = {TEXT_GREY} size = {12}>
                            great work!
                        </AppText>
                    </View>

                </View>
            </View>

            <View style = {{alignItems:'flex-end', flexDirection:'column', justifyContent:'center'}}>
                <View style = {{borderRadius:100, backgroundColor:'green',marginBottom:5,maxWidth:18, rigth:0,paddingHorizontal:5, paddingVertical:2}}>
                    <AppText white size = {11}>3</AppText>
                </View>
                <View>
                    <AppText color = {TEXT_GREY} size = {10}>Yesterday</AppText>
                </View>
            </View>

        </View>
    )
}

export default ChatListItem

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:20,
        borderRadius:14,
        backgroundColor:'white'
    },
    imgTextContainer:{
        flexDirection:'row',
        // backgroundColor:'blue'
    }
})
