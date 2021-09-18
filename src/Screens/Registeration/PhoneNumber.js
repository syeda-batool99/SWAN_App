import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundCarousel from './../../Components/BackgroundCarousel';
import {
  BLUE,
  PEACH,
  WHITE,
  BROWN_SHADE,
  TEXT_BLACK,
} from './../../Assets/Colors/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhoneInput from 'react-native-phone-number-input';
import AppText from '../../Components/AppText';

const PhoneNumber = props => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      <BackgroundCarousel />

      <View style={styles.box}>
        <View style={styles.welcomeBox}>
          <View style={{width: '100%', flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name={'arrow-back'} size={28} />
              </TouchableOpacity>
            <AppText heading textContainerStyle={{marginLeft: 8,bottom:3,}}>Phone Number</AppText>
          </View>
          <Text style={{fontSize: 14, marginTop: 10}}>
            Please verify your phone number so we know you are a real person.
          </Text>
          <View  style = {{marginVertical:15}}>
              <PhoneInput
              containerStyle={styles.phoneInputContainerStyle}
              textInputStyle={{
                color:TEXT_BLACK,
                marginTop:4,
                height:30,
              padding:0}}
              textContainerStyle ={{
                backgroundColor:WHITE,
                borderTopRightRadius:12,
                borderBottomRightRadius:12,
                // borderLeftColor:'#101010',
                // borderLeftWidth: 1,
              }}
                ref={phoneInput}
                defaultValue={value}
                defaultCode="PK"
                onChangeFormattedText={text => {
                  setValue(text);
                }}
                layout='first'
                autoFocus
              />
          </View>

          {/* <StatusBar barStyle="dark-content" />
          {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )} */}

          
          <View style={{alignItems: 'center'}}>
            <AppText color={BROWN_SHADE} size={12}>
              We'll send you an SMS verification code.
            </AppText>
            <TouchableOpacity
              style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}
              onPress={() => {
                // const checkValid = phoneInput.current?.isValidNumber();
                // setShowMessage(true);
                // setValid(checkValid ? checkValid : false);
                props.navigation.navigate('EnterPassword')
              }}>
              <AppText button white >Next</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhoneNumber;

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
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 50,
    width:'100%',
  }
});
