import React, {useEffect, useState} from 'react'
import { StyleSheet,useColorScheme } from 'react-native'
import {NavigationContainer, DefaultTheme ,DarkTheme} from '@react-navigation/native';
 import RNBootSplash from 'react-native-bootsplash';

import MainNavigatior from './src/Navigation/index';
import RegisterationStack from './src/Navigation/StackScreen/RegisterationStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateBlogStack from './src/Navigation/StackScreen/CreateBlogStack';
import HomeStack from './src/Navigation/StackScreen/HomeStack';

const App = () => {
 
  const [isUser,setIsUser] = useState(true)

  const scheme = useColorScheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };
  
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);


//   if (isUser){
//   return (
//     <NavigationContainer>
//       <MainNavigatior />
//       {/* <RegisterationStack /> */}
//     </NavigationContainer>
//   )
// }else{
//     return (
//       <NavigationContainer>
//         {/* <MainNavigatior /> */}
//         <RegisterationStack />
//       </NavigationContainer>
//     )}

    const RootStack = createNativeStackNavigator()

    return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStack.Navigator screenOptions ={{headerShown:false}}>
          {/* <RootStack.Screen name = "RegisterationFlow" component = {RegisterationStack}/> */}
          <RootStack.Screen name = "MainHome" component = {MainNavigatior}/>
        </RootStack.Navigator>
        {/* <HomeStack /> */}
      </NavigationContainer>
    )


}

export default App

const styles = StyleSheet.create({})
