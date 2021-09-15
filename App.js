import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
 import SplashScreen from 'react-native-splash-screen'
import MainNavigatior from './src/Navigation/index';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }

  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <NavigationContainer>
      <MainNavigatior />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
