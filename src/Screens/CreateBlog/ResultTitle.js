import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { PEACH,BROWN_SHADE,DARK_PEACH } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import { Icon } from 'react-native-elements';
import AppButton from '../../Components/AppButton';
import { BLUE, PURPLE } from '../../Assets/Colors/index';

const generatedTitle = (props) => {

    const IconTray = ()=>{
        return(
            <View style = {{ position:'absolute', right:5, flexDirection:'row', justifyContent:'space-around', marginVertical:20}}>
                <Icon color = {BROWN_SHADE} style = {{paddingHorizontal:10}} name = "check" type = 'feather'/>
            </View>
        )
    }

    return (
        <View style = {{height:'100%', width:'100%', backgroundColor:PEACH}}>
            <AppHeader back title = "Title" IconTray = {IconTray}/>
            <View >
                <TextInput 
                multiline = {true}
                placeholderTextColor='grey'
                value = "Don't be afraid to give up the good to go for the great.|" 
                style = {styles.titleText}/>
            </View>
            <View style = {{height:50, position:'absolute', bottom:10, alignSelf:'center'}}>
                <AppButton onPress = {()=>props.navigation.navigate('ResultCreateBlog')} textColor={PURPLE} button label = "Generate Title with AI"/>
            </View>
        </View>
    )
}

export default generatedTitle

const styles = StyleSheet.create({
    titleText:{
        borderBottomColor:DARK_PEACH,
        borderBottomWidth:1,
        padding:10,
        fontSize:20,
        fontFamily: 'SharpGrotesk-Book20',
        lineHeight:30,
        color:'black'
    },

})
