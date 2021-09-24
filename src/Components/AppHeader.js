import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { PEACH } from '../Assets/Colors';
import { BLUE } from './../Assets/Colors/index';
import AppText from './AppText';

const AppHeader = (props) => {

    const {title, extraButton ,skip,back, onPressButton, onPressExtra, IconTray} = props;

    let onPressIcon;
    if(onPressButton){onPressIcon = onPressButton}
    else{
        onPressIcon =()=>props.navigation.goBack()
    }

    
    return (
        <View style = {styles.container}>
            {!back?(<TouchableOpacity style ={{position:'relative', left:15, top:17}} onPress = {onPressIcon}>
                <Icon name = 'arrowleft' type = 'antdesign' size = {25}/>
            </TouchableOpacity>):(null)}
            <View style={[styles.titleContainer]}>
                <AppText heading size = {20}>{title}</AppText>
            </View>
            {skip || extraButton?(
                <View>
                    <TouchableOpacity 
                        onPress = {onPressExtra}
                        style = {{position:'absolute',top:20,justifyContent:'center', alignItems:'center',right:20}}>
                        <Text style={{color:BLUE}}>{extraButton || 'Skip'}</Text>
                    </TouchableOpacity>
                </View>
            ):(IconTray?<IconTray/>:(null))}

        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:PEACH,
        flexDirection:'row',
        height:60
    },
    titleContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
})
