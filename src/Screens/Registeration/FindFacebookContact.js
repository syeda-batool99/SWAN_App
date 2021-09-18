import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PEACH, WHITE } from '../../Assets/Colors'
import AppHeader from '../../Components/AppHeader'
import { TEXT_BLACK, BLUE } from './../../Assets/Colors/index';
import CustomAlertModal from '../../Components/CustomAlertModal';

const FindFacebookContact = (props) => {
    const {navigation} = props;
    const [modalVisible,setModalVisible] = useState(false)
    return (
        <View style= {styles.container}>
            <AppHeader title='Find Friends'  {...props}/>
            <CustomAlertModal modalVisible = {modalVisible}
                icon={require('../../Assets/Images/RegisterationCarousel/facebook.png')}
                alertText = 'Allow Swan to access your facebook friends list?' 
                onPressBtn1 = {()=>{navigation.navigate('FacebookFriendListScreen')}} 
                onPressBtn2 = {()=>(setModalVisible(!modalVisible))}/>

            <View style = {{marginVertical:'25%'}}>
                <View style = {{ alignItems:'center'}}>
                    <Image source = {require('../../Assets/Images/RegisterationCarousel/Rectangle66.png')} />
                </View>
                <View style = {{alignItems:'center', marginTop:20}}>
                    <Text style = {{fontSize:22, color:TEXT_BLACK}}>Find Facebook Friends</Text>
                    <Text style = {{fontSize:14, marginTop:15,width:'60%', textAlign:'center'}}>You choose which friends to follow. We will never post to facebook withoutyour permission.</Text>
                </View>
            </View>
            <View style = {{position:'absolute',width:'100%',bottom:0, alignItems:'center', flexDirection:'column'}}>
                <View style = {{height:50, width:'90%'}}>
                    <TouchableOpacity 
                        onPress = {()=>setModalVisible(!modalVisible)}
                        style = {{flex:1, justifyContent:'center',height:'100%',width:'100%', backgroundColor:BLUE, borderRadius:10}} >
                        <Text style = {{color:WHITE, textAlign:'center'}}>Continue to Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:50, width:'90%'}}>
                    <TouchableOpacity style = {{flex:1, justifyContent:'center',height:'100%',width:'100%',  borderRadius:10}}>
                        <Text style = {{color:TEXT_BLACK, textAlign:'center'}}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
        </View>
    )
}

export default FindFacebookContact

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:PEACH
    }
})
// import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(true);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// export default App;