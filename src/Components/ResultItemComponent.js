import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BROWN_SHADE, PURPLE, LIGHT_BLUE } from './../Assets/Colors/index';
import AppButton from './AppButton';
import AppText from './AppText';

const ResultItemComponent = (prop) => {

    const [applied,setApplied] = useState(false)
    const [copy,setCopy] = useState(false)

    return (
        <View style = {{width:'100%', borderBottomColor:BROWN_SHADE, borderBottomWidth:2}}>
            <View style = {styles.mainContainer}>
                <AppText button>Social media hangout app that wants to be more like how you and your friends.</AppText>
                <View style = {styles.buttonGroup}>
                    <View style = {styles.button} >
                        {!applied?(
                            <AppButton onPress = {()=>setApplied(!applied)} textColor = {PURPLE} borderRadius = {10} buttonContainerStyle = {{backgroundColor:LIGHT_BLUE,width:115}} label = 'Apply in title' />                        
                        ):(
                            <AppButton onPress = {()=>setApplied(!applied)}  white borderRadius = {10} buttonContainerStyle = {{backgroundColor:PURPLE, width:115}} label = 'Applied' />                        
                        )}
                    </View>
                    <View style = {{height:30}} >
                        {!copy?(
                            <AppButton onPress = {()=>setCopy(!copy)}   textColor= {PURPLE} borderRadius = {10} buttonContainerStyle = {{backgroundColor:LIGHT_BLUE,paddingRight:10, width:30}} iconSize = {20} iconColor = {PURPLE} icon iconName = 'copy' iconType = "feather"/>                        
                        ):(
                            <AppButton onPress = {()=>setCopy(!copy)}  textColor= {PURPLE} borderRadius = {10} buttonContainerStyle = {{backgroundColor:LIGHT_BLUE, width:115}} label = 'Copied!' />
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ResultItemComponent

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        padding:10
    },
    buttonGroup:{
        marginTop:10,
        flexDirection:'row',
        alignSelf:'flex-end'
    },
    button:{
        height:30,
        marginHorizontal:5,
    }
})
