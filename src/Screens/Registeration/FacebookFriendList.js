import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PEACH, TEXT_GREY, WHITE} from '../../Assets/Colors';
import AppHeader from './../../Components/AppHeader';
import {TEXT_BLACK, BLUE} from './../../Assets/Colors/index';
import AppText from '../../Components/AppText';

const FacebookFriendList = props => {
  const {navigation} = props;

  const FRIENDS_LIST = [
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
      pressed: true,
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
      pressed: true,
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
    {
      avatar: require('../../Assets/Images/RegisterationCarousel/avatar.png'),
      f_name: 'Steve',
      l_name: 'Jones',
      link: '@stevejones',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 10,
          backgroundColor: WHITE,
          width: '100%',
          alignSelf: 'center',
          padding: 10,
          paddingTop: 15,
          margin: 3,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 10}}>
            <Image source={item.avatar} />
          </View>
          <View>
            <AppText button color={'black'} size={14}>
              {item.f_name} {item.l_name}
            </AppText>
            <AppText color={TEXT_GREY} size={12}>
              {item.link}
            </AppText>
          </View>
        </View>
        <View>
          {!item.pressed ? (
            <TouchableOpacity
              style={{
                height: 35,
                width: 90,
                paddingTop: 8,
                backgroundColor: BLUE,
                flexDirection: 'row',
                borderRadius: 10,
                justifyContent: 'space-around',
              }}>
              <Image
                style={{left: 5}}
                source={require('../../Assets/Images/RegisterationCarousel/addFriend.png')}
              />
              <AppText
                color={WHITE}
                size={13}
                textStyle={{height: 25, right: 5}}>
                Add
              </AppText>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                height: 35,
                width: 90,
                paddingTop: 8,
                backgroundColor: '#B1D0FF',
                flexDirection: 'row',
                borderRadius: 10,
                justifyContent: 'space-around',
              }}>
              <AppText color={BLUE} size={13} textStyle={{height: 25}}>
                Pending
              </AppText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Facebook Friend" {...props} skip={true} />

      <View style={{width: '90%', alignSelf: 'center'}}>
        <View style={{marginBottom: 10}}>
          <AppText button color={TEXT_BLACK}>
            8 Friends are on Swan
          </AppText>
        </View>
      </View>
      <View style={{height: '82%'}}>
        <FlatList
          contentContainerStyle={{alignSelf: 'center', width: '90%'}}
          data={FRIENDS_LIST}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('PermissionScreen')}
        style={{
          height: 60,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: BLUE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AppText button color={WHITE}>
          Next
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default FacebookFriendList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: PEACH,
  },
});
