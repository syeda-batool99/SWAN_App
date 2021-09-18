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
import DatePicker from 'react-native-date-picker'
import AppText from './../../Components/AppText';

const DateofBirth = props => {
    const [date, setDate] = useState(new Date());
 
  return (
    <View style={styles.container}>
      <AppHeader title="Date of Birth" {...props} />

      <Subtitle title="Please enter your information below in order to login to your account." />

      <View style={styles.form}>
        
        <View style={styles.formInput}>
        <DatePicker 
          fadeToColor = 'none'
          date={date} onDateChange={setDate} mode='date' 
          locale='en_DK'
          />
        </View>
      </View>

      <View style={styles.button}>
          
        <TouchableOpacity
          style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
          onPress={() => {
            props.navigation.navigate('FindContactScreen');
          }}
          >
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

    width:'100%',
    // borderRadius:12
  },
});

export default DateofBirth;
