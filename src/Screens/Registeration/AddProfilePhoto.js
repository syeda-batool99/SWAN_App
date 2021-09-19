import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PEACH, WHITE } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import { TEXT_BLACK, BLUE } from './../../Assets/Colors/index';
import CustomAlertModal from '../../Components/CustomAlertModal';
import AppText from '../../Components/AppText';

const AddProfilePhoto = (props) => {
    const {navigation} = props;
    const [modalVisible,setModalVisible] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState(false)
    return (
        <View style= {styles.container}>
            <AppHeader title='Add Profile Photo' {...props}/>
            <CustomAlertModal modalVisible = {modalVisible} 
                onPressBtn1 = {()=>{navigation.navigate('ContactListScreen')}} 
                onPressBtn2 = {()=>(setModalVisible(!modalVisible))}/>

            <View style = {{marginVertical:'25%'}}>
                {profilePhoto?(<>
                    
                    <View style = {{ alignItems:'center'}}>
                        <Image style = {{height:167, aspectRatio:1,}} source = {require('../../Assets/Images/RegisterationCarousel/AddImage.png')} />
                        <Image style = {{position:'absolute', top:4}} source = {require('../../Assets/Images/RegisterationCarousel/profPhoto.png')} />
                        <TouchableOpacity style = {{position:'relative', bottom:30, left:50}} >
                            <Image source = {require('../../Assets/Images/RegisterationCarousel/editPhoto.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style = {{alignItems:'center'}}>
                        <AppText button size={20} color={TEXT_BLACK}>Lets Personalize</AppText>
                        <AppText alertText center size={14} textStyle = {{marginTop:15,paddingHorizontal:60, lineHeight:20}}>Add a profile photo so your friends know it's you</AppText>
                    </View>
                    </>

                ):(
                    <>
                <View style = {{ alignItems:'center'}}>
                    <Image style = {{height:167, aspectRatio:1,}} source = {require('../../Assets/Images/RegisterationCarousel/AddImage.png')} />
                </View>
                <View style = {{alignItems:'center', marginTop:30}}>
                <AppText button size={20} color={TEXT_BLACK}>Lets Personalize</AppText>
                        <AppText alertText center size={14} textStyle = {{marginTop:15,paddingHorizontal:60, lineHeight:20}}>Add a profile photo so your friends know it's you</AppText>
                </View>
                </>
                )}

            </View>
            <View style = {{position:'absolute',width:'100%',bottom:0, alignItems:'center', flexDirection:'column'}}>
                <View style = {{height:50, width:'90%'}}>
                    <TouchableOpacity 
                        onPress = {()=>profilePhoto?navigation.navigate('ForgotpasswordScreen'):setProfilePhoto(!profilePhoto)}
                        style = {{flex:1, justifyContent:'center',height:'100%',width:'100%', backgroundColor:BLUE, borderRadius:10}} >
                        <AppText button color={WHITE} center >Add a Photo</AppText>
                    </TouchableOpacity>
                </View>
                <View style={{height:50, width:'90%'}}>
                    <TouchableOpacity style = {{flex:1, justifyContent:'center',height:'100%',width:'100%',  borderRadius:10}}>
                        <AppText button color={TEXT_BLACK} center size={15} >Skip</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
    )
}

export default AddProfilePhoto

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    }
})