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
              <Text style={{fontSize: 20, marginLeft: 20}}>Password</Text>
          </View>

          <Text style={{fontSize: 14, marginTop: 10}}> Please enter your information below in order to login to your account.</Text>

          <View >
            
            <View style={styles.textinput}>
                <TextInput
                placeholder="Write Password"
                value={password}
                onChangeText={setPassword}
                type="password"
                secureTextEntry={hidePass ? true : false}
                autoCompleteType="password"
                />

                <FontAwesome5
                name={hidePass ? 'eye-slash' : 'eye'}
                size={15}
                color={BLACK}
                style={{alignSelf: 'center', right:10}}
                onPress={() => setHidePass(!hidePass)}
                />
            </View>
          
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 12, color: BROWN_SHADE, marginBottom: 2}}>
              We'll send you an SMS verification code.
            </Text>
            <TouchableOpacity
              style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
              onPress={() => {
                props.navigation.navigate('VerifyCode')
              }}>
              <Text style={{color: WHITE, fontSize: 15}}>Next</Text>
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
    height: 275,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingVertical: 30,
  },
  box: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  PhoneBox: {
    backgroundColor: PEACH,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: WHITE,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  phoneInputContainerStyle: {
    // marginVertical: 20,
    flexDirection: 'row',
    backgroundColor: WHITE,
    borderRadius: 12,
    height: 50,
    width:'100%',
  },
  textinput: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    borderRadius: 12,
    marginVertical: 18,
    justifyContent:'space-between',
  },
});
