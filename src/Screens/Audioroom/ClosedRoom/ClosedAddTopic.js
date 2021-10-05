import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { PEACH } from '../../../Assets/Colors';
import AppHeader from '../../../Components/AppHeader';
import { Icon } from 'react-native-elements';

const ClosedAddTopic = (props) => {
    const {navigation} = props
    return (
        <View style = {styles.container}>
            <AppHeader {...props} title = "Add a Topic" />
            <View style = {{position:'absolute',alignSelf:'center',width:'90%',bottom:15, borderRadius:40,flexDirection:'row'}}>
                    {/* <View style = {{flexDirection:'row'}}> */}
                        <TextInput 
                            placeholder = 'e.g., Raising wolves - Good Idea ?'
                            placeholderTextColor = 'grey'
                            style = {styles.textInput}
                        />
                        <View style = {{backgroundColor:'white' , paddingVertical:15, paddingRight:10,borderBottomRightRadius:14, borderTopRightRadius:14,}}>
                            <Icon onPress = {()=>navigation.navigate('ClosedRoom')} name = "cross" type = "entypo" />
                        </View>
                    {/* </View> */}
                </View>
        </View>
    )
}

export default ClosedAddTopic

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    },
    textInput:{
        color:'black',
        backgroundColor:'white',
        padding:10,
        height:60,
        bottom:0,
        width:'90%',
        borderBottomLeftRadius:14,
        borderTopLeftRadius:14,
    }
})
