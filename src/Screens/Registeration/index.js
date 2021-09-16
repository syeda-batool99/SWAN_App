import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackgroundCarousel from './../../Components/BackgroundCarousel';
import { BLUE,PEACH,WHITE } from './../../Assets/Colors/index';
import { Icon } from 'react-native-elements';
import {TextInput} from 'react-native-paper'

const WelcomeScreen = () => {
    const [visible, setVisible] = useState(false)

    return (
        <View style = {styles.container}>
            <BackgroundCarousel />

            <View style = {styles.box}>
                {!visible?(
                <View style={styles.welcomeBox}>
                    <View style = {{width:'80%'}}>
                        <Text style={{fontSize: 22, }}>Welcome on Swan App Sign in or Join now</Text>
                    </View>

                    <View style = {styles.btnContainer}>
                        <TouchableOpacity style = {[{ borderWidth:2},styles.btn]}>
                            <View>
                                <Text>Sign in</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  style = {[{backgroundColor:BLUE, borderWidth:0},styles.btn]} onPress= {()=>{setVisible(!visible)}}>
                            <View>
                            <Text style = {{color:WHITE}} >Join Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
                ):(
                    <View style={styles.PhoneBox}>
                    <View style = {{flex:1, flexDirection:'row'}}>
                        <TouchableOpacity onPress = {()=>setVisible(!visible)} 
                            style = {{marginRight:10, marginTop:2}}>
                            <Icon name = 'arrowleft' type = 'antdesign' size = {25}/>
                        </TouchableOpacity>
                        <View >
                            <Text style = {{fontSize:20}}>Phone Number</Text>
                        </View>                        
                    </View>
                    <View style = {{marginTop:10}}>
                        <View>
                            <Text style = {{fontSize:14}}>Please verify your phone number so we know you are a real person.</Text>
                        </View>
                        <View>
                            <TextInput       
                                label="Phone number" />
                        </View>
                        <View>
                            <Text style = {{fontSize:12, color:'#878381', textAlign:'center'}}>We'll send you an SMS verification code.</Text>
                        </View>
                        <TouchableOpacity style={{height:40, width:'100%', backgroundColor:'lightblue', alignItems:'center', justifyContent:'center', borderRadius:10, marginTop:15}}>
                            <Text style = {{fontSize:15, color:WHITE}}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                )}

            </View>

        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    btn:{
        height:50,
        width:'45%',
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between'
    },
    welcomeBox:{ 
        backgroundColor:WHITE,  
        width:'100%',
        height:'100%',
        borderTopLeftRadius:32, 
        borderTopRightRadius:32, 
        paddingHorizontal:35, 
        paddingVertical: 30
    },
    box:{
        position:'absolute', 
        bottom:0,
        width:'100%',
    },
    PhoneBox:{ 
        backgroundColor:PEACH,  
        width:'100%',
        height:'100%',
        borderTopLeftRadius:32, 
        borderTopRightRadius:32, 
        paddingHorizontal:25, 
        paddingVertical: 20
    },
})
