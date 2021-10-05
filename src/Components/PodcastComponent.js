import React from 'react'
import { StyleSheet,Image, TouchableOpacity, View } from 'react-native'
import { DARK_PEACH, WHITE } from '../Assets/Colors'
import AppText from './AppText'
import { TEXT_GREY, BROWN_SHADE } from './../Assets/Colors/index';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import SmallImageCircleList from './SmallImageCircleList';

const PodcastComponent = ({onPressDown}) => {
    return (
        <TouchableOpacity onPress = {onPressDown} style = {styles.container}>
            <View style = {{width:'100%', borderBottomColor:DARK_PEACH, paddingBottom:20 ,borderBottomWidth:1}}>
                <AppText color = {TEXT_GREY}>UX UI Designer Club 🌈</AppText>
                <AppText button>What A UX Designer Does Every Day💫🔮</AppText>
            </View>

            <View style = {styles.subcontainer}>
                <View style = {{ justifyContent:'space-evenly'}}>

                    <View>
                        <SmallImageCircleList />
                    </View>

                    <TouchableOpacity
                        style={{
                            // height: 35,
                            width: 90,
                            backgroundColor:'#F7F7F9',
                            flexDirection: 'row',
                            borderRadius: 10,
                            justifyContent: 'space-evenly',
                            alignItems:'center',
                            padding:5
                        }}>
                            <Ionicons size = {20} name = "chatbox-ellipses-outline" />
                        <AppText>
                            12+
                        </AppText>
                    </TouchableOpacity>
                </View>



                <View style= {{width:'55%', height:'100%'}}>
                    <AppText color = {TEXT_GREY}>Scott Baker 💬</AppText>
                    <AppText color = {TEXT_GREY}>Scott Baker 💬</AppText>
                    <AppText color = {TEXT_GREY}>Scott Baker 💬</AppText>
                    <AppText color = {TEXT_GREY}>Scott Baker 💬</AppText>
                </View>
            </View>


        </TouchableOpacity>
    )
}

export default PodcastComponent

const styles = StyleSheet.create({
    container:{
        backgroundColor:WHITE,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:30,
        marginVertical:10
    },
    subcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
    }
})
