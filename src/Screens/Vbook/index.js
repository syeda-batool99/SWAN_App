import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const SplashScreen = () => {
    return(
        <View style={{backgroundColor:'#563AD7', flex: 1, flexDirection:'column', padding: 20}}>
      <View style={{ flex: 2}}>
      </View>
      <View style={{ flex: 3}}>
          <Image style={{alignSelf:'center', position:'absolute', bottom:0}}
           source={require("../../Assets/Vbook/Vbook_logo.png")}  /> 
              </View>
      <View style={{ flex: 4,alignItems:'center'}}>
      </View>
    </View>

    )
}

export default SplashScreen;