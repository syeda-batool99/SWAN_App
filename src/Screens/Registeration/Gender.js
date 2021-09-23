import React, {useState, useEffect} from 'react';
import {
  View,
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

const Gender = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isPressMale, setIsPressMale] = useState(false);
  const [isPressFemale, setIsPressFemale] = useState(false);
 
  

  return (
    <View style={styles.container}>
      <AppHeader title="What's your gender" {...props} />

      <Subtitle title="Please enter your information below in order to login to your account." />

      <View style={styles.form}>
        <TouchableOpacity style={{flexDirection:'column',}}
        onPress={()=> setIsPressMale(true)}>
            <View>
            <Image source={require("../../Assets/Images/Gender/male.png")} style= {isPressMale ? styles.btnPressMale : styles.maleBtn} />
            <AppText center size = {14}>Male</AppText>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column',}} onPress={()=> setIsPressFemale(true)}>
            <Image source={require("../../Assets/Images/Gender/female.png")} style={isPressFemale ? styles.btnPressFemale : styles.femaleBtn}/>
            <AppText center size = {14}>Female</AppText>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
          
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {
            props.navigation.navigate('Username');
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
  maleBtn:{backgroundColor:CYAN, borderRadius:50},
  femaleBtn:{backgroundColor:PINK, borderRadius:50},
  btnPressMale:{
      borderColor:WHITE,
      borderWidth:4,
//       shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 11,
// },
// shadowOpacity: 0.57,
// shadowRadius: 15.19,
//elevation:11

      backgroundColor:CYAN, borderRadius:50
  },
  btnPressFemale:{
    borderColor:WHITE,
    borderWidth:4,
    backgroundColor:PINK, borderRadius:50
  }
});

export default Gender;
