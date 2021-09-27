import React, { useState,useRef } from 'react'
import { StyleSheet, ScrollView, View,TouchableOpacity,Image } from 'react-native'
import {PEACH} from '../../Assets/Colors/index'
import AppHeader from '../../Components/AppHeader'
import { Icon } from 'react-native-elements';
import { BROWN_SHADE } from './../../Assets/Colors/index';
import AppTextInput from './../../Components/AppTextInput';
import ImagePicker from 'react-native-image-crop-picker';
import EditorComponent from './../../Components/EditorComponent';
import RBSheet from "react-native-raw-bottom-sheet";
import AppText from '../../Components/AppText';

const GenerateDescription = (props) => {
    const [text,onChangeText] = useState('')
    const refRBSheet = useRef();

        //RB SHEET CODE
  const OptionSelectBox = (props) => {

    return (
        <View style = {{padding:10}}>
            <TouchableOpacity onPress = {()=>{refRBSheet.current.close()}}
            style = {styles.itemContainer}>
                <View style = {{marginRight:15, paddingTop:4}}>
                    <Image source = {require('../../Assets/Images/Home/edit.png')} />
                </View>
                <View>
                    <AppText >Edit</AppText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress = {()=>refRBSheet.current.close()}
            style = {styles.itemContainer}>
                <View style = {{marginRight:15, paddingTop:4}}>
                    <Image source = {require('../../Assets/Images/Home/delete.png')} />
                </View>
                <View>
                    <AppText >Delete</AppText>
                </View>
            </TouchableOpacity>
        </View>)
        }
    

    const DESCRIPTION_DATA = [
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
        "Our has roots in a piece of classical Latin literature -> Go to website",
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

    const [state,setState] = useState({
        images:'',
    })
    const onOpenGallery = props =>{
        ImagePicker.openPicker({
            cropping: true,
          }).then(image => {
            setState({images:image})
            console.log("image",image);
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

    const IconTray = ()=>{
        return(
            <View style = {{ position:'absolute', right:5, flexDirection:'row', justifyContent:'space-around', marginVertical:20}}>
                <Icon color = {BROWN_SHADE} style = {{paddingHorizontal:10}} name = "check" type = 'feather'/>
            </View>
        )
    }

    return (
        <View style = {styles.container}>
            <AppHeader back title = "Description" IconTray = {IconTray}/>
            <ScrollView >
            
            {DESCRIPTION_DATA.map((item)=>{
                    const [isEdit, setIsEdit] = useState(false)

                    return(<View style = {{width:'85%', alignSelf:'center'}}>
                        <AppTextInput 
                            isEdit ={isEdit}
                            setIsEdit = {()=>setIsEdit(!isEdit)}
                            onPressMenu = {()=>refRBSheet.current.open()} 
                            text={item} 
                            onChangeText = {onChangeText} />
                    </View>)
                })}

            </ScrollView>
            <View style = {{position:'absolute',alignSelf:"center", bottom:70}}>
                <EditorComponent 
                    camera = {()=>onOpenCamera} 
                    text = {()=>console.log('text')}
                    photo = {()=>onOpenGallery}
                    video = {()=>onOpenGallery}
                    gif = {()=>onOpenGallery}
                    />
            </View>
            
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                    backgroundColor: "rgba(0,0,0,0.3)",
                    },
                    draggableIcon: {
                    backgroundColor: '#DBD4D1'
                    },
                    container:{
                        backgroundColor:PEACH,
                        borderTopRightRadius:30,
                        borderTopLeftRadius:30,
                        height:150
                    }
                }}
                >
                <OptionSelectBox {...props} />
        </RBSheet>
        
        </View>
    )
}

export default GenerateDescription

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:'100%',
        backgroundColor:PEACH
    },
    itemContainer:{
      flexDirection:'row',
      padding:10,
  }
})
