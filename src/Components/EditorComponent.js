import React from 'react'
import { StyleSheet, Text, TouchableOpacity,View , Image} from 'react-native'
import { Icon } from 'react-native-elements';

const EditorComponent = ({camera,text,photo,video,gif}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {camera}  style = {[styles.iconContainer,{paddingTop:12}]}>
                <Image source = {require('../Assets/Images/CreateBlog/camera.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {text} style = {[styles.iconContainer,{paddingTop:12}]}>
                <Image source = {require('../Assets/Images/CreateBlog/text.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {photo} style = {[styles.iconContainer,{paddingTop:12}]}>
                <Image source = {require('../Assets/Images/CreateBlog/addimage.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {video} style = {[styles.iconContainer,{paddingTop:10}]}>
                <Image source = {require('../Assets/Images/CreateBlog/play.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {gif}  style = {[styles.iconContainer,{paddingTop:10}]}>
                <Image source = {require('../Assets/Images/CreateBlog/gif.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default EditorComponent

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        borderRadius:40,
        // width:'60%',height:60
        flexDirection:'row'
    },
    iconContainer:{
        padding:10,
        margin:5,
    }
})
