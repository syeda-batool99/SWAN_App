import React, {useState,useRef} from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import { DARK_PEACH, PURPLE,PEACH } from './../Assets/Colors/index';
import AppText from './AppText';

const AppTextInput = ({text,onChangeText, onOpenCamera}) => {
    const refRBSheet = useRef();
    const [isEdit,setIsEdit] = useState(false)

    console.log('IMAGE PROP VALUE', text.data)

            //RB SHEET CODE
  const OptionSelectBox = () => {

    return (
        <View style = {{padding:10}}>
            {!text.data?(<>
                            <TouchableOpacity onPress = {()=>{refRBSheet.current.close(),setIsEdit(!isEdit)}}
                            style = {styles.itemContainer}>
                                
                                <View style = {{marginRight:15, paddingTop:4}}>
                                    <Image source = {require('../Assets/Images/Home/edit.png')} />
                                </View>
                                <View>
                                    <AppText >Edit Text</AppText>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress = {()=>refRBSheet.current.close()}
                            style = {styles.itemContainer}>
                                <View style = {{marginRight:15, paddingTop:4}}>
                                    <Image source = {require('../Assets/Images/Home/delete.png')} />
                                </View>
                                <View>
                                    <AppText >Delete Text</AppText>
                                </View>
                            </TouchableOpacity>
                        </>
            ):(
                <TouchableOpacity 
                onPress = {()=>refRBSheet.current.close()}
                style = {styles.itemContainer}>
                    <View style = {{marginRight:15, paddingTop:4}}>
                        <Image source = {require('../Assets/Images/Home/delete.png')} />
                    </View>
                    <View>
                        <AppText >Delete Photo</AppText>
                    </View>
                </TouchableOpacity>
            )}
        </View>)}










// main return
    return (
        <View >

            {typeof text == "object" && text.data?(
                        <View style = {[styles.container,isEdit && {borderColor:PURPLE}]}>
                            <Image source = {{uri: text.data.path}} style = {{height:200}}/>
                            <View style = {styles.iconContainer}>
                                <Icon onPress = {()=>refRBSheet.current.open()} name = 'menu' type = "entypo" raised size = {12}/>
                            </View>
                        </View>
            ):(
                typeof text == 'string'?(
                <View style = {[styles.container,isEdit && {borderColor:PURPLE}]}>
                    <TextInput 
                        placeholder = "Enter the text here..."
                        style = {styles.textInput}
                        multiline = {true}
                        onChangeText={(text)=>onChangeText(text)}
                        value = {text}
                        />
                    <View style = {styles.iconContainer}>
                        <Icon onPress = {()=>refRBSheet.current.open()} name = 'menu' type = "entypo" raised size = {12}/>
                    </View>
                    {isEdit?(
                        <TouchableOpacity onPress = {()=>{setIsEdit(!isEdit), text?.data?(onOpenCamera):null}} style = {styles.editContainer}>
                            <Image  source = {require('../Assets/Images/RegisterationCarousel/editPhoto.png')} style = {{height:25, width:25}}/>
                        </TouchableOpacity>
                    ):(null)}

                </View>):(null)
            )} 
        







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
                    container:[styles.Sheetcontainer,text?.data&& {height:110}]
                }}
                >
                <OptionSelectBox />
        </RBSheet>











        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    textInput:{
        padding:10
    },
    container:{
        borderWidth:2,
        borderStyle:'dashed',
        borderColor:DARK_PEACH,
        borderRadius:14,
        marginVertical:5
        // width:'95%'
    },
    iconContainer:{
        position:'absolute',
        marginVertical:'1%',
        right:-20,
        borderRadius:100
    },
    editContainer:{
        position:'absolute',
        // top:"25%",
        left:-15,
        borderRadius:100,
        marginVertical:'3%'
    },
    itemContainer:{
      flexDirection:'row',
      padding:10,
  },
  Sheetcontainer:{
    backgroundColor:PEACH,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    height:150
}
})
