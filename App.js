import React, {useEffect, useState} from 'react'
import { StyleSheet, } from 'react-native'
import {NavigationContainer } from '@react-navigation/native';
 import RNBootSplash from 'react-native-bootsplash';

import MainNavigatior from './src/Navigation/index';
import RegisterationStack from './src/Navigation/StackScreen/RegisterationStack';

const App = () => {
 
  const [isUser,setIsUser] = useState(true)

  
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);


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
