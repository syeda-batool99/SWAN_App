import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const SplashScreen = () => {
    return(
        <View style={styles.container}>
              <Image style={{alignSelf:'center'}}
              source={require("../../Assets/Images/Chat/chatlogo.png")}  /> 
        </View>

    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F79A7B', 
        flex:4,
        justifyContent:'center'
}
});