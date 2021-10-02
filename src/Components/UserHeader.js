import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {BROWN_SHADE, GRAYISH_WHITE, PEACH} from '../Assets/Colors';
import {BLUE} from './../Assets/Colors/index';
import AppText from './AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const UserHeader = props => {
  return (
    <View style={{height: 100}}>
      <View style={styles.container}>
        <Image
          source={require('../Assets/Images/RegisterationCarousel/profPhoto.png')}
          style={{width: 32, height: 32}}
        />
        <AppText
          size={20}
          center
          textStyle={{
            fontFamily: 'SharpGrotesk-Medium20',
            letterSpacing: 2,
            marginLeft: 20,
          }}>
          {props?.chat?'Chat':'SWAN'}
        </AppText>
        <View style={{flexDirection: 'row', marginTop:7}}>
          <AntDesign name={'search1'} size={20} style={{marginRight: 10}} />
          {!props?.chat?(
          <Feather name={'bell'} size={20} />
          ):(
          <Icon type = 'entypo' name='dots-three-vertical' size={20} />
          )}
          
        </View>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress = {()=>props.navigation.navigate('CreateBlogStack')}>
          {!props.chat?(
          <Image source={require('../Assets/Images/Icons/blog.png')} />
          ):(
          <Image source={require('../Assets/Images/Icons/chat.png')} />
          )}
          <AppText button size={14}>
            {' '}
            {props?.chat?'Chat':'Blog'}
          </AppText>
        </TouchableOpacity>
        <View style={styles.verticleLine}></View>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={require('../Assets/Images/Icons/videos.png')} />
          <AppText button size={14}>
            {' '}
            {props?.chat?'Status':'Video'}
          </AppText>
        </TouchableOpacity>
        <View style={styles.verticleLine}></View>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          {!props?.chat?(
          <Image source={require('../Assets/Images/Icons/live.png')} />
          ):(
          <Image source={require('../Assets/Images/Icons/call.png')} />
          )}
          <AppText button size={14}>
            {' '}
            {props?.chat?'Call':'Go Live'}
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: BROWN_SHADE,
  },
});
