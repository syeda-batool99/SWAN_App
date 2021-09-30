import React, {useState} from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PEACH, WHITE } from '../../Assets/Colors'
import { TEXT_BLACK, BLUE } from './../../Assets/Colors/index';
import AppText from './../../Components/AppText';
import { HOME_STACK } from './../../Constants/variables';

const PublishScreen = (props) => {
    return (
        <View style={styles.ModalView}>
          <Image
            source={require('../../Assets/Images/CreateBlog/bigGreenTick.png')}
          />
          <AppText button textContainerStyle = {{marginVertical:10}} center size={16}  color={TEXT_BLACK} textStyle = {{width:300}}>
            Blog is Published
          </AppText>
          <View style ={{width:"80%"}}>

              <AppText center alrtText>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </AppText> 
       </View>

          <TouchableOpacity
            style={[{backgroundColor: BLUE, borderWidth: 0}, styles.Modalbtn]}
            onPress={() => {console.log('helloooo'),props.navigation.navigate('MainHome',{
                screen: HOME_STACK,
                params: {
                  screen: 'Blog',
                },
              })}}>
            <AppText button color={WHITE} size={15}>View Blog</AppText>
          </TouchableOpacity>
        </View>
    )
}

export default PublishScreen

const styles = StyleSheet.create({
    Modalbtn: {
        height: 50,
        // width: '100%',
        paddingHorizontal: 30,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        // position: 'absolute',
        // bottom: 0,
      },
      ModalView: {
        flex: 1,
        backgroundColor: PEACH,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
})