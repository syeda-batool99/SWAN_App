import React, { useState,useRef } from 'react'
import { StyleSheet, ScrollView, View,TouchableOpacity,Image } from 'react-native'
import {PEACH} from '../../Assets/Colors/index'
import AppHeader from '../../Components/AppHeader'
import { Icon } from 'react-native-elements';
import { BROWN_SHADE } from './../../Assets/Colors/index';
import AppTextInput from './../../Components/AppTextInput';
import ImagePicker from 'react-native-image-crop-picker';
import EditorComponent from './../../Components/EditorComponent';

const GenerateDescription = (props) => {
    const [text,onChangeText] = useState('')

    const [state,setState] = useState({
        images:'',
        videos:"",
        gif:'',
    })
    

    const DESCRIPTION_DATA = [
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
        "Our has roots in a piece of classical Latin literature -> Go to website",
        {data:state?.images},
        "Create blog posts that serve your larger company goals.",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
        "There are many variations of passages of Lorem ipsum available",
        "- It is a long established fact that a reader will be distracted by the readable.\n - Contrary to popular belief, Lorem Ipsum is not simply random text. \n - Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
        "Our has roots in a piece of classical Latin literature -> Go to website",
        "Create blog posts that serve your larger company goals.",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
        "There are many variations of passages of Lorem ipsum available",
        "- It is a long established fact that a reader will be distracted by the readable.\n - Contrary to popular belief, Lorem Ipsum is not simply random text. \n - Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
    
    ]

    const onOpenGallery = props =>{
        ImagePicker.openPicker({
            cropping: true,
          }).then(image => {
            setState({images:image})
            console.log("image",image);
          }).catch((callBack)=>{ // you forgot to add catch to this promise.
            console.log(callBack); // Please handle the callBack here.
           });
    }
    const onOpenCamera = props => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
          }).then(image => {
            setState({images:image})
            console.log("image",image);
          }).catch((callBack)=>{ // you forgot to add catch to this promise.
            console.log(callBack); // Please handle the callBack here.
           });
    }
    const onOpenVideoGallery = props =>{
        ImagePicker.openPicker({
            mediaType:'video'
          }).then(video => {
            // setState({videos:video})
            console.log("video",video);
          }).catch((callBack)=>{ // you forgot to add catch to this promise.
            console.log(callBack); // Please handle the callBack here.
           });
    }

    const IconTray = ()=>{
        return(
            <View style = {{ position:'absolute', right:15, flexDirection:'row', justifyContent:'space-around', marginVertical:20}}>
                <Icon onPress = {()=>props.navigation.navigate("ResultDescription")} color = {BROWN_SHADE} style = {{paddingHorizontal:5}} name = "check" type = 'feather'/>
            </View>
        )
    }

    // if(state.images){
    //     insertAt(DESCRIPTION_DATA,3,`require(${state.images})`)
    //     console.log(DESCRIPTION_DATA)
    // }
    

    return (
        <View style = {styles.container}>
            <AppHeader back title = "Description" IconTray = {IconTray}/>
            <ScrollView contentContainerStyle = {{paddingBottom:150}} >
            
            {DESCRIPTION_DATA.map((item,key)=>{

                    return(
                    <View key = {key} style = {{width:'85%', alignSelf:'center'}}>
                        <AppTextInput 
                            onOpenCamera = {onOpenCamera}
                            text={item} 
                            onChangeText = {onChangeText} />
                        
                    </View>)
                })}

            </ScrollView>
            <View style = {{position:'absolute',alignSelf:"center", bottom:70}}>
                <EditorComponent 
                    camera = {onOpenCamera} 
                    text = {()=>console.log('text')}
                    photo = {onOpenGallery}
                    video = {onOpenVideoGallery}
                    gif = {onOpenGallery}
                    />
            </View>
            

        
        </View>
    )
}

export default GenerateDescription

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:'100%',
        backgroundColor:PEACH
    }
})
