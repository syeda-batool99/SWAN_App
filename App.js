import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
 import SplashScreen from 'react-native-splash-screen'
import MainNavigatior from './src/Navigation/index';
import RegisterationStack from './src/Navigation/StackScreen/RegisterationStack';

const App = () => {

  // const theme = {
  //   ...DefaultTheme,
  //   colors:{
  //     ...DefaultTheme.colors,
  //     border: "transparent",
  //   }
  // }

  // useEffect(()=>{
  //   SplashScreen.hide()
  // },[])

  const [isUser,setIsUser] = useState(false)
  if (isUser){
  return (
    <NavigationContainer>
      <MainNavigatior />
      {/* <RegisterationStack /> */}
    </NavigationContainer>
  )
}else{
    return (
      <NavigationContainer>
        {/* <MainNavigatior /> */}
        <RegisterationStack />
      </NavigationContainer>
    )}

}

export default App

const styles = StyleSheet.create({})
