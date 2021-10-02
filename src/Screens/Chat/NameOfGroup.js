import React from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { PEACH } from '../../Assets/Colors'
import AppHeader from './../../Components/AppHeader';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';

const PICTURE_LIST = [
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),    
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
    require('../../Assets/Images/RegisterationCarousel/avatar.png'),
]

const renderitem = ({item}) =>{
    return(
        <View style = {{padding:10}}>
            <Image source = {item} />
        </View>
    )
}

const NameOfGroup = () => {
    return (
        <View style = {styles.container}>
            <AppHeader title = "Create Group" />
            <View style = {{flex:4}}>

                    <View style = {{bottom:85,alignSelf:'center', position:'absolute'}}>
                        <SafeAreaView>
                            <FlatList
                            
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                horizontal
                                ho
                                data = {PICTURE_LIST}
                                renderItem = {renderitem}
                                contentContainerStyle = {{alignSelf:'center', alignContent:'center',justifyContent:'center',padding:10,paddingLeft:"43%"}}
                            />
                        </SafeAreaView>
                    </View>

                <View style = {{position:'absolute',alignSelf:'center',width:'90%',bottom:15, borderRadius:40,flexDirection:'row'}}>
                    {/* <View style = {{flexDirection:'row'}}> */}
                        <TextInput 
                            placeholder = 'Set name of this group'
                            placeholderTextColor = 'grey'
                            style = {styles.textInput}
                        />
                        <View style = {{backgroundColor:'white' , paddingVertical:15, paddingRight:10,borderBottomRightRadius:14, borderTopRightRadius:14,}}>
                            <Icon name = "cross" type = "entypo" />
                        </View>
                    {/* </View> */}
                </View>

            </View>

        </View>
    )
}

export default NameOfGroup

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    },
    mainContainer:{
        width:'90%',
        alignSelf:'center',
    },
    button:{
        height:50
    },
    textInput:{
        color:'black',
        backgroundColor:'white',
        padding:10,
        height:60,
        bottom:0,
        width:'90%',
        borderBottomLeftRadius:14,
        borderTopLeftRadius:14,
    }
})