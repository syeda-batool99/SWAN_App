import React from 'react'
import { StyleSheet,ScrollView, Image, View } from 'react-native'
import {PEACH, WHITE} from '../../Assets/Colors'
import AppHeader from './../../Components/AppHeader';
import * as Progress  from 'react-native-progress';
import AppText from '../../Components/AppText';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { TEXT_GREY, PURPLE } from './../../Assets/Colors/index';
import { LONG_TEXT } from './../../Constants/VBOOK_CONSTANT';
import TagInput  from 'react-native-tags-input';
import VbookScrollView from '../../Components/VbookScrollView';


const Tag = (props) =>{
    return(
        <View style = {{padding:5, borderRadius:40,alignItems: 'center',marginVertical:5,marginHorizontal:5,borderWidth: 2,borderColor: PURPLE}} >
            <AppText color = {PURPLE}>{props.tag}</AppText>
        </View>
    )
}

const ViewBook = (props) => {



    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <AppHeader {...props}/>


            <View style = {styles.topContainer}>
                <View>
                    <AppText center> 72% </AppText>
                    <View style = {{alignSelf:'center'}}>
                        <Progress.Bar progress={0.72} width={150} height={3} color={'#563AD7'} unfilledColor={'#D3D3D3'} borderColor={'white'}/>
                    </View>
                    <View style = {{alignSelf:'center', marginVertical:40}}>
                        <Image source = {require("../../Assets/Images/Vbook_Home_Trending_Books/Isaac.png")} />
                    </View>
                    <View style = {styles.iconTray}>
                         <View style={styles.bottomLeft}>
                            <FontAwesome name={'heart'} size={15} color='#FC1052' />
                            <AppText size={12} color='#FC1052'>
                                {' '}
                                175
                            </AppText>
                        </View>
                        <Image source = {require('../../Assets/Images/vbook/abcd.png')}/>
                        <Image source = {require('../../Assets/Images/vbook/share.png')}/>
                    </View>
                    <View>
                        <AppText heading center fontSize = {20}>Jungle Book</AppText>
                        <AppText color = {TEXT_GREY} center >Richard Kipling</AppText>
                    </View>
                 </View>
            </View>

            <View style = {styles.middleContainer}>
                <View style = {{marginVertical:5, flexDirection:'row', flexWrap:'wrap'}}>
                    <Tag tag = "Comic Book"/>
                    <Tag tag = "Animal"/>
                    <Tag tag = "Book"/>
                    <Tag tag = "Jungle Book"/>
                </View>
                <View style = {{width:'95%'}}>
                    <AppText>{LONG_TEXT}</AppText>
                 </View>   
            </View>

            <View style = {styles.bottomContainer}>
                <VbookScrollView navigation = {props.navigation} title = "People also Read"/>
            </View>

        </ScrollView>
    )
}

export default ViewBook

const styles = StyleSheet.create({
    container:{
        // height:'100%',
        width:'100%',
        backgroundColor:PEACH
    },
    topContainer:{
        alignSelf:'center',
        // backgroundColor:'red',
        // position:'absolute',
        marginTop:-40,
        // alignItems:'center'
        alignContent:'center',
        width:'100%',
    },  
    bottomLeft: {
        
        borderRadius: 50,
        backgroundColor: '#FFDFE2',
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
      },
      iconTray:{
          flexDirection:'row',
          alignSelf:'center',
          justifyContent:'space-between',
          width:'45%',
          marginBottom:20,
      },

    middleContainer:{
        backgroundColor:'white',
        width:'100%',
        paddingHorizontal:20,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingVertical:30
    },
    bottomContainer:{
        // alignItems:'center',
        paddingHorizontal:15,
        borderRadius:40    }
})
