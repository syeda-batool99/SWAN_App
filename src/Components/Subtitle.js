import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { PEACH } from '../Assets/Colors';
import { BLUE } from './../Assets/Colors/index';
import AppText from './AppText';

const Subtitle = (props) => {

    const {title, skip} = props;
    console.log(props?.skip)

    
    return (
        <View style = {styles.container}>
            
            <View style={[styles.titleContainer]}>
                <AppText center size = {14} textStyle = {{lineHeight:20}}>{title}</AppText>
            </View>
            

        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    container:{
        backgroundColor:PEACH,
        // flexDirection:'row',
        // flex:1
    },
    titleContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding: 35
    }
})
