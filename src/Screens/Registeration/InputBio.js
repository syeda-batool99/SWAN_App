import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
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
import AppText from './../../Components/AppText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AppButton from '../../Components/AppButton';

const InputBio = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={styles.container}>
      <AppHeader back title="Write your name" {...props} />
      <KeyboardAwareScrollView style = {{height:'100%'}}>

      <Subtitle title="Please enter your information below in order to login to your account." />

        <View style={styles.form}>
          <View style={styles.formInput}>
            <AppText>Firstname</AppText>
            <TextInput
              placeholder="Write firstname"
              style={styles.textinput}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.formInput}>
            <AppText >Lastname</AppText>
            <TextInput
              placeholder="Write lastname"
              style={styles.textinput}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      
      <View style = {styles.button}>
        <AppButton borderRadius= {12} onPress = {()=>props.navigation.navigate('Gender')} buttonContainerStyle = {{backgroundColor:BLUE}} label = "Next" button white />
      </View>


    </View>
  );
};
           // props.navigation.navigate('Gender');
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
    // backgroundColor:'red'
  },
  textinput: {
    backgroundColor: WHITE,
    borderRadius: 12,
    marginVertical: 5,
    paddingLeft:10
  },
  button:{
    height:50,
    width:'90%',
    alignSelf:'center',
    bottom:10
  }
});

export default InputBio;
