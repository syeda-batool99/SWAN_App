import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from 'react-native';
import {
  BLUE,
  PEACH,
  WHITE,
  BLACK,
  BROWN_SHADE,
  TEXT_BLACK,
} from './../../Assets/Colors/index';
import AppHeader from '../../Components/AppHeader';
import Subtitle from '../../Components/Subtitle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppText from '../../Components/AppText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const NewPassword = props => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          props.navigation.navigate('WelcomeScreen');
        }}>
        <View style={styles.ModalView}>
          <Image
            source={require('../../Assets/Images/password_change_success.png')}
          />
          <AppText button center size={16}  color={TEXT_BLACK} textStyle = {{width:300}}>
            Your password has been changed successfully.
          </AppText>
          <TouchableOpacity
            style={[{backgroundColor: BLUE, borderWidth: 0}, styles.Modalbtn]}
            onPress={() => props.navigation.navigate('WelcomeScreen')}>
            <AppText button color={WHITE} size={15}>Back to login</AppText>
          </TouchableOpacity>
        </View>
      </Modal>
      <AppHeader title="Set new password" {...props} />
        <KeyboardAwareScrollView>
      <Subtitle title="Please enter your information below in order to login to your account." />

      <View style={styles.form}>
        <View style={styles.formInput}>
          <AppText alertText size={14}>
            Password
          </AppText>
          <View style={styles.textinput}>
            <TextInput
              placeholder="  ****************"
              placeholderTextColor = "grey"
              style = {{color:'black'}}
              // style={styles.textinput}
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
              style={{alignSelf: 'center', right: 10}}
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
        </View>
        <View style={styles.formInput}>
          <AppText alertText size={14}>
            Confirm Password
          </AppText>
          <View style={styles.textinput}>
            <TextInput
              placeholderTextColor = "grey"
              placeholder="  ****************"
              // style={styles.textinput}
              style = {{color:'black'}}
              value={confirmPassword}
              onChangeText={setconfirmPassword}
              type="password"
              secureTextEntry={hideConfPass ? true : false}
              autoCompleteType="password"
            />
            <FontAwesome5
              name={hideConfPass ? 'eye-slash' : 'eye'}
              size={15}
              color={BLACK}
              style={{alignSelf: 'center', right: 10}}
              onPress={() => setHideConfPass(!hideConfPass)}
            />
          </View>
        </View>
      </View>
      </KeyboardAwareScrollView>

      <View style={styles.button}>
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {
            setIsVisible(true);
          }}>
          <AppText button size={15} color={WHITE}>
            Next
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    backgroundColor: PEACH,
  },
  form: {
    padding: '5%',
    alignContent: 'center',
    marginTop:'3%',
    height:'100%',
  },
  formInput: {
    marginVertical: 5,
  },
  textinput: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    borderRadius: 12,
    marginVertical: 5,
    justifyContent:'space-between'
  },
  button:{
    height:50,
    width:'90%',
    alignSelf:'center',
    bottom:5
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
  
});

export default NewPassword;
