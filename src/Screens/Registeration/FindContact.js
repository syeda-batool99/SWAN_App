import React, {useState} from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PEACH, WHITE } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import { TEXT_BLACK, BLUE } from './../../Assets/Colors/index';
import CustomAlertModal from '../../Components/CustomAlertModal';
import AppText from './../../Components/AppText';

const FindContact = (props) => {
    const {navigation} = props;
    const [modalVisible,setModalVisible] = useState(false)
    return (
        <View style= {styles.container}>

            <AppHeader title='Find Contacts' {...props}/>

            <CustomAlertModal modalVisible = {modalVisible} 
                onPressBtn1 = {()=>{navigation.navigate('ContactListScreen')}} 
                onPressBtn2 = {()=>(setModalVisible(!modalVisible))}/>

            <View style = {{marginVertical:'25%'}}>
                <View style = {{ alignItems:'center'}}>
                    <Image source = {require('../../Assets/Images/RegisterationCarousel/Rectangle66.png')} />
                </View>
                <View style = {{alignItems:'center', marginTop:20}}>
                    <AppText button color = {TEXT_BLACK} textStyle = {{fontSize:24}}>See who is on Swan</AppText>
                    <AppText textStyle = {{fontSize:14, marginTop:15 ,lineHeight:20, textAlign:'center'}}>See which of your friends are already on swan & choose who to follow.</AppText>
                </View>
            </View>
            <View style = {{position:'absolute',width:'100%',bottom:0, alignItems:'center', flexDirection:'column'}}>
                <View style = {{height:50, width:'90%'}}>
                    <TouchableOpacity 
                        onPress = {()=>setModalVisible(!modalVisible)}
                        style = {{flex:1, justifyContent:'center',height:'100%',width:'100%', backgroundColor:BLUE, borderRadius:10}} >
                        <AppText button white center>Search Your Contacts</AppText>
                    </TouchableOpacity>
                </View>
                <View style={{height:50, width:'90%'}}>
                    <TouchableOpacity style = {{flex:1, justifyContent:'center',height:'100%',width:'100%',  borderRadius:10}}>
                        <AppText button center>Skip</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
    )
}

export default FindContact

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    }
})