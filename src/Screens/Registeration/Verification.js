import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PEACH, WHITE} from '../../Assets/Colors';
import AppHeader from '../../Components/AppHeader';
import {TEXT_BLACK, BLUE, BROWN_SHADE} from './../../Assets/Colors/index';
import CustomAlertModal from '../../Components/CustomAlertModal';
import SMSVerifyCode from 'react-native-sms-verifycode';
import AppText from '../../Components/AppText';

const Verification = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <AppHeader title="Verification" {...props} />

      <View style={{marginVertical: '25%'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../Assets/Images/RegisterationCarousel/verify.png')}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20, paddingHorizontal:70}}>
          {/* <Text style = {{fontSize:22, color:TEXT_BLACK}}>See who is on Swan</Text> */}
          <AppText
          button
          size={16}
          center
        >
            Enter the verification code we just sent you on your email address.
          </AppText>
        </View>
        <SMSVerifyCode
          //   ref={ref => (this.verifycode = ref)}
          //   onInputCompleted={this.onInputCompleted}
          verifyCodeLength={4}
          containerPaddingRight={20}
          containerPaddingLeft={20}
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
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View style={{height: 50, width: '90%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewPassword')}
            style={{
              flex: 1,
              justifyContent: 'center',
              height: '100%',
              width: '100%',
              backgroundColor: BLUE,
              borderRadius: 10,
            }}>
            <AppText button center color={WHITE}>Verify</AppText>
          </TouchableOpacity>
        </View>
        <View style={{height: 50, width: '90%'}}>
          <View
            style={{
              paddingTop: 15,
              flexDirection: 'row',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}>
            <AppText center color={TEXT_BLACK} size={14}>
              if you didn't receive a code!{' '}
            </AppText>
            <Pressable>
              <AppText color={BLUE} size={14}> Resend </AppText>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: PEACH,
  },
});
