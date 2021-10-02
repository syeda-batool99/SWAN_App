import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View ,Modal, ScrollView} from 'react-native'
import SplashScreen from './splash'
import UserHeader from './../../Components/UserHeader';
import { PEACH } from '../../Assets/Colors';
import ChatListItem from './../../Components/ChatListItem';
import { Icon } from 'react-native-elements';
import { PURPLE } from './../../Assets/Colors/index';

const ChatScreen = (props) => {
    const [modVisible,setModVisible] = useState(true)
    const {navigation} = props

    useEffect(()=>{
        setTimeout(()=>{
            setModVisible(false)
        },2000)
      },[])


    return (
        <View style = {styles.container}>
            <Modal visible = {modVisible} >
                <SplashScreen />
            </Modal>
            <UserHeader chat  {...props}/>

            <View style = {styles.chatListContainer}>
                <ScrollView contentContainerStyle = {{marginTop:15, paddingBottom:60}}>
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                </ScrollView>
            </View>
            <View style = {{position:'absolute',bottom:10, right:20, backgroundColor:'white'}}>
                <Icon onPress = {()=>navigation.navigate('NewMessage')} name = "pluscircle" type = "antdesign" color = {PURPLE} size = {40}/>
            </View>


        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    },
    chatListContainer:{
        backgroundColor:PEACH,
        borderTopRightRadius:14,
        borderTopLeftRadius:14,
        paddingHorizontal:20,
        flex:2,
    }
})
