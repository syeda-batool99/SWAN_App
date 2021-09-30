import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  BLUE,
  PEACH,
  WHITE,
  BLACK,
  BROWN_SHADE,
} from './../../Assets/Colors/index';
import AppHeader from '../../Components/AppHeader';
import Subtitle from '../../Components/Subtitle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppText from './../../Components/AppText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AppButton from './../../Components/AppButton';

const Password = props => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);

  return (
    <View style={styles.container}>
      <AppHeader title="Set Password" {...props} />

      <KeyboardAwareScrollView>
      <Subtitle title="Please enter your information below in order to login to your account." />

      <View style={styles.form}>
        <View style={styles.formInput}>
          <AppText textStyle = {{marginBottom:5}} >Password</AppText>
          <View style={styles.textinput}>
            <TextInput
              placeholder="****************"
              style={{paddingLeft:10 ,width:"90%",color:'black'}}
              value={password}
              placeholderTextColor = "grey"
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
          <AppText textStyle = {{marginBottom:5}} >Confirm Password</AppText>
          <View style={styles.textinput}>
            <TextInput
              placeholder="****************"              
              style={{paddingLeft:10 ,width:"90%", color:'black'}}
              value={confirmPassword}
              onChangeText={setconfirmPassword}
              placeholderTextColor = "grey"
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
      </KeyboardAwareScrollView>

      <View style={styles.button}>
          <AppButton borderRadius= {12} onPress = {()=>props.navigation.navigate('DateofBirth')} buttonContainerStyle = {{backgroundColor:BLUE}} label = "Next" button white />
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
  }
});

export default Password;
