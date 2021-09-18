import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Modal } from 'react-native';
import { Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import { PEACH, WHITE } from '../Assets/Colors';
import { BLUE, TEXT_BLACK } from './../Assets/Colors/index';
import AppText from './AppText';

const CustomAlertModal = (props) => {
    const {
        modalVisible,
        icon,
        alertText,
        btn1Txt,
        btn2Txt,
        onPressBtn1,
        onPressBtn2,
    } = props


    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style = {{height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,0.8)'}}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style = {{alignItems:'center',flexDirection:'column',justifyContent:'center',marginVertical:30}}>
                        <View>
                            {/* ICONS */}
                            <Image source = {icon?icon:require('../Assets/Images/RegisterationCarousel/person.png')} />
                        </View>
                        <View style= {{width:'80%', marginVertical:20}}>
                            {/* TEXT */}
                            <AppText alertText style = {{textAlign:'center', fontSize:18, lineHeight:27}}>{alertText?alertText:"Allow Swan to access your Contact list?"}</AppText>
                        </View>
                        <View style = {{position:'absolute',width:'100%',top:160, alignItems:'center', flexDirection:'column'}}>
                            <View style = {{height:50, width:'90%'}}>
                                <TouchableOpacity 
                                    onPress = {onPressBtn1}
                                    style = {{flex:1, justifyContent:'center',height:'100%',width:'100%', backgroundColor:BLUE, borderRadius:10}}>
                                    <Text style = {{color:WHITE, textAlign:'center'}}>{btn1Txt?btn1Txt:"Allow"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{height:50, width:'90%'}}>
                                <TouchableOpacity 
                                    onPress = {onPressBtn2}
                                    style = {{flex:1, justifyContent:'center',height:'100%',width:'100%',  borderRadius:10}}>
                                    <Text style = {{color:TEXT_BLACK, textAlign:'center'}}>{btn2Txt?btn2Txt:"Deny"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      </Modal>
    )
}

export default CustomAlertModal

const styles = StyleSheet.create({
  centeredView: {
    alignSelf: "center",
    position:'absolute',
    bottom:0,
    margin:20,
    width:'90%',
  },
  modalView: {
    backgroundColor: PEACH,
    borderRadius: 20,
    alignItems: "center",
    // width:'95%',
    height:300,

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
