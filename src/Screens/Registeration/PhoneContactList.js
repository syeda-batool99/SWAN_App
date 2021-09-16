import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PEACH, TEXT_GREY, WHITE } from '../../Assets/Colors';
import AppHeader from './../../Components/AppHeader';
import { TEXT_BLACK, BLUE } from './../../Assets/Colors/index';

const PhoneContactList = (props) => {
    const {navigation} = props;

    const FRIENDS_LIST = [
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'
        },
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'
        },
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'
        },
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'
        },
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'
        },
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'
        },
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'},
        {
        avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
        f_name: 'Steve',
        l_name: 'Jones',
        link: '@stevejones'},
    ]

    const LIST = [
        {
            avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
            f_name: 'Steve',
            l_name: 'Jones',
            link: '@stevejones'
            },
            {
            avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
            f_name: 'Steve',
            l_name: 'Jones',
            link: '@stevejones'},
            {
            avatar:require('../../Assets/Images/RegisterationCarousel/avatar.png'),
            f_name: 'Steve',
            l_name: 'Jones',
            link: '@stevejones'},
    ]

    const renderItem = ({item})=>{
        
        return(
        <View style = {{flexDirection:'row', justifyContent:'space-between', borderRadius:10,backgroundColor:WHITE, width:'100%', alignSelf:'center', padding:10, paddingTop:15,margin:3}}>
            <View style = {{flexDirection:'row'}}>
                <View style = {{marginRight:10}}>
                    <Image source = {item.avatar} />
                </View>
                <View>
                    <Text style = {{color:'black',fontSize:16}}>{item.f_name} {item.l_name}</Text>
                    <Text style = {{color:TEXT_GREY,fontSize:14}}>{item.link}</Text>
                </View>
            </View>
            <View >
            <TouchableOpacity style = {{height:35, width:80,paddingTop:8,backgroundColor:BLUE, flexDirection:'row', borderRadius:10,justifyContent:'space-evenly'}}>
                    <Image source = {require('../../Assets/Images/RegisterationCarousel/addFriend.png')}/>
                    <Text style = {{color:WHITE, height:25}}>Add</Text>
            </TouchableOpacity>
            </View>
        </View>)
    }


    return (
        <View style= {styles.container}>

            <AppHeader title='Contact List' />

            <View style = {{width:'90%', alignSelf:'center'}}>
                <View style = {{marginBottom:10}}>
                    <Text style = {{color : TEXT_BLACK}}>3 Friends are on Swan</Text>
                </View>

                <FlatList 
                data = {LIST}
                keyExtractor = {(item,index)=> (index.toString())}
                renderItem = {renderItem} />

            </View>

            <View style = {{width:'90%', alignSelf:'center'}}>
                <View style = {{marginBottom:10}}>
                    <Text style = {{color : TEXT_BLACK}}>Invite to Swan</Text>
                </View>

                <FlatList 
                data = {FRIENDS_LIST}
                keyExtractor = {(item,index)=> (index.toString())}
                renderItem = {renderItem} />

            </View>   

                <TouchableOpacity 
                onPress = {()=>navigation.navigate('FindFacebookFriendScreen')}
                style= {{height:60, width:'100%',position:'absolute',bottom:0,backgroundColor:BLUE,justifyContent:'center', alignItems:'center'}}>
                    <Text style = {{color:WHITE}}>Next</Text>
                </TouchableOpacity>
        </View>
    )
}

export default PhoneContactList

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    }
})
