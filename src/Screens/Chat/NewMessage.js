import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { PEACH } from '../../Assets/Colors';
import AppText from '../../Components/AppText';
import AppHeader from './../../Components/AppHeader';
import SearchBar from './../../Components/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactListComponent from './../../Components/ContactListComponent';
import { ScrollView, TouchableOpacity } from 'react-native';

const NewMessage = (props) => {
    const {navigation} = props
    return (
        <View style = {styles.container} >
            <AppHeader {...props} title = "New Message" />
            <ScrollView contentContainerStyle = {styles.mainContainer}>
                <SearchBar />
                <TouchableOpacity onPress = {()=>navigation.navigate('CreateGroup')} style = {styles.creategroup}>
                    <View>
                        <AppText button white>Create a new Group</AppText>
                    </View>
                    <View style = {{borderRadius:100, paddingVertical:3, paddingHorizontal:5, alignItems:'center', justifyContent:'center'}}>
                        <MaterialCommunityIcons name = 'greater-than' color = 'white' size = {15}/>
                    </View>
                </TouchableOpacity>
                <View style = {{marginVertical:15}}>
                    <ContactListComponent char = 'A'/>
                    <ContactListComponent char = 'B'/>
                    <ContactListComponent char = 'C'/>
                    <ContactListComponent char = 'D'/>
                    <ContactListComponent char = 'E'/>
                </View>
            </ScrollView>
        </View>
    )
}

export default NewMessage

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    },
    mainContainer:{
        alignSelf:"center",
        width:'90%'
    },
    creategroup:{
        flexDirection:'row',
        backgroundColor:'#2FBF86',
        justifyContent:'space-between',
        padding:20,
        borderRadius:14,
    }
})
