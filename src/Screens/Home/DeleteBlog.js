import React,{useRef,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import { PEACH,BLUE } from '../../Assets/Colors';
import AppText from './../../Components/AppText';

const DeleteBlog = (props) => {
    const {onPressBack} = props
    const refRBSheet = useRef();

    useEffect(()=>{
        refRBSheet.current.open()
    },[])

    return (
        
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeDuration = {250}
          closeOnPressMask={false}
          onClose = { onPressBack}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.3)"
            },
            draggableIcon: {
              backgroundColor: "transparent"
            },
            container:{
                backgroundColor:PEACH,
                marginBottom:20,
                width:'90%',
                alignSelf:'center',
                borderRadius:10,
                paddingTop:10

            }
          }}
        >
          <View style={styles.modalView}>
            <AppText heading size = {20} textStyle = {{lineHeight:30, width:'83%'}}>Delete Blog</AppText>
            <AppText size = {14} textStyle = {{width:'100%', lineHeight:25, marginBottom:25, marginTop:10}} >This will remove this post from your blog. You will no longer be able to view or edit it onve deleted.</AppText>
            
            <View style={{flexDirection:'row', width:'100%', alignSelf:'center'}}>
              <TouchableOpacity
                style={[styles.button]}                
                onPress={()=>refRBSheet.current.close()}
              >
                <AppText button center>Cancel</AppText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn],{backgroundColor: BLUE, borderRadius:12, width:'50%', padding:10}}
                onPress={()=>refRBSheet.current.close()}
              >
                <AppText center white button>Delete blog</AppText>
              </TouchableOpacity>
            </View>
            
          </View>
        </RBSheet>
    );
}

export default DeleteBlog

const styles = StyleSheet.create({  
modalView: {
  borderRadius: 20,
  width:'80%',
  alignSelf:'center',
  // backgroundColor:'red',
},

btn: {
  height: 50,
  width: '100%',
  marginVertical: 15,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
},
button: {
  borderRadius: 12,
  padding: 10,
  width:'50%',
  marginRight: 10,
},
})
