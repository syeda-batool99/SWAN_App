import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PEACH } from '../../Assets/Colors'
import AppButton from '../../Components/AppButton'
import AppHeader from '../../Components/AppHeader'
import AppText from '../../Components/AppText'
import ResultItemComponent from './../../Components/ResultItemComponent';
import { PURPLE } from './../../Assets/Colors/index';

const Result = (props) => {
    return (
        <View style = {{width:'100%', height:'100%', backgroundColor:PEACH}}>
            <AppHeader {...props} title = 'Result'/>
            <ScrollView contentContainerStyle = {{alignSelf:'center', width:'90%'}}>
                <AppText center size = {20}>Find your favorite results and edit them until you love them.</AppText>
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />
                    <ResultItemComponent />

            </ScrollView>

            <View style = {styles.Button}>
                <AppButton onPress = {()=>{props.navigation.navigate('GeneratedTitle')}} button white label = 'Make More' />
            </View>
        
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    Button:{
        height:60,
        width:'100%',
        backgroundColor:PURPLE
    }
})
