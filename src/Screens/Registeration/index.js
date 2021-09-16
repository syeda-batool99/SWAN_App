import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BackgroundCarousel from './../../Components/BackgroundCarousel';

const WelcomeScreen = () => {

    return (
        <View style = {styles.container}>
            <BackgroundCarousel />
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
