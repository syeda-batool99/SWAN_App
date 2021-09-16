import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { PEACH } from '../Assets/Colors';

const AppHeader = (props) => {
    const {title} = props;
    
    return (
        <View style = {styles.container}>
            <TouchableOpacity style ={{position:'relative', left:15, top:17}}>
                <Icon name = 'arrowleft' type = 'antdesign' size = {25}/>
            </TouchableOpacity>
            <View style={[styles.titleContainer]}>
                <Text style = {{fontSize:20}}>{title}</Text>
            </View>
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
