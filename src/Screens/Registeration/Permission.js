import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DARK_PEACH, PEACH } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import { TEXT_BLACK, BLUE } from './../../Assets/Colors/index';
import { RadioButton } from 'react-native-paper';

const Permission = (props) => {
    const {navigation} = props;
    const [checked, setChecked] = useState('');
    return (
        <View style= {styles.container}>
            <AppHeader title='Permissions' {...props}/>
            <View style = {{ alignSelf:'center', width:'78%'}}>
                <Text style = {{textAlign:'center', color:TEXT_BLACK, lineHeight:20}}>Swan app is a audio, video, fun, games, hangout app, so we'll need you to allow a few things to get the party started.</Text>
            </View>

            <View style = {{borderTopColor:'#E6DFDB', width:'100%', alignItems:'center',borderTopWidth:1, marginTop:20, paddingTop:20}}>
                <View style = {styles.ItemContainer}>

                <View style = {{flexDirection:'row'}}>
                        <Image style = {{marginRight:10, marginTop:10}} source = {require('../../Assets/Images/RegisterationCarousel/camera.png')}/>
                        <View style = {{width:'60%'}}>
                            <Text style = {{fontSize:18, color:TEXT_BLACK}}>Camera and Mic</Text>
                            <Text style = {{fontSize:14, color:TEXT_BLACK}}>So your friends can see and hear you.</Text>
                        </View>
                        <View style = {{flex:1,justifyContent:'center', left:40}}>
                            <RadioButton
                                uncheckedColor={DARK_PEACH}
                                color = {BLUE}
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}/>
                        </View>
                    </View>
                
                </View>

                <View style = {styles.ItemContainer}>
                <View style = {{flexDirection:'row'}}>
                        <Image style = {{marginRight:10, marginTop:10}} source = {require('../../Assets/Images/RegisterationCarousel/notification.png')}/>
                        <View style = {{width:'60%'}}>
                            <Text style = {{fontSize:18, color:TEXT_BLACK}}>Notifications</Text>
                            <Text style = {{fontSize:14, color:TEXT_BLACK}}>So you know when your friends want to chat.</Text>
                        </View>
                        <View style = {{flex:1,justifyContent:'center', left:40}}>
                            <RadioButton
                                
                                uncheckedColor={DARK_PEACH}
                                color = {BLUE}
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}/>
                        </View>
                    </View>

                </View>
                <View style = {styles.ItemContainer}>

                    <View style = {{flexDirection:'row'}}>
                        <Image style = {{marginRight:10, marginTop:10}} source = {require('../../Assets/Images/RegisterationCarousel/location.png')}/>
                        <View style = {{width:'60%'}}>
                            <Text style = {{fontSize:18, color:TEXT_BLACK}}>Enable Location</Text>
                            <Text style = {{fontSize:14, color:TEXT_BLACK}}>So you can find friends who are near you.</Text>
                        </View>
                        <View style = {{flex:1,justifyContent:'center', left:40}}>
                            <RadioButton
                                // style = {{width:1}}
                                uncheckedColor={DARK_PEACH}
                                color = {BLUE}
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}/>
                        </View>
                    </View>

                </View>
            </View>
            <View>
                <TouchableOpacity onPress = {()=>navigation.navigate('AddProfilePhotoScreen')}>
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )
}

export default Permission

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    },
    ItemContainer:{
        flexDirection:'column', 
        justifyContent:'space-between', 
        borderRadius:10, width:'90%', 
        alignSelf:'center', 
        paddingLeft:10,
        margin:3,
        borderBottomWidth:1,
        borderBottomColor:'#E6DFDB',
        paddingBottom:10
    }
})
