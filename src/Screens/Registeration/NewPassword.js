import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,  Alert,
  Modal, Image
} from 'react-native';
import {
  BLUE,
  PEACH,
  WHITE,
  BLACK,
  BROWN_SHADE,
  TEXT_BLACK
} from './../../Assets/Colors/index';
import AppHeader from '../../Components/AppHeader';
import Subtitle from '../../Components/Subtitle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
            props.navigation.navigate("WelcomeScreen")
          }}
          >
          <View
            style={styles.ModalView}>
            <Image source={require('../../Assets/Images/password_change_success.png')}/>
            <Text style={styles.modalText}>
              Your password has been changed successfully.
            </Text>
            <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0},styles.Modalbtn]}
          onPress={() => props.navigation.navigate("WelcomeScreen")}>
          <Text style={{color: WHITE, fontSize: 15}}>Back to login</Text>
        </TouchableOpacity>
          </View>
        </Modal>
      <AppHeader title="Set new password" {...props} />

      <Subtitle title="Please enter your information below in order to login to your account." />

      <View style={styles.form}>
        <View style={styles.formInput}>
          <Text>Password</Text>
          <View style={styles.textinput}>
            <TextInput
              placeholder="  ****************"
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
              style={{alignSelf: 'center', right:10}}
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
        </View>
        <View style={styles.formInput}>
          <Text>Confirm Password</Text>
          <View style={styles.textinput}>
            <TextInput
              placeholder="  ****************"
              // style={styles.textinput}
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
              style={{alignSelf: 'center', right:10}}
              onPress={() => setHideConfPass(!hideConfPass)}
            />
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {setIsVisible(true)}}>
          <Text style={{color: WHITE, fontSize: 15}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PEACH,
  },
  form: {
    flex: 2,
    padding: 30,
    alignContent: 'center',
  },
  formInput: {
    // position:'absolute',
    bottom: 0,
    top: 80,
    marginVertical: 5,
  },
  textinput: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    borderRadius: 12,
    marginVertical: 5,
    justifyContent:'space-between'
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
  Modalbtn:{
    height: 50,
    // width: '100%',
    paddingHorizontal:30,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    // position: 'absolute',
    // bottom: 0,
  },
  ModalView:{
    flex: 1,
    backgroundColor:PEACH,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center', 
  },
  modalText:{textAlign: 'center', fontSize: 16, marginVertical:10, width:250, color:TEXT_BLACK}
});

export default NewPassword;
