import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal, Alert
} from 'react-native';
import BackgroundCarousel from './../../Components/BackgroundCarousel';
import {
  BLUE,
  PEACH,
  WHITE,
  BLACK,
  BROWN_SHADE,
} from './../../Assets/Colors/index';
import {Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SMSVerifyCode from 'react-native-sms-verifycode';
import AppText from './../../Components/AppText';

const VerifyCode = props => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <BackgroundCarousel />
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style = {{height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,0.8)'}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText heading size = {20} textStyle = {{lineHeight:30, width:'83%'}}>Allow the application to read the message and enter the code?</AppText>
            <AppText size = {14} textStyle = {{width:'75%', lineHeight:20, marginBottom:25, marginTop:10}} >kod 9809 for confirmation in the application</AppText>
            
            <View style={{flexDirection:'row', width:'90%', alignSelf:'center'}}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => props.navigation.navigate('PhoneNumber')}
              >
                <AppText button center>Reject</AppText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn],{backgroundColor: BLUE, borderRadius:12, width:'50%', padding:10}}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AppText center white button>Permission</AppText>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
        </View>
      </Modal>

      <View style={styles.box}>
        <View style={styles.welcomeBox}>
          <View style={{width: '100%', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}>
              <Ionicons name={'arrow-back'} size={28} />
            </TouchableOpacity>
            <AppText heading textContainerStyle={{marginLeft: 8,bottom:3,}}>Verify Code</AppText>
          </View>
          <AppText size = {14} textStyle = {{lineHeight:25}} >
            Please enter your information below in order to login to your
            account.
          </AppText>
          <SMSVerifyCode
            //   ref={ref => (this.verifycode = ref)}
            //   onInputCompleted={this.onInputCompleted}
            verifyCodeLength={4}
            containerPaddingRight={50}
            containerBackgroundColor="transparent"
            codeViewBorderRadius={12}
            codeViewBorderColor={BLACK}
            codeViewBorderWidth={1.5}
            focusedCodeViewBorderColor={BLUE}
            codeFontSize={18}
            codeColor={BROWN_SHADE}
            codeViewWidth={69}
            codeViewHeight={60}
            // initialCodes={[0,0,0,0]}
          />

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={[{backgroundColor: BLUE, borderWidth: 0}, styles.btn]}

              onPress={() => {
                // props.navigation.navigate('FindContactScreen');
                props.navigation.navigate('InputBio');
              }}
              >
              <AppText button white>Next</AppText>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <AppText size = {11} textStyle = {{color:BROWN_SHADE}}>
                if you didn't recieve a code! {''}
              </AppText>
              <TouchableOpacity 
              onPress={() => setModalVisible(true)}
              >
                <AppText color = {BLUE} size = {11}>Resend</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerifyCode;

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
    marginVertical: 15,
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
    height: 300,
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
  PhoneBox: {
    backgroundColor: PEACH,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: WHITE,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  phoneInputContainerStyle: {
    marginVertical: 20,
    flexDirection: 'row',
    backgroundColor: WHITE,
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 50,
    width: '100%',
  },
  centeredView: {
    alignSelf: "center",
    position:'absolute',
    bottom:0,
    margin:20,
    width:'100%',
  },
  modalView: {
    margin: 10,
    borderRadius: 20,
    padding: 20,
    backgroundColor: PEACH,
    borderRadius: 20,
    // width:'95%',
    height:250,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5
  },
  button: {
    borderRadius: 12,
    padding: 10,
    width:'50%',
    marginRight: 10,
    // height: 50
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
 
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 25,
    width:300
  },
  textStyleReject: {
    color: BLACK,
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  },
  smallText:{
      fontSize: 18,
      marginBottom: 20
  }
});
