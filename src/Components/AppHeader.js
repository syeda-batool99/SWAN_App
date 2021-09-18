import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { PEACH } from '../Assets/Colors';
import { BLUE } from './../Assets/Colors/index';

const AppHeader = (props) => {

    const {title, skip} = props;
    
    return (
        <View style = {styles.container}>
            <TouchableOpacity style ={{position:'relative', left:15, top:17}} onPress = {()=>props.navigation.goBack()}>
                <Icon name = 'arrowleft' type = 'antdesign' size = {25}/>
            </TouchableOpacity>
            <View style={[styles.titleContainer]}>
                <Text style = {{fontSize:20}}>{title}</Text>
            </View>
            {skip?(
                <View>
                    <TouchableOpacity style = {{position:'absolute',top:20,justifyContent:'center', alignItems:'center',right:20}}>
                        <Text style={{color:BLUE}}>Skip</Text>
                    </TouchableOpacity>
                </View>
            ):(null)}

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
