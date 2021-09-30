import React, {useState} from 'react'
import { Image, StyleSheet, ScrollView, TouchableOpacity, View, Modal } from 'react-native'
import { PEACH } from '../../Assets/Colors'
import AppText from '../../Components/AppText';
import AppHeader from './../../Components/AppHeader';
import Subtitle from './../../Components/Subtitle';
import { BROWN_SHADE, BLUE } from './../../Assets/Colors/index';
import { RadioButton } from 'react-native-paper';
import CustomAlertModal from './../../Components/CustomAlertModal';


const ReportModal = (props) =>{
    const {onPressSubmit,onPressBack} = props
    console.log(onPressBack)
    return(
        <View style = {{width:'90%', height:'100%',}}>
                    <View style = {{alignItems:'center',flexDirection:'column',justifyContent:'center',marginVertical:30}}>
                      <View>
                          {/* ICONS */}
                          <Image source = {require('../../Assets/Images/Home/greentick.png')} />
                      </View>
                      <View style= {{width:'95%', marginVertical:20, alignItems:'center'}}>
                          {/* TEXT */}
                          <AppText center heading size = {18} textContainerStyle = {{ width:'100%'}}>Thanks for reporting this post </AppText>
                          <AppText alertText size = {12} center  textContainerStyle = {{ width:'100%', marginTop:10}} textStyle= {{lineHeight:15}}>You'll receive a notification once we've reviewed your report. Thanks for helping us keep swan a safe and supportive community.</AppText>
                      </View>
                      <View style = {{position:'relative',width:'100%', alignItems:'center', flexDirection:'column'}}>
                          <View style = {{height:50, width:'50%'}}>
                              <TouchableOpacity 
                                  onPress = {onPressBack}
                                  style = {{flex:1, justifyContent:'center',height:'100%',width:'100%', backgroundColor:BLUE, borderRadius:10}}>
                                  <AppText white center button >Back to Home</AppText>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
        </View>
    )
}

const ReportBlog = (props) => {
    const {onPressBack} = props;
    const [value, setValue] = React.useState('first');
    const [modalVisible, setmodalVisible] = React.useState(false);

    return (
        <ScrollView style = {{height:'100%', width:'100%', backgroundColor:PEACH}}>
                <Modal
                    visible = {modalVisible}
                    transparent = {true}
                    >
                    <View style = {{backgroundColor:'rgba(0,0,0,0.3)', height:'100%', width:'100%'}}>
                        <View style={styles.box}>
                            <View style={styles.welcomeBox}>
                                <ReportModal onPressBack={onPressBack} onPressSubmit = {()=>{setmodalVisible(!modalVisible)}}/>
                            </View>
                        </View>
                    </View>
                </Modal>


            <AppHeader title = "Report Content" onPressButton = {onPressBack}/>
            <View style = {{width:'90%',alignSelf:'center'}}>
                <Subtitle title = "Report content to swan app staff"
                    textContainerStyle = {{padding:0, marginVertical:10,width:'95%',alignSelf:'flex-start', alignItems:'flex-start'}}
                    textStyle = {{fontSize:20, textAlign:'left', lineHeight:30}}
                />

                <View style = {styles.blogContainer}>
                    <AppText>You are reporting the following blog.</AppText>
                    <View style = {styles.blogItem}>
                        <Image 
                            style = {{marginRight:10}}
                            source = {require('../../Assets/Images/Home/blogThumbnail.png')}/>
                        <View style = {styles.textContainer}>
                            <AppText button size = {16}>Top 10 Richest Footballer in the World in 2020</AppText>
                            <View style = {{flexDirection:'row', marginTop:10}}>
                                <AppText color = {BROWN_SHADE}>Andrew Mitchell</AppText>
                                <AppText textContainerStyle ={{marginLeft:20}} color = {BROWN_SHADE}>2 years ago</AppText>
                            </View>
                        </View>
                    </View>
                </View>

                <View style = {{padding:10}}>
                    <AppText heading size = {16}>Why are you reporting this?</AppText>
                </View>

                <View>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View style = {{top:2,justifyContent:'center'}}>
                                <RadioButton value="first" color = {BLUE} />
                            </View>
                            <AppText textStyle = {{lineHeight:25}} textContainerStyle = {{paddingTop:5, width:'85%'}}>This content is spam</AppText>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View style = {{top:2,justifyContent:'center'}}>
                                <RadioButton value="second" color = {BLUE} />
                            </View>
                            <AppText textStyle = {{lineHeight:25}} textContainerStyle = {{paddingTop:5, width:'85%'}}>This content should be marked as mature</AppText>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View style = {{top:2,justifyContent:'center'}}>
                                <RadioButton value="third" color = {BLUE} />
                            </View>
                            <AppText textStyle = {{lineHeight:25}} textContainerStyle = {{paddingTop:5, width:'85%'}}>This content is abusive</AppText>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View style = {{top:2,justifyContent:'center'}}>
                                <RadioButton value="fourth" color = {BLUE} />
                            </View>
                            <AppText textStyle = {{lineHeight:25}} textContainerStyle = {{paddingTop:5, width:'85%'}}>This content is violent</AppText>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View style = {{top:2,justifyContent:'center'}}>
                                <RadioButton value="fifth" color = {BLUE} />
                            </View>
                            <AppText textStyle = {{lineHeight:25}} textContainerStyle = {{paddingTop:5, width:'85%'}}>This content suggests the author might be at risk of hurting theselves.</AppText>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View style = {{top:2,justifyContent:'center'}}>
                                <RadioButton value="sixth" color = {BLUE} />
                            </View>
                            <AppText textStyle = {{lineHeight:25}} textContainerStyle = {{paddingTop:5, width:'85%'}}>This content infringes upon my copyright</AppText>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View style = {{top:2,justifyContent:'center'}}>
                                <RadioButton value="seven" color = {BLUE} />
                            </View>
                            <AppText textStyle = {{lineHeight:25}} textContainerStyle = {{paddingTop:5, width:'85%'}}>This content contains my private information</AppText>
                        </View>
                    </RadioButton.Group>
                    <View style = {{position:'relative',height:'100%', marginTop:'10%', marginBottom:50,width:'85%',alignSelf:'center',alignItems:'flex-end'}}>
                        <TouchableOpacity 
                            onPress = {()=>setmodalVisible(!modalVisible)}
                            style = {{backgroundColor:BLUE,borderRadius:10,height:50,width:120,justifyContent:'center',alignItems:'center'}}>
                            <AppText white button>Submit</AppText>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </ScrollView>
    )
}

export default ReportBlog

const styles = StyleSheet.create({
    blogContainer:{
    },
    blogItem:{
        marginVertical:15,
        flexDirection:'row',

    },
    textContainer:{
        width:'67.5%',
    },
    welcomeBox: {
        backgroundColor: PEACH,
        width: '100%',
        height: 280,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 28,
        paddingVertical: 10,
        alignItems:'center'
      },
      box: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
})
