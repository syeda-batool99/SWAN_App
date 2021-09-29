import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { DARK_PEACH, PEACH } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import AppText from '../../Components/AppText'
import { BROWN_SHADE, PURPLE } from './../../Assets/Colors/index';
import ImagePicker from 'react-native-image-crop-picker';
import Tooltip from 'react-native-walkthrough-tooltip'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Loader from './../../Components/Loader';
import  TagInput  from 'react-native-tags-input';


const ResultCreateBlog2 = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [toolTipVisible, setToolTipVisible] = useState(false)
    const {navigation} = props;
    const [text,setText] = useState("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",)

    const Popover = ()=>{
        return(
            <View style = {{backgroundColor:'white'}}>
                <AppText textStyle = {{lineHeight:20}}>Labels are used to categorise post on your blog. Use enter to separate labels.</AppText>
            </View>
        )
    }


    const [state,setState] = useState({
        tagsColor: "#3ca897",
        tagsText: '#fff',
        images:''})
    
      const [tags,setTags]= useState ({
          tag:'',
          tagsArray:[],
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
                <Icon onPress = {()=>setIsLoading(!isLoading)} style = {{paddingHorizontal:5}} name = "send" type = 'feather'/>
                <Icon  style = {{paddingHorizontal:5}} name = "dots-three-vertical" type = 'entypo'/>
            </View>
        )
    }

    return (
        <View style = {{height:'100%', width:'100%', backgroundColor:PEACH}}>
            <AppHeader {...props} title = "Create Blog"  IconTray = {IconTray}/>
            <Loader visible = {isLoading} onPressOnPress = {()=>{navigation.navigate('PublishScreen'),setIsLoading(!isLoading)}}/>

            <ScrollView style = {styles.mainContainer}>

            <View >
                <TextInput 
                multiline = {true}
                value = "Don't be afraid to give up the good to go for the great.|" 
                style = {styles.titleText}/>
            </View>

                <View style = {styles.uploadContainer} >
                        {state?.images?(
                            <>
                                    <View style={styles.image}>
                                        <Image source={{uri:state.images?.path}} style={{width:'100%',height:'100%'}} />
                                    </View>
                                    <TouchableOpacity onPress = {onOpenGallery} style = {styles.editIcon}>
                                    <Image source = {require('../../Assets/Images/RegisterationCarousel/editPhoto.png')} />
                                </TouchableOpacity >
                            </>
                                    
                        ):(
                            <>
                        <View style = {styles.upload}>
                                <Image source = {require('../../Assets/Images/Single_Blog/MainImage.png')} />
                        </View>
                        
                        <TouchableOpacity onPress = {onOpenGallery} style = {styles.editIcon}>
                            <Image source = {require('../../Assets/Images/RegisterationCarousel/editPhoto.png')} />
                        </TouchableOpacity >
                        </>
                        )}
                </View>

                <KeyboardAwareScrollView>

                <View>
                    <TextInput value = {text} multiline scrollEnabled=  {true} placeholder = "Write what went in this blog..." style = {styles.blogText}/>
                </View>

                <View style = {styles.tagsView}>
                    {/* <TextInput style = {{flex:1, paddingLeft:15}} placeholder = 'Write tags here'/> */}

                    <TagInput
                        updateState={setTags}
                        tags={tags}
                        placeholder={tags.tagsArray.length>0?(null):('Add Tags')}                           
                        leftElement={<AppText textContainerStyle = {{justifyContent:'center'}}>Add Tags</AppText>}
                        leftElementContainerStyle={{marginVertical: 8}}
                        containerStyle={[{width:'90%'},tags.tagsArray.length>0 && {width:'100%'}]}
                        // inputContainerStyle={{backgroundColor:'pink'}}
                        inputStyle={{ marginVertical:5}}
                        onFocus={() => setState({tagsColor: '#fff', tagsText: '#3ca897'})}
                        onBlur={() => setState({tagsColor: '#3ca897', tagsText: '#fff'})}
                        autoCorrect={false}
                        // tagsViewStyle = {{width:'70%'}}
                        tagStyle={styles.tag}
                        tagTextStyle={styles.tagText}
                        keysForTag={" "}/>

                    {!tags.tagsArray.length>0?(
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
                    ):(null)}

                </View>


                </KeyboardAwareScrollView>

            </ScrollView>
        </View>
    )
}

export default ResultCreateBlog2

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
    },
    editIcon:{
        position:'absolute',
        right:0
    },
    textInput: {
      height: 40,
    },
    tag: {
        backgroundColor: 'transparent',
        borderColor:PURPLE,
        padding:2,
        borderWidth:2,
      //   paddingVertical:5
      },
    tagText: {
        color: PURPLE,
      //   marginVertical:5,
      // backgroundColor:'orange'
      },
})
