import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Modal } from 'react-native';
import { PEACH } from '../Assets/Colors';
import AppButton from './AppButton';
import AppText from './AppText';

const Loader = (props) => {
    const {visible,onPressOnPress} = props

    return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={visible}>
                <View  style = {styles.body} >
                    <Image source = {require('../Assets/Images/CreateBlog/loaderlogo.png')} />
                    <View style = {{width:'60%', paddingVertical:20}}>
                        <AppText center>Loading...</AppText>
                        <AppText center>Here's a tip for improving your results</AppText>
                        <AppButton buttonContainerStyle= {{height:20, paddingTop:2}} onPress = {onPressOnPress} label = 'press to disable modal, this will be removed in future' />
                    </View>
                </View>
        </Modal>

    )
}

export default Loader

const styles = StyleSheet.create({
    body:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
