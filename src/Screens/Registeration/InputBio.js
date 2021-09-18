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

const InputBio = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View style={styles.container}>
      <AppHeader back title="Write your name" {...props} />

      <Subtitle title="Please enter your information below in order to login to your account." />

      <View style={styles.form}>
        <View style={styles.formInput}>
          <AppText>Firstname</AppText>
          <TextInput
            placeholder="  Write firstname"
            style={styles.textinput}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.formInput}>
          <AppText >Lastname</AppText>
          <TextInput
            placeholder="  Write lastname"
            style={styles.textinput}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {
            props.navigation.navigate('Gender');
          }}>
          <AppText button white>Next</AppText>
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
});

export default InputBio;
