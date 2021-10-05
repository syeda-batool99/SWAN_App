import React from 'react'
import { ScrollView, StyleSheet, Image, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { DARK_PEACH,TEXT_GREY, PEACH } from '../Assets/Colors'
import AppText from './AppText'
import { PURPLE } from './../Assets/Colors/index';
import AppButton from './AppButton';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const PodcastView = ({onPressDown}) => {

    const PodcastHeader = ({onPressDown})=>{
        return(
            <View style = {styles.headerContainer}>
                <View style = {styles.leftComponent}>
                    <View style = {{paddingTop:5, paddingHorizontal:10}}>
                        <Icon onPress = {onPressDown} name = "down" type = "antdesign"  />
                    </View>
                    <View>
                        <AppText size = {20} >Hallway</AppText>
                    </View>
                </View>
                <View style = {styles.RightComponent}>
                    <View style = {{padding:5}}>
                        <Icon name = "search1" type = "antdesign" />
                    </View>
                    <View style = {{padding:5}}>
                        <Icon name = "bell" type = "feather" />
                    </View>
                </View>
            </View>
        )
    }

    const Person=({unmute, speakers})=>{
        return(
            <View>
            <View style = {{ width:65, alignSelf:'center'}}>
                <Image style = {{height:60, width:60}} source = {require('../Assets/Images/RegisterationCarousel/avatar.png')} />
                {speakers?(
                    unmute?(
                        <View style = {{ position:'absolute', bottom:-4, right:5}}>
                            <Image style = {{height:20,width:20}} source = {require('../Assets/Images/Icons/unmute.png')} />
                        </View>
                    ):(
                        <View style = {{ position:'absolute', bottom:-10, right:0}}>
                            <Image source = {require('../Assets/Images/Icons/mute.png')} />
                        </View>
                        )
                ):(null)}
            </View>

            <View style ={{alignSelf:'center', marginVertical:10}}>
                {speakers?(
                <AppText bold>Scott Baker</AppText>
                ):(
                <AppText bold>Baker</AppText>
                )}
            </View>
        </View>
        )
    }

    return (
        <View style= {styles.container}>
            <PodcastHeader onPressDown={onPressDown}/>
            <View style = {styles.mainContainer}>
                <ScrollView contentContainerStyle = {{width:'90%', alignSelf:'center', paddingVertical:15}}>
                    <View style = {{width:'100%',paddingBottom:20}}>
                        <AppText color = {TEXT_GREY}>UX UI Designer Club 🌈</AppText>
                        <AppText button>What A UX Designer Does Every Day💫🔮</AppText>
                    </View>

                    <View>
                        <View style = {styles.imgContainer}>
                            <Image style = {{height:70, width:70}} source = {require('../Assets/Images/RegisterationCarousel/avatar.png')} />
                            <View style = {{ position:'absolute', bottom:-10, right:-10}}>
                                <Image source = {require('../Assets/Images/Icons/mute.png')} />
                            </View>
                        </View>
                        <View style ={{alignSelf:'center', marginVertical:10}}>
                            <AppText bold>Scott Baker</AppText>
                        </View>
                    </View>

                    <View>
                        <View>
                            <AppText color = {PURPLE} button >Follow By the Speakers</AppText>
                        </View>
                        <View style = {{paddingVertical:20, flexDirection:'row', justifyContent:'space-between'}}>
                            <Person speakers unmute/>
                            <Person speakers />
                            <Person speakers />
                            <Person speakers />
                        </View>
                    </View>

                    <View>
                        <View>
                            <AppText color = {PURPLE} button >Other in Room</AppText>
                        </View>
                        <View style = {{paddingVertical:20, flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                            <Person />
                            <Person />
                            <Person />
                            <Person />
                            <Person />
                            <Person />
                            <Person />
                            <Person />
                            <Person />
                            <Person />
                        </View>
                    </View>
                </ScrollView>


                <View style = {styles.btmContainer}>
                    <View>
                        <View style = {{height:60,width:150, borderRadius:15,backgroundColor:'white'}}>
                            <AppButton label = "Leave Quietly" textColor = "red" />
                        </View>
                    </View>
                    <View style = {{flexDirection:'row', justifyContent:'space-evenly', marginVertical:5,paddingVertical:5, width:110}}>
                        <View style = {styles.iconStyle}>
                            <Icon color = "white" name = 'plus' type = 'antdesign' />
                        </View>
                        <View style = {styles.iconStyle}>
                            <Ionicons color = "white" name = 'hand-left' size = {20}/>
                        </View>
                    </View>
                </View>



            </View>
        </View>
    )
}

export default PodcastView

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:DARK_PEACH
    },
    headerContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        marginTop:10
    },
    leftComponent:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    RightComponent:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    mainContainer:{
        backgroundColor:PEACH,
        flex:1,
        marginTop:5,
    },
    imgContainer:{
        borderWidth:2,
        borderRadius:20,
        padding:5,
        alignSelf:'center',
        borderColor:PURPLE
    },
    btmContainer:{
        paddingVertical:25,
        paddingHorizontal:25,
        backgroundColor:DARK_PEACH,
        flexDirection:'row',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        justifyContent:'space-between'
    },
    iconStyle:{
        backgroundColor:PURPLE,
        borderRadius:100,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        // padding:5
    }
})
