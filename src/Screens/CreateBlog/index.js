import React, {useState,useRef,useEffect} from 'react'
import { Image, StyleSheet, TextInput, Dimensions,TouchableOpacity, View,ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { DARK_PEACH, PEACH } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import AppText from '../../Components/AppText'
import { BROWN_SHADE, PURPLE } from './../../Assets/Colors/index';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Tooltip from 'react-native-walkthrough-tooltip'
import RBSheet from "react-native-raw-bottom-sheet";
import TagInput from 'react-native-tags-input';

const CreateBlog = (props) => {

  const refRBSheet = useRef();
  const [toolTipVisible, setToolTipVisible] = useState(false)    
  const [state,setState] = useState({
    tagsColor: "#3ca897",
    tagsText: '#fff',
    images:''})

  const [tags,setTags]= useState ({
      tag:'',
      tagsArray:[],
  })


  useEffect (()=>{
    refRBSheet.current.close();
})

const OptionSelectBox = () => {

    return (
        <View style = {{padding:10}}>
            <TouchableOpacity onPress = {()=>{refRBSheet.current.close(),setIsEdit(!isEdit)}}
            style = {styles.itemContainer}>
                
                <View style = {{marginRight:15, paddingTop:4}}>
                    <Image source = {require('../../Assets/Images/CreateBlog/draft.png')} />
                </View>
                <View>
                    <AppText >Save to Draft</AppText>
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
        </View>
    )
}


    const Popover = ()=>{
        return(
            <View style = {{backgroundColor:'white'}}>
                <AppText textStyle = {{lineHeight:20}}>Labels are used to categorise post on your blog. Use enter to separate labels.</AppText>
            </View>
        )
    }



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
            <View style = {{ position:'absolute', right:5, flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
                <View style = {{ marginHorizontal:5}}>
                    <Icon onPress = {()=>props.navigation.navigate('AddBlogTitle')} color = {BROWN_SHADE}  name = "send" type = 'feather'/>
                </View>
                <View style = {{ marginHorizontal:5}}>
                    <Icon onPress = {()=>refRBSheet.current.open()}  color = {BROWN_SHADE} style = {{paddingHorizontal:15}} name = "dots-three-vertical" type = 'entypo'/>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style = {{ width:'100%', backgroundColor:PEACH}}>
    
            <AppHeader {...props} title = "Create Blog"  IconTray = {IconTray}/>
            <View style = {styles.mainContainer}>

                <View>
                    <TextInput placeholderTextColor='grey' placeholder = "Give me a tilte" style = {styles.titleText}/>
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
                    <TextInput placeholderTextColor='grey' multiline placeholder = "Write what went in this blog..." style = {styles.blogText}/>
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
                        tagsViewStyle = {{  position:'relative'}}
                        tagStyle={styles.tag}
                        tagTextStyle={styles.tagText}
                        keysForTag={"\n"}/>

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
          <OptionSelectBox />
        </RBSheet>



        </ScrollView>
    )
}

export default CreateBlog

const styles = StyleSheet.create({
    mainContainer :{
        alignSelf:'center',
        width:'93%',
        height:'100%',
    },
    titleText:{
        borderBottomColor:DARK_PEACH,
        borderBottomWidth:1,
        padding:10,
        fontSize:20,
        fontFamily: 'SharpGrotesk-Book20',
        color:'black'
    },
    uploadContainer:{
        borderStyle:'dashed',
        borderColor:DARK_PEACH,
        borderRadius:10,
        borderWidth:2,
        padding:10,
        // backgroundColor:'red',
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
        color:'black'
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
    itemContainer:{
      flexDirection:'row',
      padding:10,
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
