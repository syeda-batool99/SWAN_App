import React,{useEffect,useState, useRef} from 'react'
import { Modal, StyleSheet, Image, View, ScrollView, TouchableOpacity,FlatList } from 'react-native'
import SplashScreen from './splash'
import AppText from './../../Components/AppText';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Feather from 'react-native-vector-icons/Feather';
import { DARK_PEACH, PEACH, TEXT_DARK_BLACK } from '../../Assets/Colors';
import PodcastComponent from './../../Components/PodcastComponent';
import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import PodcastView from './../../Components/PodcastView';
import AppButton from './../../Components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PURPLE } from './../../Assets/Colors/index';
import SmallImageCircleList from './../../Components/SmallImageCircleList';
import RBSheet  from 'react-native-raw-bottom-sheet';

const Topics = {
    topic: [
      {
        id: '1',
        title: 'Design',
        image: require('../../Assets/Images/Discover_More/Design.png'),
      },
      {
        id: '2',
        title: 'Marketing',
        image: require('../../Assets/Images/Discover_More/Marketing.png'),
      },
      {
        id: '3',
        title: 'Fun',
        image: require('../../Assets/Images/Discover_More/Fun.png'),
      },
      {
        id: '4',
        title: 'Health',
        image: require('../../Assets/Images/Discover_More/Health.png'),
      },
      {
        id: '5',
        title: 'Food',
        image: require('../../Assets/Images/Discover_More/Food.png'),
      },
      {
        id: '6',
        title: 'Movies',
        image: require('../../Assets/Images/Discover_More/Movies.png'),
      },
    ],
  };

const AudioroomScreen = ({navigation}) => {
    const [modVisible,setModVisible] = useState(true)
    const [podcastModal,setPodcastModal] = useState(false)

    const refRBSheet = useRef();

    
 const renderMore =({item}) =>{
    return (
        <TouchableOpacity
            style = {{paddingHorizontal:2,marginVertical:8}}>
          <Image source={item.image} />
          <AppText
              alertText
              size={14}
              color={TEXT_DARK_BLACK}
              center
              textStyle={{
                marginTop: 3,
                width: 100,
              }}>
              {item.title}
            </AppText>
        </TouchableOpacity>
      )
 }

 const SheetBox = () => {
   const [isSelected1, setisSelected1] = useState('first')

   const onPressGo = ()=>{
     if(isSelected1 == 'second'){
       return navigation.navigate('SocialRoomStack')
     }else if (isSelected1 == 'third'){
       return navigation.navigate('ClosedRoomStack')
     }
     else{
      return navigation.navigate('OpenRoomStack')
     }
   }

   return(
     <View style = {{alignContent:'center', alignSelf:'center', alignItems:'center'}}>
       <AppText size = {20} heading> Start A Room</AppText>
       <View>
         <AppText>Start a Room to open to everyone</AppText>
       </View>
       <View style = {{flexDirection:'row'}}>
         <TouchableOpacity onPress = {()=>setisSelected1('first')} style = {[{marginVertical:15,marginHorizontal:15,borderColor:'white', borderRadius:20,borderWidth:2, padding:2}, isSelected1 == "first" && {borderColor:PURPLE}]}>
            <Image source = {require('../../Assets/Images/Icons/openroom.png')} />
         </TouchableOpacity>
         <TouchableOpacity onPress = {()=>setisSelected1('second')} style = {[{marginVertical:15,marginHorizontal:15,borderColor:'white', borderRadius:20,borderWidth:2, padding:2}, isSelected1 == "second" && {borderColor:PURPLE}]}>
            <Image source = {require('../../Assets/Images/Icons/socialroom.png')} />
         </TouchableOpacity>
         <TouchableOpacity onPress = {()=>setisSelected1('third')} style = {[{marginVertical:15,marginHorizontal:15,borderColor:'white', borderRadius:20,borderWidth:2, padding:2}, isSelected1 == "third" && {borderColor:PURPLE}]}>
            <Image source = {require('../../Assets/Images/Icons/closedroom.png')} />
         </TouchableOpacity>
       </View>
       <View style = {{ width:300}}>
         <View style = {{height:50, borderRadius:15, backgroundColor:PURPLE}}>
           <AppButton onPress = {onPressGo} button white label = "Lets Go" />
         </View>
         <View style = {{height:50, borderRadius:15,}}>
           <AppButton onPress = {()=>navigation.navigate('AddTopic')} textColor = {PURPLE} label = "+ Add Topic" />
         </View>
       </View>
     </View>
   )
 }


    useEffect(()=>{
        setTimeout(()=>{
            setModVisible(false)
        },2000)
      },[])
    useEffect(()=>{
      refRBSheet.current.close()
    })

    return (
        <View style = {styles.container}>


            <Modal visible = {modVisible} >
                <SplashScreen />
            </Modal>
            <Modal visible = {podcastModal} animationType = "slide">
              <PodcastView onPressDown = {()=>setPodcastModal(!podcastModal)}/>
            </Modal>

            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              // onClose = {()=>refRBSheet.current.close()}
              customStyles={{
                wrapper: {
                  backgroundColor: "rgba(0,0,0,0.1)",
                },
                draggableIcon: {
                  backgroundColor: '#DBD4D1'
                },
                container:{
                    backgroundColor:PEACH,
                    borderTopRightRadius:30,
                    borderTopLeftRadius:30,
                    height:300,
                    alignItems:'center',
                }
              }}
            >
              <SheetBox />

            </RBSheet>



{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            
              <View style={styles.headcontainer}>
                <TouchableOpacity onPress = {()=> refRBSheet.current.open()} style = {{marginTop:5}}>
                    <Image
                    source={require('../../Assets/Images/Icons/date.png')}
                    style={{width: 25,height: 25}}
                    />
                </TouchableOpacity>
                <AppText size={20} center button textStyle={{letterSpacing: 2,marginLeft: 20,}}>AudioRoom</AppText>
                <View style={{flexDirection: 'row', marginTop:7}}>
                    <AntDesign name={'search1'} size={20} style={{marginRight: 10}} />
                    <Feather name={'bell'} size={20} />
                </View>
              </View>


            <View style = {styles.mainContainer}> 
                <ScrollView contentContainerStyle = {{paddingBottom:50}}>

                <View style = {{backgroundColor:'white', borderRadius:20,padding:10,flexDirection:'row', height:70,justifyContent:'space-between'}}>
                  <View style = {{flexDirection:'row', paddingTop:5}}>
                      <SmallImageCircleList />
                        <View style = {{height:20, alignSelf:'center', marginLeft:15}}>
                            <AppText  color = "red" size = {12}>Leave Quietly</AppText>
                        </View>
                  </View>
                    <View>
                          <View style = {{flexDirection:'row', justifyContent:'space-evenly', marginVertical:5,paddingVertical:5, width:110}}>
                              <View style = {styles.iconStyle}>
                                  <AntDesign color = "grey" name = 'plus' size = {15}/>
                              </View>
                              <View style = {styles.iconStyle}>
                                  <Ionicons color = "grey" name = 'hand-left' size = {15}/>
                              </View>
                          </View>
                    </View>
                </View>

                    <PodcastComponent onPressDown = {()=>setPodcastModal(!podcastModal)} />
                    <PodcastComponent  />

                    <View>
                        <View
                            style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            }}>
                            <AppText subtitle size={16}>
                            Tap your Interest
                            </AppText>
                            <TouchableOpacity >
                                <SimpleLineIcons name={'options-vertical'} size={20} />
                            </TouchableOpacity>
                        </View>
                        <SafeAreaView style={{marginTop: 10,alignItems:'center', marginBottom:15}}>
                            <FlatList
                            numColumns={3}
                            data={Topics.topic}
                            renderItem={renderMore}
                            keyExtractor={item => item.id}
                            contentContainerStyle = {{alignSelf:'center'}}
                            />
                        </SafeAreaView>
                    </View>

                    <PodcastComponent />

                </ScrollView>
            </View>

        </View>
    )
}

export default AudioroomScreen

const styles = StyleSheet.create({
    headcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        // backgroundColor:DARK_PEACH
      },
      container:{
          height:'100%',
          width:'100%',
          backgroundColor:DARK_PEACH,
      },
      mainContainer:{
          backgroundColor:PEACH,
          borderTopRightRadius:40,
          borderTopLeftRadius:40,
          padding:20,
          width:'100%',
      },
      iconStyle:{
          backgroundColor:'#F7F7F9',
          borderRadius:100,
          width:30,
          height:30,
          alignItems:'center',
          justifyContent:'center',
          // padding:5
      }
})
