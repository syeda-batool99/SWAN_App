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

const Username = props => {
  const [userName, setUserName] = useState('');
 
  return (
    <View style={styles.container}>
      <AppHeader title="Pick a username" {...props} />

      <Subtitle title="Please enter your information below in order to login to your account." />

      <View style={styles.form}>
        
        <View style={styles.formInput}>
          <TextInput
            placeholder="  Write username"
            style={styles.textinput}
            value={userName}
            onChangeText={setUserName}
          />
        </View>
      </View>

      <View style={styles.button}>
          
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {
            props.navigation.navigate('Password');
          }}
          >
          <AppText white button>Next</AppText>
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
    marginVertical:150,
    flexDirection:'row',
    justifyContent:'space-around',
    paddingHorizontal: 30,
    alignContent: 'center',
  },
  textinput: {
    backgroundColor: WHITE,
    borderRadius: 12,
    marginVertical: 5,
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
  formInput: {
    // position:'absolute',
    bottom: 0,
    top: 60,
    // marginVertical: 5,
    width:'100%'
  },
});

export default Username;
