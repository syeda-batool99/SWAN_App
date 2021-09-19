import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DARK_PEACH, PEACH, WHITE} from '../../Assets/Colors';
import AppHeader from '../../Components/AppHeader';
import {TEXT_BLACK, BLUE} from './../../Assets/Colors/index';
import {RadioButton} from 'react-native-paper';
import AppText from '../../Components/AppText';

const Permission = props => {
  const {navigation} = props;
  const [checked2, setChecked2] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return (
    <View style={styles.container}>
      <AppHeader title="Permissions" {...props} />
      <View style={{alignSelf: 'center', width: '78%'}}>
        <AppText center  size={12} color={TEXT_BLACK} textStyle={{lineHeight: 20}}>
          Swan app is a audio, video, fun, games, hangout app, so we'll need you
          to allow a few things to get the party started.
        </AppText>
      </View>

      <View
        style={{
          borderTopColor: '#E6DFDB',
          width: '100%',
          alignItems: 'center',
          borderTopWidth: 1,
          marginTop: 20,
          paddingTop: 20,
        }}>
        <View style={styles.ItemContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{marginRight: 10, marginTop: 10}}
              source={require('../../Assets/Images/RegisterationCarousel/camera.png')}
            />
            <View style={{width: '60%'}}>
              <AppText button size={16} color={TEXT_BLACK} >
                Camera and Mic
              </AppText>
              <AppText  size={14} color={TEXT_BLACK} textStyle={{lineHeight:20}}>
                So your friends can see and hear you.
              </AppText>
            </View>
            <View style={{justifyContent: 'center', left: 40}}>
              <RadioButton.Android
                uncheckedColor={DARK_PEACH}
                color={BLUE}
                // value="first"
                status={checked1 ? 'checked' : 'unchecked'}
                onPress={() => setChecked1(!checked1)}
              />
            </View>
          </View>
        </View>

        <View style={styles.ItemContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{marginRight: 10, marginTop: 10}}
              source={require('../../Assets/Images/RegisterationCarousel/notification.png')}
            />
            <View style={{width: '60%'}}>
            <AppText button size={16} color={TEXT_BLACK} >
                Notifications
              </AppText>
              <AppText  size={14} color={TEXT_BLACK} textStyle={{lineHeight:20}}>
                So you know when your friends want to chat.
              </AppText>
            </View>
            <View style={{justifyContent: 'center', left: 40}}>
              <RadioButton
                uncheckedColor={DARK_PEACH}
                color={BLUE}
                // value="first"
                status={checked2 ? 'checked' : 'unchecked'}
                onPress={() => setChecked2(!checked2)}
              />
            </View>
          </View>
        </View>
        <View style={styles.ItemContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{marginRight: 10, marginTop: 10}}
              source={require('../../Assets/Images/RegisterationCarousel/location.png')}
            />
            <View style={{width: '60%'}}>
            <AppText button size={16} color={TEXT_BLACK} >
                Enable Location
              </AppText>
              <AppText  size={14} color={TEXT_BLACK} textStyle={{lineHeight:20}}>
                So you can find friends who are near you.
              </AppText>
            </View>
            <View style={{justifyContent: 'center', left: 40}}>
              <RadioButton
                uncheckedColor={DARK_PEACH}
                color={BLUE}
                status={checked3 ? 'checked' : 'unchecked'}
                onPress={() => setChecked3(!checked3)}
              />
            </View>
          </View>
        </View>

        {/* <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                    <View style={{ flex: 4, alignSelf: 'center' }}>
                    <Text>First</Text>
                    </View>
                    <View style={{  }}>
                    <RadioButton
                        value="first"
                        status={checked1  ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1(!checked1)}
                    />
                    </View>
                </View> */}
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {
            props.navigation.navigate('AddProfilePhotoScreen');
          }}>
          <AppText button color={WHITE} size={15} >Next</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Permission;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: PEACH,
  },
  ItemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 10,
    margin: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#E6DFDB',
    paddingBottom: 10,
  },
  button: {
    flex: 3,
    padding: 30,
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '100%',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    position: 'absolute',
    bottom: 0,
  },
});
