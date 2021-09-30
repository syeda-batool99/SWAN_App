import React ,{useRef,useEffect}from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { StyleSheet, Image,Text, View } from 'react-native'
import { PEACH ,PURPLE} from '../Assets/Colors';
import * as Progress from 'react-native-progress'
import AppText from './AppText';

const RawBootomSheet = ({setOpenSheet}) => {
  const refRBSheet = useRef();

  useEffect(()=>refRBSheet.current.open(),[])

    return (
        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        onClose = {setOpenSheet}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
          draggableIcon: {
            backgroundColor: '#DBD4D1'
          },
          container:{
              backgroundColor:PURPLE,
              borderTopRightRadius:30,
              borderTopLeftRadius:30,
              height:170,
              alignItems:'center',
          }
        }}
      >
          <View>
              <AppText button white>Continue Reading</AppText>
                <View style={styles.bookContainer}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Image source={require('../Assets/Images/Progress_Pie/Jungle_Book.png')}/>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{marginLeft: 10, marginTop:5, fontSize: 14, color:'#272D37'}}>The Jungle Book (1984)</Text>
                            <Text style={{marginLeft: 10, marginTop:10, fontSize: 12, color:'#8F9CA9'}}>Rudyard Kipling</Text>
                            </View>
                        </View>
                        <View>
                            <Progress.Circle size={50} indeterminate={false} progress={0.70} color={'#563AD7'} unfilledColor={'#D3D3D3'} borderColor={'white'} showsText={true} formatText={()=> <Text>75%</Text>} />
                        </View>
                </View>
            </View>

      </RBSheet>
    )
}

export default RawBootomSheet

const styles = StyleSheet.create({
    bookContainer:{
        width:324, 
        height:80, 
        backgroundColor:'white', 
        marginVertical: 15, 
        borderRadius: 12, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        padding:10}
})
