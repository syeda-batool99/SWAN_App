import React from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { DARK_PEACH, PEACH } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import AppText from '../../Components/AppText'
import { BROWN_SHADE } from './../../Assets/Colors/index';
import Loader from './../../Components/Loader';
import { useState } from 'react';

const ResultCreateBlog = (props) => {

    const {navigation} = props;

    const IconTray = ()=>{
        return(
            <View style = {{ position:'absolute', right:5, flexDirection:'row', justifyContent:'space-around', marginVertical:20}}>
                <Icon  style = {{paddingHorizontal:5}} name = "send" type = 'feather'/>
                <Icon  style = {{paddingHorizontal:5}} name = "dots-three-vertical" type = 'entypo'/>
            </View>
        )
    }

    return (
        <View style = {{height:'100%', width:'100%', backgroundColor:PEACH}}>
            <AppHeader {...props} title = "Create Blog"  IconTray = {IconTray}/>
            <View style = {styles.mainContainer}>

            <View >
                <TextInput 
                multiline = {true}
                value = "Don't be afraid to give up the good to go for the great.|" 
                style = {styles.titleText}/>
            </View>

                <TouchableOpacity style = {styles.uploadContainer}>
                    <View style = {styles.upload}>
                        <Image source = {require('../../Assets/Images/CreateBlog/uploadcloud.png')}/>
                        <View style = {{marginTop:20}}>
                            <AppText center>Upload Image</AppText>
                            <AppText center textStyle = {{color:BROWN_SHADE, lineHeight:22}} textContainerStyle = {{width:'78%'}}>this image shown on thumbnail & main image</AppText>
                        </View>
                    </View>
                </TouchableOpacity>

                <View>
                    <TextInput multiline placeholder = "Write what went in this blog..." style = {styles.blogText}/>
                </View>

                <View style = {styles.tagsView}>
                    <AppText textContainerStyle = {{marginLeft:10,justifyContent:'center'}}>Add Tags</AppText>
                    <TextInput style = {{flex:1, paddingLeft:15}} placeholder = 'Write tags here'/>
                    <Icon style = {{justifyContent:'center',flex:1, marginRight:10}} name = 'info' type='feather'/>
                </View>

            </View>
        </View>
    )
}

export default ResultCreateBlog

const styles = StyleSheet.create({
    mainContainer :{
        alignSelf:'center',
        width:'93%',
        height:'100%',
    },
    titleText:{
        borderBottomColor:DARK_PEACH,
        borderBottomWidth:1,
        lineHeight:30,
        padding:10,
        fontSize:20,
        fontFamily: 'SharpGrotesk-Book20',
    },
    uploadContainer:{
        borderStyle:'dashed',
        borderColor:DARK_PEACH,
        borderRadius:10,
        borderWidth:2,
        padding:10,
        marginVertical:20
    },
    upload:{
        alignItems:'center',
        alignSelf:'center',
        paddingVertical:30,
    },
    blogText:{
        borderBottomColor:DARK_PEACH,
        borderBottomWidth:1,
        padding:10,
        fontSize:14,
        fontFamily: 'SharpGrotesk-Book20',
    },
    tagsView:{
        flexDirection:'row', 
        borderBottomWidth:1, 
        borderBottomColor:DARK_PEACH, 
        justifyContent:'space-between',
        marginVertical:15
    }
})
