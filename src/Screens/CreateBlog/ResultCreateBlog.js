import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { DARK_PEACH, PEACH } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import AppText from '../../Components/AppText'
import { BROWN_SHADE } from './../../Assets/Colors/index';
import ImagePicker from 'react-native-image-crop-picker';
import Tooltip from 'react-native-walkthrough-tooltip'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


const ResultCreateBlog = (props) => {

    const [toolTipVisible, setToolTipVisible] = useState(false)
    const {navigation} = props;

    const Popover = ()=>{
        return(
            <View style = {{backgroundColor:'white'}}>
                <AppText textStyle = {{lineHeight:20}}>Labels are used to categorise post on your blog. Use enter to separate labels.</AppText>
            </View>
        )
    }


    const [state,setState] = useState({
        images:'',
    })
    const onOpenGallery = props =>{
        ImagePicker.openPicker({
            cropping: true,
          }).then(image => {
            setState({images:image})
            //   Alert.alert("A")
            console.log("image",image);
          });
    }
    // const onOpenCamera = props => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //       }).then(image => {
    //         setState({...state,images:[...state.images,image]})
    //       });
    // }



    const IconTray = ()=>{
        return(
            <View style = {{ position:'absolute', right:5, flexDirection:'row', justifyContent:'space-around', marginVertical:20}}>
                <Icon onPress = {()=>props.navigation.navigate('DescriptionBlog')} style = {{paddingHorizontal:5}} name = "send" type = 'feather'/>
                <Icon  style = {{paddingHorizontal:5}} name = "dots-three-vertical" type = 'entypo'/>
            </View>
        )
    }

    return (
        <View style = {{height:'100%', width:'100%', backgroundColor:PEACH}}>
            <AppHeader {...props} title = "Create Blog"  IconTray = {IconTray}/>
            <ScrollView style = {styles.mainContainer}>

            <View >
                <TextInput 
                multiline = {true}
                value = "Don't be afraid to give up the good to go for the great.|" 
                style = {styles.titleText}/>
            </View>

                <TouchableOpacity style = {styles.uploadContainer} onPress = {onOpenGallery}>
                        {state?.images?(
                                    <View style={styles.image}>
                                        <Image source={{uri:state.images?.path}} style={{width:'100%',height:'100%'}} />
                                    </View>
                                    
                        ):(
                        <View style = {styles.upload}>
                            <Image source = {require('../../Assets/Images/CreateBlog/uploadcloud.png')}/>
                            <View style = {{marginTop:20}}>
                                <AppText center>Upload Image</AppText>
                                <AppText center textStyle = {{color:BROWN_SHADE, lineHeight:22}} textContainerStyle = {{width:'78%'}}>this image shown on thumbnail & main image</AppText>
                            </View>
                        </View>
                        )}
                </TouchableOpacity>

                <KeyboardAwareScrollView>

                <View>
                    <TextInput multiline scrollEnabled=  {true} placeholder = "Write what went in this blog..." style = {styles.blogText}/>
                </View>

                <View style = {styles.tagsView}>
                    <AppText textContainerStyle = {{marginLeft:10,justifyContent:'center'}}>Add Tags</AppText>
                    <TextInput style = {{flex:1, paddingLeft:15}} placeholder = 'Write tags here'/>
                    <View style = {{ justifyContent:'center'}} >
                    <Tooltip
                    backgroundColor = "transparent"
                          isVisible={toolTipVisible}
                          childContentSpacing = {25}
                          arrowSize = {{width:0, height:0}}
                          content={<Popover />}
                          placement="bottom"
                          onClose={() => setToolTipVisible(!toolTipVisible)}
                          contentStyle= {[{width:290,height:100, borderRadius:12, padding:20}]} 
                    >
                        <Icon onPress ={() => setToolTipVisible(!toolTipVisible)}  style = {{justifyContent:'center',flex:1,marginRight:10}} name = 'info' type='feather'/>
                    </Tooltip>
                    </View>
                </View>

                </KeyboardAwareScrollView>

            </ScrollView>
        </View>
    )
}

export default ResultCreateBlog

const styles = StyleSheet.create({
    mainContainer :{
        alignSelf:'center',
        width:'93%',
        height:'100%',
    },
    titleText:{
        borderBottomColor:DARK_PEACH,
        borderBottomWidth:1,
        lineHeight:30,
        padding:10,
        fontSize:20,
        fontFamily: 'SharpGrotesk-Book20',
    },
    uploadContainer:{
        borderStyle:'dashed',
        borderColor:DARK_PEACH,
        borderRadius:10,
        borderWidth:2,
        padding:10,
        marginVertical:20
    },
    upload:{
        alignItems:'center',
        alignSelf:'center',
        paddingVertical:30,
    },
    blogText:{
        borderBottomColor:DARK_PEACH,
        borderBottomWidth:1,
        padding:10,
        fontSize:14,
        fontFamily: 'SharpGrotesk-Book20',
    },
    tagsView:{
        flexDirection:'row', 
        borderBottomWidth:1, 
        borderBottomColor:DARK_PEACH, 
        justifyContent:'space-between',
        marginVertical:15
    },
    image:{
        width:'100%',
        height:200,
        alignSelf:'center'
    }
})
