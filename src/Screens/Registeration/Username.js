import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  BLUE,
  PEACH,
  WHITE,
  BLACK,
  BROWN_SHADE,CYAN, PINK
} from './../../Assets/Colors/index';
import AppHeader from '../../Components/AppHeader';
import Subtitle from '../../Components/Subtitle';
import AppText from './../../Components/AppText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const Username = props => {
  const [userName, setUserName] = useState('');
 
  return (
    <View style={styles.container}>
      <AppHeader title="Pick a username" {...props} />

      <KeyboardAwareScrollView >

      <Subtitle title="Please enter your information below in order to login to your account." />


      <View style={styles.form}>
        <View style={styles.formInput}>
          <TextInput
            placeholder="Write username"
            style={styles.textinput}
            value={userName}
            onChangeText={setUserName}
          />
        </View>
      </View>

      </KeyboardAwareScrollView>

      <View style={styles.button}>
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {
            props.navigation.navigate('Password');
          }}
          >
          <AppText button white size={15}>Next</AppText>
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
    marginTop:'25%'
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
  button: {
    paddingBottom:10,
    paddingHorizontal: 30,
    alignItems: 'center',

  },
  btn: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});

export default Username;
