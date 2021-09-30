import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const SplashScreen = () => {
    return(
        <View style={styles.container}>
              <Image style={{alignSelf:'center'}}
              source={require("../../Assets/Vbook/Vbook_logo.png")}  /> 
        </View>

    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#563AD7', 
        flex:4,
        justifyContent:'center'
}
});