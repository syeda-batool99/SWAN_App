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
    <View style={{height: '15%'}}>
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
          SWAN
        </AppText>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name={'search1'} size={28} style={{marginRight: 10}} />
          <Feather name={'bell'} size={28} />
        </View>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={require('../Assets/Images/Icons/blog.png')} />
          <AppText button size={14}>
            {' '}
            Blog
          </AppText>
        </TouchableOpacity>
        <View style={styles.verticleLine}></View>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={require('../Assets/Images/Icons/videos.png')} />
          <AppText button size={14}>
            {' '}
            Video
          </AppText>
        </TouchableOpacity>
        <View style={styles.verticleLine}></View>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={require('../Assets/Images/Icons/live.png')} />
          <AppText button size={14}>
            {' '}
            Go Live
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
