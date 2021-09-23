import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import BackgroundCarousel from './../../Components/BackgroundCarousel';
import {
  BLUE,
  PEACH,
  WHITE,
  BROWN_SHADE,
  BLACK,
  TEXT_BLACK,
} from './../../Assets/Colors/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from './../../Components/AppText';

const EnterPassword = props => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [hideConfPass, setHideConfPass] = useState(true);


  return (
    <View style={styles.container}>
      <BackgroundCarousel />

      <View style={styles.box}>
        <View style={styles.welcomeBox}>

          <View style={{width: '100%', flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name={'arrow-back'} size={28} />
              </TouchableOpacity>
              <AppText heading textContainerStyle={{marginLeft: 8,bottom:3,}}>Password</AppText>
          </View>

          <AppText size = {14} textStyle = {{lineHeight:25}} >Please enter your information below in order to login to your account.</AppText>


            
            <View style={styles.textinput}>
                <TextInput
                // inlineImagePadding={10}
                placeholder="  Write Password"
                value={password}
                onChangeText={setPassword}
                type="password"
                secureTextEntry={hidePass ? true : false}
                autoCompleteType="password"
                // style={{paddingHorizontal:5}}
                />

                <FontAwesome5
                name={hidePass ? 'eye-slash' : 'eye'}
                size={15}
                color={BLACK}
                style={{alignSelf: 'center', right:10}}
                onPress={() => setHidePass(!hidePass)}
                />
            </View>
          

          <View style={{alignItems: 'center'}}>

            <TouchableOpacity
              style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
              onPress={() => {
                props.navigation.navigate('VerifyCode')
              }}>
              <AppText white button>Next</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[{marginVertical:10,paddingBottom:5}]}
              onPress={() => {
                props.navigation.navigate('ForgotpasswordScreen')
              }}>
              <Text style={{color: BLUE, fontSize: 15}}>Forgot Password</Text>
            </TouchableOpacity>

          </View>


          </View>
        </View>
      </View>
  );
};

export default EnterPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btn: {
    height: 50,
    width: '100%',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  welcomeBox: {
    backgroundColor: PEACH,
    width: '100%',
    // height: 275,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 30,
  },
  box: {
    position: 'absolute',
    bottom: 0,
    // flex:2,
    width: '100%',
  },

  textinput: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    borderRadius: 12,
    marginVertical: 15,
    justifyContent:'space-between',
    
  },
});
