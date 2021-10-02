import React,{useEffect,useState} from 'react'
import { Modal, StyleSheet, Image, View, ScrollView, TouchableOpacity,FlatList } from 'react-native'
import SplashScreen from './splash'
import AppText from './../../Components/AppText';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Feather from 'react-native-vector-icons/Feather';
import Icon  from 'react-native-elements';
import { DARK_PEACH, PEACH, TEXT_DARK_BLACK } from '../../Assets/Colors';
import PodcastComponent from './../../Components/PodcastComponent';
import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const AudioroomScreen = () => {
    const [modVisible,setModVisible] = useState(true)
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


    useEffect(()=>{
        setTimeout(()=>{
            setModVisible(false)
        },2000)
      },[])

    return (
        <View style = {styles.container}>
            <Modal visible = {modVisible} >
                <SplashScreen />
            </Modal>

            <View style={styles.headcontainer}>
                <View style = {{marginTop:5}}>
                    <Image
                    source={require('../../Assets/Images/Icons/date.png')}
                    style={{width: 25,height: 25}}
                    />
                </View>
                <AppText size={20} center button textStyle={{letterSpacing: 2,marginLeft: 20,}}>AudioRoom</AppText>
                <View style={{flexDirection: 'row', marginTop:7}}>
                    <AntDesign name={'search1'} size={20} style={{marginRight: 10}} />
                    <Feather name={'bell'} size={20} />
                </View>
            </View>

            <View style = {styles.mainContainer}> 
                <ScrollView contentContainerStyle = {{paddingBottom:50}}>
                    <PodcastComponent />
                    <PodcastComponent />


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
      }
})
