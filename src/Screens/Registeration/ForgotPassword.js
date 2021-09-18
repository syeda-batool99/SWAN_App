import React, {useState} from 'react'
import { Image, StyleSheet,TextInput, Text, TouchableOpacity, View } from 'react-native'
import { PEACH, WHITE } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import { BLUE } from './../../Assets/Colors/index';

const ForgotPassword = (props) => {
    const {navigation} = props;
    const [text,setText] = useState('')
    const [modalVisible,setModalVisible] = useState(false)
    return (
        <View style= {styles.container}>
            <AppHeader title='Forgot Password' {...props}/>

            <View style = {{marginVertical:'25%'}}>
                <View style = {{ alignItems:'center'}}>
                    <Image source = {require('../../Assets/Images/RegisterationCarousel/forgotPassword.png')} />
                </View>
                <View style = {{alignItems:'center', marginTop:20}}>
                    <Text style = {{fontSize:18, width:'70%', textAlign:'center'}}>Enter the email address associated with your account.</Text>
                    <Text style = {{fontSize:18, marginTop:15,width:'70%', textAlign:'center'}}>We will email you a link to reset your password.</Text>
                </View>
                <View style = {{marginTop:20, width:'80%', alignSelf:'center'}}>
                <View>
                    <TextInput
                        placeholder="Enter your email address"
                        style={styles.textinput}
                        value={text}
                        onChangeText={(text)=>setText(text)}
                    />
        </View>
                </View>
            </View>
            <View style = {{position:'relative',width:'100%',top:60,bottom:0, alignItems:'center', flexDirection:'column'}}>
                
                <View style={{height:40, width:'90%'}}>
                    <View style = {{flex:1, justifyContent:'center',height:'100%',width:'100%',  borderRadius:10}}>
                        <Text style = {{color:'#8F9CA9', textAlign:'center'}}>We'll send you an SMS verification code.</Text>
                    </View>
                </View>
                <View style = {{height:50, width:'90%'}}>
                    <TouchableOpacity 
                        onPress = {()=>navigation.navigate('VerificationScreen')}
                        style = {{flex:1, justifyContent:'center',height:'100%',width:'100%', backgroundColor:BLUE, borderRadius:10}} >
                        <Text style = {{color:WHITE, textAlign:'center'}}>Send OTP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    },
    textinput: {
        backgroundColor: WHITE,
        borderRadius: 12,
      },

})