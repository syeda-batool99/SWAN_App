import React, { useState } from 'react'
import { StyleSheet,ScrollView, Text, View, KeyboardAvoidingView } from 'react-native'
import {PEACH} from '../../Assets/Colors/index'
import AppHeader from '../../Components/AppHeader'
import { Icon } from 'react-native-elements';
import { BROWN_SHADE, PURPLE } from './../../Assets/Colors/index';
import AppTextInput from './../../Components/AppTextInput';
import ImagePicker from 'react-native-image-crop-picker';
import EditorComponent from './../../Components/EditorComponent';
import AppButton from './../../Components/AppButton';

const BlogDescription = (props) => {
    const [text,onChangeText] = useState('')

    const [state,setState] = useState({
        images:'',
        videos:'',
    })
    const onOpenGallery = props =>{
        ImagePicker.openPicker({
            cropping: true,
          }).then(image => {
            setState({images:image})
            console.log("image",image);
          });
    }
    const onOpenVideoGallery = props =>{
        ImagePicker.openPicker({
            cropping: true,
          }).then(video => {
            setState({videos:video})
            console.log("video",video);
          });
    }
    const onOpenCamera = props => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
          }).then(image => {
            setState({images:image})
            console.log("image",image);
          });
    }

    console.log(text)

    const IconTray = ()=>{
        return(
            <View style = {{ position:'absolute', right:5, flexDirection:'row', justifyContent:'space-around', marginVertical:20}}>
                <Icon onPress = {()=>props.navigation.navigate('ResultDescription')} color = {BROWN_SHADE} style = {{paddingHorizontal:10}} name = "check" type = 'feather'/>
            </View>
        )
    }

    return (
        <View style = {styles.container}>
            <AppHeader back title = "Description" IconTray = {IconTray}/>
            <ScrollView contentContainerStyle = {{height:'100%'}}>
                <View style = {{width:'85%', alignSelf:'center'}}>
                    <AppTextInput text={text} onChangeText = {onChangeText} />
                </View>
                {/* <KeyboardAvoidingView> */}
                <View style = {{position:'absolute', alignSelf:"center", bottom:70}}>
                    <EditorComponent 
                        camera = {onOpenCamera} 
                        text = {()=>console.log('text')}
                        photo = {onOpenGallery}
                        video = {onOpenVideoGallery}
                        gif = {onOpenGallery}
                     />
                </View>
                {/* </KeyboardAvoidingView> */}

            </ScrollView>
            <View style = {{height:50,position:'absolute', bottom:10, alignSelf:'center'}}>
                <AppButton onPress = {()=>props.navigation.navigate('GenerateDescriptionBlog')} textColor={PURPLE} button label = "Generate blog text with AI"/>
            </View>
        </View>
    )
}

export default BlogDescription

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:'100%',
        backgroundColor:PEACH
    }
})
