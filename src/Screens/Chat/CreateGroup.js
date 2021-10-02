import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import  SearchBar  from '../../Components/SearchBar'
import { PEACH } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import ContactListComponent from '../../Components/ContactListComponent'
import AppButton from './../../Components/AppButton';
import { PURPLE } from './../../Assets/Colors/index';

const CreateGroup = (props) => {
    return (
        <View style = {styles.container}>
            <AppHeader title = "Create Group" />
            <ScrollView contentContainerStyle = {styles.mainContainer}>
                <SearchBar />
                <View style = {{marginVertical:15}}>
                    <ContactListComponent group char = 'A'/>
                    <ContactListComponent group char = 'B'/>
                    <ContactListComponent group char = 'C'/>
                    <ContactListComponent group char = 'D'/>
                    <ContactListComponent group char = 'E'/>
                </View>

            </ScrollView>
            <View style = {styles.button}>
                <AppButton onPress = {()=>props.navigation.navigate('NameOfGroup')} buttonContainerStyle = {{backgroundColor:PURPLE}} label = "Continue" white button />
            </View>
        </View>
    )
}

export default CreateGroup

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
    }
})
