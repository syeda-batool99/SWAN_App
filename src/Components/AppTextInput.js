import React, {useState} from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { DARK_PEACH, PURPLE } from './../Assets/Colors/index';

const AppTextInput = ({text,onChangeText, onPressMenu,isEdit,setIsEdit}) => {

    return (
        <View >
            <View style = {[styles.container,isEdit && {borderColor:PURPLE}]}>
                <TextInput 
                    placeholder = "Enter the text here..."
                    style = {styles.textInput}
                    multiline = {true}
                    onChangeText={(text)=>onChangeText(text)}
                    value = {text}
                    />
                <View style = {styles.iconContainer}>
                    <Icon onPress = {onPressMenu} name = 'menu' type = "entypo" raised size = {12}/>
                </View>
                {isEdit?(
                    <TouchableOpacity onPress = {setIsEdit} style = {styles.editContainer}>
                        <Image  source = {require('../Assets/Images/RegisterationCarousel/editPhoto.png')} style = {{height:25, width:25}}/>
                    </TouchableOpacity>
                ):(null)}

            </View>
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    textInput:{
        padding:10
    },
    container:{
        borderWidth:2,
        borderStyle:'dashed',
        borderColor:DARK_PEACH,
        borderRadius:14,
        marginVertical:5
        // width:'95%'
    },
    iconContainer:{
        position:'absolute',
        marginVertical:'1%',
        right:-20,
        borderRadius:100
    },
    editContainer:{
        position:'absolute',
        // top:"25%",
        left:-15,
        borderRadius:100,
        marginVertical:'3%'
    },
})
