import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const SplashScreen = () => {
    return(
        <View style={styles.container}>
              <Image style={{alignSelf:'center'}}
              source={require("../../Assets/Images/Icons/audioroom.png")}  /> 
        </View>

    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F64E80', 
        flex:4,
        justifyContent:'center'
}
});