// import React, {useState} from 'react';
// import {
//   Image,
//   Pressable,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {PEACH, WHITE} from '../../Assets/Colors';
// import AppHeader from '../../Components/AppHeader';
// import CustomAlertModal from '../../Components/CustomAlertModal';
// import AppText from '../../Components/AppText';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
// import AppButton from './../../Components/AppButton';

// const Verification = props => {
//   const {navigation} = props;
//   return (
//     <View style={styles.container}>
//       <AppHeader title="Verification" {...props} />

//       <ScrollView contentContainerStyle = {{height:'100%', backgroundColor:'red'}}>

//       <View style={{marginVertical: '5%', backgroundColor:'orange'}}>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={require('../../Assets/Images/RegisterationCarousel/verify.png')}
//           />
//         </View>
//         <View style={{alignItems: 'center', marginTop: 20, paddingHorizontal:70}}>
//           <AppText button size={16} center>Enter the verification code we just sent you on your email address.</AppText>
//         </View>
//         <KeyboardAwareScrollView >
//           <SMSVerifyCode
//             verifyCodeLength={4}
//             containerPaddingRight={20}
//             containerPaddingLeft={20}
//             containerBackgroundColor="transparent"
//             codeViewBorderRadius={20}
//             codeViewBorderColor={TEXT_BLACK}
//             codeViewBorderWidth={1.5}
//             focusedCodeViewBorderColor={'black'}
//             codeFontSize={18}
//             codeColor={TEXT_BLACK}
//             codeViewWidth={80}
//             codeViewHeight={60}
//             style={{backgroundColor: 'red'}}
//           />
//         </KeyboardAwareScrollView>
//       </View>
//       </ScrollView>
//       <View style = {styles.buttonGroup}>
//         <View style = {styles.btn}>
//             <AppButton
//             onPress={() => navigation.navigate('VerificationScreen')}
//              borderRadius= {20} buttonContainerStyle = {{backgroundColor:BLUE}} white button color={'#8F9CA9'} center size={12} label = "Verify" />
//         </View>
//         {/* <View style = {styles.btn}>
//             <AppButton disabled alertText color={'#8F9CA9'} center size={12} label = "We'll send you an SMS verification code." />
//         </View> */}
//           <View style={{height: 50, width: '90%'}}>
//             <View style={{
//                 paddingTop: 15,
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 height: '100%',
//                 width: '100%',}}>
//               <AppText center color={TEXT_BLACK} size={14}>
//                 if you didn't receive a code!{' '}
//               </AppText>
//               <Pressable>
//                 <AppText color={BLUE} size={14}> Resend </AppText>
//               </Pressable>
//             </View>
//         </View>
//       </View> 
//       {/* <View
//         style={{
//           position: 'absolute',
//           width: '100%',
//           bottom: 0,
//           alignItems: 'center',
//           flexDirection: 'column',
//         }}>
//         <View style={{height: 50, width: '90%'}}>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('NewPassword')}
//             style={{
//               flex: 1,
//               justifyContent: 'center',
//               height: '100%',
//               width: '100%',
//               backgroundColor: BLUE,
//               borderRadius: 10,
//             }}>
//             <AppText button center color={WHITE}>Verify</AppText>
//           </TouchableOpacity>
//         </View>

//       </View> */}
//     </View>
//   );
// };

// export default Verification;

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: PEACH,
//   },
//   buttonGroup:{
//     backgroundColor:'pink',
//     alignSelf:'center',
//     alignItems:'center',
//     width:'90%',
//     paddingBottom:10,
//     bottom:0,

//     // flex:4
//   },
//   btn:{
//     height:50,
//     width:'100%'
//   }
// });

import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {PEACH, WHITE} from '../../Assets/Colors';
import AppHeader from '../../Components/AppHeader';
import AppText from '../../Components/AppText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import SMSVerifyCode from 'react-native-sms-verifycode';
import {TEXT_BLACK, BLUE, BROWN_SHADE} from './../../Assets/Colors/index';
import AppButton from './../../Components/AppButton';
import { Pressable } from 'react-native';

const Verification = props => {
  const {navigation} = props;
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <AppHeader title="Verification" {...props} />
      <ScrollView contentContainerStyle = {{height:'100%'}}>

      <KeyboardAwareScrollView >
      <View style={{marginVertical: '2%'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../Assets/Images/RegisterationCarousel/verify.png')}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20, paddingHorizontal:30}}>
          <AppText size={18} center >
          Enter the verification code we just sent you on your email address.
          </AppText>
        </View>
        <View style={{ width: '80%', alignSelf: 'center', alignItems:'center'}}>
          <SMSVerifyCode
            verifyCodeLength={4}
            containerPaddingRight={10}
            containerPaddingLeft={10}
            containerBackgroundColor="transparent"
            codeViewBorderRadius={20}
            codeViewBorderColor={TEXT_BLACK}
            codeViewBorderWidth={1.5}
            focusedCodeViewBorderColor={'black'}
            codeFontSize={18}
            codeColor={TEXT_BLACK}
            codeViewWidth={80}
            codeViewHeight={60}
            style={{backgroundColor: 'red'}}
          />
        </View>
      </View>
      </KeyboardAwareScrollView>

          {/*
        <View style={{height: 40, width: '90%'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              height: '100%',
              width: '100%',
              borderRadius: 10,
            }}>
            <AppText alertText color={'#8F9CA9'} center size={12}>
              We'll send you an SMS verification code.
            </AppText>
          </View>
        </View>
        <View style={{height: 50, width: '90%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('VerificationScreen')}
            style={{
              // flex: 1,
              justifyContent: 'center',
              height: '100%',
              width: '100%',
              backgroundColor: BLUE,
              borderRadius: 10,
            }}>
            <AppText  button color={WHITE} center>Send OTP</AppText>
          </TouchableOpacity>
        </View>*/}
      <View style = {styles.buttonGroup}>
        <View style = {styles.btn}>
            <AppButton
            onPress={() => navigation.navigate('NewPassword')}
             borderRadius= {20} buttonContainerStyle = {{backgroundColor:BLUE}} white button color={'#8F9CA9'} center size={12} label = "Verify" />
        </View>
          <View style={{height: 50, width: '90%'}}>
             <View style={{
                 paddingTop: 15,
                 flexDirection: 'row',
                 justifyContent: 'center',
                 height: '100%',
                 width: '100%',}}>
               <AppText center color={TEXT_BLACK} size={14}>
                 if you didn't receive a code!{' '}
               </AppText>
               <Pressable>
                 <AppText color={BLUE} size={14}> Resend </AppText>
               </Pressable>
             </View>
         </View>
      </View> 



      </ScrollView>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    backgroundColor: PEACH,
  },
  textinput: {
    backgroundColor: WHITE,
    borderRadius: 12,
    marginTop: 20,
    fontFamily:'SharpGrotesk-Book20',
    fontSize:14
  },
  buttonGroup:{
    // backgroundColor:'pink',
    alignSelf:'center',
    alignItems:'center',
    width:'90%',
    paddingBottom:10,

    // flex:4
  },
  btn:{
    height:50,
    width:'100%'
  }
});
